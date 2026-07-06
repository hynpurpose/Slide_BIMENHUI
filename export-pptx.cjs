const puppeteer = require('puppeteer');
const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

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

/* PowerPoint「单击视频时播放」的 timing 节点模板（{SPID} 为视频 pic 的形状 id）。
 * 结构与 PowerPoint 手动插入视频并设为“单击时”生成的 XML 一致：
 * interactiveSeq 监听对视频形状本身的点击 → togglePause；
 * cMediaNode 启动条件为 indefinite（不随翻页/单击序列自动开播） */
const CLICK_TO_PLAY_TIMING_XML =
  '<p:timing><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst>' +
  '<p:seq concurrent="1" nextAc="seek">' +
  '<p:cTn id="2" restart="whenNotActive" fill="hold" evtFilter="cancelBubble" nodeType="interactiveSeq">' +
  '<p:stCondLst><p:cond evt="onClick" delay="0"><p:tgtEl><p:spTgt spid="{SPID}"/></p:tgtEl></p:cond></p:stCondLst>' +
  '<p:endSync evt="end" delay="0"><p:rtn val="all"/></p:endSync>' +
  '<p:childTnLst><p:par><p:cTn id="3" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>' +
  '<p:par><p:cTn id="4" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>' +
  '<p:par><p:cTn id="5" presetID="2" presetClass="mediacall" presetSubtype="0" fill="hold" nodeType="clickEffect">' +
  '<p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>' +
  '<p:cmd type="call" cmd="togglePause"><p:cBhvr><p:cTn id="6" dur="1" fill="hold"/><p:tgtEl><p:spTgt spid="{SPID}"/></p:tgtEl></p:cBhvr></p:cmd>' +
  '</p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par></p:childTnLst>' +
  '</p:cTn>' +
  '<p:nextCondLst><p:cond evt="onClick" delay="0"><p:tgtEl><p:spTgt spid="{SPID}"/></p:tgtEl></p:cond></p:nextCondLst>' +
  '</p:seq>' +
  '<p:video><p:cMediaNode vol="80000"><p:cTn id="7" fill="hold" display="0">' +
  '<p:stCondLst><p:cond delay="indefinite"/></p:stCondLst>' +
  '</p:cTn><p:tgtEl><p:spTgt spid="{SPID}"/></p:tgtEl></p:cMediaNode></p:video>' +
  '</p:childTnLst></p:cTn></p:par></p:tnLst></p:timing>';

/* 后处理含视频的幻灯片：
 * 1. 视频 pic 的矩形几何改成圆角矩形（封面图与播放画面共用同一形状）
 * 2. 注入「单击时播放」timing：只有点视频本身才播放，翻页/普通单击不触发 */
