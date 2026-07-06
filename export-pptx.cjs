const puppeteer = require('puppeteer');
const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const os = require('os');

const slideOrder = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'src/slideOrder.json'), 'utf-8')
);

const args = process.argv.slice(2);
const getArg = (name) => args.find((a) => a.startsWith(`--${name}=`))?.split('=')[1];

const APP_URL = getArg('url') || 'http://localhost:5174';
const OUTPUT = getArg('output') || path.join(__dirname, 'Presentation_2026.pptx');
const SLIDE_W = 1920;
const SLIDE_H = 1080;

// --pages=8 或 --pages=8-10：只导出指定页码范围（1 起始）
const PAGES = getArg('pages');
let startIdx = 0;
let endIdx = slideOrder.length - 1;
if (PAGES) {
  const [s, e] = PAGES.split('-').map(Number);
  startIdx = Math.max(0, (s || 1) - 1);
  endIdx = Math.min(slideOrder.length - 1, (e || s || slideOrder.length) - 1);
}

function emit(data) {
  process.stdout.write(JSON.stringify(data) + '\n');
}

/* 把指定幻灯片里视频 pic 的矩形几何改成圆角矩形（封面图与播放画面共用同一形状） */
async function roundVideoCorners(pptxPath, adjBySlide) {
  const JSZip = require('jszip');
  const zip = await JSZip.loadAsync(fs.readFileSync(pptxPath));
  for (const [slideNum, adj] of Object.entries(adjBySlide)) {
    const name = `ppt/slides/slide${slideNum}.xml`;
    const file = zip.file(name);
    if (!file) continue;
    let xml = await file.async('string');
    xml = xml.replace(/<p:pic>[\s\S]*?<\/p:pic>/g, (pic) => {
      if (!pic.includes('<a:videoFile')) return pic;
      return pic.replace(
        '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>',
        `<a:prstGeom prst="roundRect"><a:avLst><a:gd name="adj" fmla="val ${adj}"/></a:avLst></a:prstGeom>`
      );
    });
    zip.file(name, xml);
  }
  fs.writeFileSync(
    pptxPath,
    await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' })
  );
}

function findChrome() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ];

  const homeCache = path.join(os.homedir(), '.cache', 'puppeteer', 'chrome');
  if (fs.existsSync(homeCache)) {
    const versions = fs.readdirSync(homeCache).filter(d => d.startsWith('mac'));
    for (const v of versions.sort().reverse()) {
      const bin = path.join(homeCache, v, 'chrome-mac-arm64',
        'Google Chrome for Testing.app', 'Contents', 'MacOS', 'Google Chrome for Testing');
      candidates.push(bin);
    }
  }

  for (const p of candidates) {
    if (p && fs.existsSync(p)) return p;
  }
  return undefined;
}

(async () => {
  const totalSlides = endIdx - startIdx + 1;
  emit({ type: 'start', total: totalSlides });

  const executablePath = findChrome();
  const launchOpts = {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  };
  if (executablePath) launchOpts.executablePath = executablePath;

  let browser;
  try {
    browser = await puppeteer.launch(launchOpts);
  } catch (err) {
    emit({ type: 'error', message: `无法启动浏览器: ${err.message}` });
    process.exit(1);
  }

  try {
    const page = await browser.newPage();
    await page.setViewport({
      width: SLIDE_W + 128,
      height: SLIDE_H + 128,
      deviceScaleFactor: 2,
    });

    const startSlideId = slideOrder[startIdx];
    await page.evaluateOnNewDocument((slideId) => {
      sessionStorage.setItem('slide-current-id', slideId);
    }, startSlideId);
    await page.goto(APP_URL, { waitUntil: 'networkidle0', timeout: 30000 });

    await page.addStyleTag({
      content: `
        aside {
          display: none !important;
        }
        button[title="打开目录"],
        button[title="全屏演示"],
        div.pointer-events-none.opacity-20,
        .export-hide {
          display: none !important;
        }
        video::-webkit-media-controls {
          display: none !important;
        }
        .bg-zinc-600 {
          padding: 0 !important;
          background-color: black !important;
        }
        div[style*="1920"] {
          zoom: 1 !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          width: 1920px !important;
          height: 1080px !important;
        }
      `,
    });

    await new Promise((r) => setTimeout(r, 1500));

    const screenshotsDir = path.join(__dirname, 'export-screenshots');
    fs.mkdirSync(screenshotsDir, { recursive: true });

    const pptx = new PptxGenJS();
    pptx.layout = 'LAYOUT_16x9';

    const videoAdjBySlide = {};

    for (let i = startIdx; i <= endIdx; i++) {
      const label = slideOrder[i];
      emit({ type: 'progress', current: i - startIdx + 1, total: totalSlides, slide: label });

      await new Promise((r) => setTimeout(r, 1000));

      const slideEl = await page.$('div[style*="width: 1920px"]');

      if (slideEl) {
        const imgPath = path.join(
          screenshotsDir,
          `slide-${String(i).padStart(3, '0')}.png`
        );
        await slideEl.screenshot({ path: imgPath, type: 'png' });

        const slide = pptx.addSlide();
        slide.addImage({ path: imgPath, x: 0, y: 0, w: '100%', h: '100%' });

        // 页面里若有 <video>，在截图上叠加可播放的视频（位置按元素实际区域换算）
        const videoInfo = await page.evaluate(() => {
          const root = document.querySelector('div[style*="width: 1920px"]');
          const video = root && root.querySelector('video');
          if (!video || video.style.display === 'none') return null;
          const rootRect = root.getBoundingClientRect();
          const rect = video.getBoundingClientRect();
          const radius =
            parseFloat(getComputedStyle(video.parentElement).borderRadius) || 0;
          return {
            src: video.getAttribute('src') || '',
            x: (rect.left - rootRect.left) / rootRect.width,
            y: (rect.top - rootRect.top) / rootRect.height,
            w: rect.width / rootRect.width,
            h: rect.height / rootRect.height,
            // roundRect 的 adj：圆角半径占短边的比例 × 100000
            adj: Math.round((radius / Math.min(rect.width, rect.height)) * 100000),
          };
        });

        if (videoInfo && videoInfo.src.startsWith('/')) {
          const videoPath = path.join(__dirname, 'public', videoInfo.src);
          if (fs.existsSync(videoPath)) {
            let cover;
            try {
              const videoEl = await slideEl.$('video');
              if (videoEl) {
                const buf = await videoEl.screenshot({ type: 'png' });
                cover = `data:image/png;base64,${buf.toString('base64')}`;
              }
            } catch (_) {}

            slide.addMedia({
              type: 'video',
              path: videoPath,
              cover,
              x: videoInfo.x * 10,
              y: videoInfo.y * 5.625,
              w: videoInfo.w * 10,
              h: videoInfo.h * 5.625,
            });
            if (videoInfo.adj > 0) videoAdjBySlide[i - startIdx + 1] = videoInfo.adj;
          }
        }
      }

      if (i < endIdx) {
        await page.keyboard.press('ArrowRight');
      }
    }

    await pptx.writeFile({ fileName: OUTPUT });
    if (Object.keys(videoAdjBySlide).length > 0) {
      await roundVideoCorners(OUTPUT, videoAdjBySlide);
    }
    emit({ type: 'done', output: OUTPUT });

    await browser.close();
  } catch (err) {
    emit({ type: 'error', message: err.message });
    try { await browser.close(); } catch (_) {}
    process.exit(1);
  }
})();