async function postProcessVideoSlides(pptxPath, adjBySlide) {
  const JSZip = require('jszip');
  const zip = await JSZip.loadAsync(fs.readFileSync(pptxPath));
  for (const [slideNum, adj] of Object.entries(adjBySlide)) {
    const name = `ppt/slides/slide${slideNum}.xml`;
    const file = zip.file(name);
    if (!file) continue;
    let xml = await file.async('string');
    let spid = null;
    xml = xml.replace(/<p:pic>[\s\S]*?<\/p:pic>/g, (pic) => {
      if (!pic.includes('<a:videoFile')) return pic;
      spid = pic.match(/<p:cNvPr id="(\d+)"/)?.[1] || null;
      if (adj > 0) {
        pic = pic.replace(
          '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>',
          `<a:prstGeom prst="roundRect"><a:avLst><a:gd name="adj" fmla="val ${adj}"/></a:avLst></a:prstGeom>`
        );
      }
      return pic;
    });
    if (spid && !xml.includes('<p:timing>')) {
      xml = xml.replace(
        '</p:sld>',
        CLICK_TO_PLAY_TIMING_XML.replace(/\{SPID\}/g, spid) + '</p:sld>'
      );
    }
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

        // 页面里若有 <video>：视频叠在整页截图上方（保证放映时可点击播放），
        // 四角用「角贴片」小图盖住，圆角效果不依赖播放器对形状几何的支持（Keynote 兼容）
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
            radiusPx: radius,
            cssW: rect.width,
            // roundRect 的 adj：圆角半径占短边的比例 × 100000
            adj: Math.round((radius / Math.min(rect.width, rect.height)) * 100000),
          };
        });

        const videoPath =
          videoInfo && videoInfo.src.startsWith('/')
            ? path.join(__dirname, 'public', videoInfo.src)
            : null;

        if (videoPath && fs.existsSync(videoPath)) {
          // 封面：视频元素截图（含播放键/LIVE 角标），烘焙圆角透明度
          let cover;
          try {
            const videoEl = await slideEl.$('video');
            if (videoEl) {
              const buf = await videoEl.screenshot({ type: 'png' });
              const rawCover = `data:image/png;base64,${buf.toString('base64')}`;
              cover = await page.evaluate(
                async (dataUrl, radiusPx, cssW) => {
                  const img = new Image();
                  await new Promise((res, rej) => {
                    img.onload = res;
                    img.onerror = rej;
                    img.src = dataUrl;
                  });
                  const scale = img.width / cssW;
                  const c = document.createElement('canvas');
                  c.width = img.width;
                  c.height = img.height;
                  const ctx = c.getContext('2d');
                  ctx.beginPath();
                  ctx.roundRect(0, 0, c.width, c.height, radiusPx * scale);
                  ctx.clip();
                  ctx.drawImage(img, 0, 0);
                  return c.toDataURL('image/png');
                },
                rawCover,
                videoInfo.radiusPx,
                videoInfo.cssW
              );
            }
          } catch (_) {}

          // Keynote 不认自带封面、直接拿视频第一帧当封面，
          // 所以把封面画面烧进视频开头 0.2 秒：静态显示播放键/角标，开播即消失
          let mediaPath = videoPath;
          if (cover) {
            try {
              const coverPng = path.join(screenshotsDir, `video-cover-${i}.png`);
              fs.writeFileSync(coverPng, Buffer.from(cover.split(',')[1], 'base64'));
              const bakedMp4 = path.join(screenshotsDir, `video-baked-${i}.mp4`);
              execFileSync('ffmpeg', [
                '-y', '-i', videoPath, '-i', coverPng,
                '-filter_complex',
                "[1:v][0:v]scale2ref[ov][base];[base][ov]overlay=0:0:enable='lte(t,0.2)'",
                '-c:a', 'copy', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
                bakedMp4,
              ], { stdio: 'ignore' });
              mediaPath = bakedMp4;
            } catch (_) {
              // ffmpeg 不可用时退回原视频（仅影响 Keynote 的静态封面样式）
            }
          }

          slide.addMedia({
            type: 'video',
            path: mediaPath,
            cover,
            x: videoInfo.x * 10,
            y: videoInfo.y * 5.625,
            w: videoInfo.w * 10,
            h: videoInfo.h * 5.625,
          });
          videoAdjBySlide[i - startIdx + 1] = videoInfo.adj;

          // 四角贴片：从整页截图上裁下视频四个角、抠掉圆角内区域，
          // 盖在视频上方还原圆角边框，同时不遮挡视频主体的点击
          const patches = await page.evaluate(
            async (dataUrl, info) => {
              const img = new Image();
              await new Promise((res, rej) => {
                img.onload = res;
                img.onerror = rej;
                img.src = dataUrl;
              });
              const scale = (info.w * img.width) / info.cssW; // 截图像素 / CSS 像素
              const sCss = info.radiusPx + 3; // 贴片边长（CSS px），略大于圆角半径
              const s = sCss * scale;
              const vx = info.x * img.width;
              const vy = info.y * img.height;
              const vw = info.w * img.width;
              const vh = info.h * img.height;
              const corners = [
                { px: vx, py: vy },
                { px: vx + vw - s, py: vy },
                { px: vx, py: vy + vh - s },
                { px: vx + vw - s, py: vy + vh - s },
              ];
              return corners.map(({ px, py }) => {
                const c = document.createElement('canvas');
                c.width = Math.round(s);
                c.height = Math.round(s);
                const ctx = c.getContext('2d');
                ctx.drawImage(img, -px, -py);
                ctx.globalCompositeOperation = 'destination-out';
                ctx.beginPath();
                ctx.roundRect(vx - px, vy - py, vw, vh, info.radiusPx * scale);
                ctx.fill();
                return {
                  data: c.toDataURL('image/png'),
                  fx: px / img.width,
                  fy: py / img.height,
                  fw: s / img.width,
                  fh: s / img.height,
                };
              });
            },
            `data:image/png;base64,${fs.readFileSync(imgPath).toString('base64')}`,
            videoInfo
          );
          for (const p of patches) {
            slide.addImage({
              data: p.data.replace('data:', ''),
              x: p.fx * 10,
              y: p.fy * 5.625,
              w: p.fw * 10,
              h: p.fh * 5.625,
            });
          }
        }
      }

      if (i < endIdx) {
        await page.keyboard.press('ArrowRight');
      }
    }

    await pptx.writeFile({ fileName: OUTPUT });
    if (Object.keys(videoAdjBySlide).length > 0) {
      await postProcessVideoSlides(OUTPUT, videoAdjBySlide);
    }
    emit({ type: 'done', output: OUTPUT });

    await browser.close();
  } catch (err) {
    emit({ type: 'error', message: err.message });
    try { await browser.close(); } catch (_) {}
    process.exit(1);
  }
})();
