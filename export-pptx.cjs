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

// --pages=8 或 --pages=8-10 或 --pages=41,44-50,127：只导出指定页码（1 起始）
const PAGES = getArg('pages');
let pageIndices = null;
let startIdx = 0;
let endIdx = slideOrder.length - 1;

function parsePageSpec(spec) {
  const indices = [];
  for (const part of spec.split(',')) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    if (trimmed.includes('-')) {
      const [s, e] = trimmed.split('-').map(Number);
      const from = s || 1;
      const to = e || from;
      for (let p = from; p <= to; p++) indices.push(p - 1);
    } else {
      indices.push(Number(trimmed) - 1);
    }
  }
  return [...new Set(indices)].filter((i) => i >= 0 && i < slideOrder.length);
}

if (PAGES) {
  if (PAGES.includes(',')) {
    pageIndices = parsePageSpec(PAGES);
    startIdx = pageIndices[0];
    endIdx = pageIndices[pageIndices.length - 1];
  } else {
    const [s, e] = PAGES.split('-').map(Number);
    startIdx = Math.max(0, (s || 1) - 1);
    endIdx = Math.min(slideOrder.length - 1, (e || s || slideOrder.length) - 1);
  }
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
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    path.join(process.env.LOCALAPPDATA || '', 'Google', 'Chrome', 'Application', 'chrome.exe'),
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
  const totalSlides = pageIndices ? pageIndices.length : endIdx - startIdx + 1;
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

    const exportIndices = pageIndices || Array.from({ length: endIdx - startIdx + 1 }, (_, k) => startIdx + k);

    for (let seq = 0; seq < exportIndices.length; seq++) {
      const i = exportIndices[seq];
      const label = slideOrder[i];
      emit({ type: 'progress', current: seq + 1, total: totalSlides, slide: label });

      if (seq > 0) {
        const steps = exportIndices[seq] - exportIndices[seq - 1];
        for (let step = 0; step < steps; step++) {
          await page.keyboard.press('ArrowRight');
          await new Promise((r) => setTimeout(r, 600));
        }
      } else {
        await new Promise((r) => setTimeout(r, 1000));
      }

      const slideEl = await page.$('div[style*="width: 1920px"]');

      if (slideEl) {
        const imgPath = path.join(
          screenshotsDir,
          `slide-${String(i).padStart(3, '0')}.png`
        );
        await slideEl.screenshot({ path: imgPath, type: 'png' });

        const slide = pptx.addSlide();
        slide.addImage({ path: imgPath, x: 0, y: 0, w: '100%', h: '100%' });

        // 保留页面内 <a href> 超链接：在截图上方叠加透明可点击区域
        const linkAreas = await page.evaluate(() => {
          const root = document.querySelector('div[style*="width: 1920px"]');
          if (!root) return [];
          const rootRect = root.getBoundingClientRect();
          if (!rootRect.width || !rootRect.height) return [];
          return [...root.querySelectorAll('a[href]')]
            .map((a) => {
              const r = a.getBoundingClientRect();
              return {
                href: a.href,
                text: (a.textContent || '').trim(),
                x: (r.left - rootRect.left) / rootRect.width,
                y: (r.top - rootRect.top) / rootRect.height,
                w: r.width / rootRect.width,
                h: r.height / rootRect.height,
              };
            })
            .filter((l) => l.href && l.w > 0 && l.h > 0);
        });

        for (const link of linkAreas) {
          const padX = 4 / SLIDE_W;
          const padY = 4 / SLIDE_H;
          slide.addShape(pptx.ShapeType.rect, {
            x: Math.max(0, (link.x - padX) * 10),
            y: Math.max(0, (link.y - padY) * 5.625),
            w: Math.min(10, (link.w + padX * 2) * 10),
            h: Math.min(5.625, (link.h + padY * 2) * 5.625),
            fill: { color: 'FFFFFF', transparency: 100 },
            line: { width: 0, transparency: 100 },
            hyperlink: { url: link.href, tooltip: link.text || link.href },
          });
        }

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
            cssH: rect.height,
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

          // 网页里视频是 object-fit: cover（按框裁剪），PPT 里却是拉伸填满形状框，
          // 宽高比不一致就会压扁/拉长。这里用 ffmpeg 按显示框比例居中裁剪，
          // 并统一转码成 ≤1080p 的标准 H.264（4K/高帧率视频在 Keynote 下行为不稳定）。
          // 同时把封面画面烧进视频开头 0.2 秒：Keynote 不认自带封面、
          // 直接拿视频第一帧当封面，静态显示播放键/角标，开播即消失
          let mediaPath = videoPath;
          try {
            // 目标像素尺寸：显示框比例，宽度不超过 1920，取偶数
            const boxAR = videoInfo.cssW / videoInfo.cssH;
            const outW = 2 * Math.round(Math.min(1920, videoInfo.cssW * 2) / 2);
            const outH = 2 * Math.round(outW / boxAR / 2);
            const filters = [
              // 居中裁剪到框比例（等效 object-fit: cover），再缩放到目标尺寸
              `[0:v]crop='min(iw,ih*${boxAR})':'min(ih,iw/${boxAR})',scale=${outW}:${outH},fps=30[v]`,
            ];
            const inputs = ['-i', videoPath];
            let lastLabel = '[v]';
            const coverPng = path.join(screenshotsDir, `video-cover-${i}.png`);
            if (cover) {
              fs.writeFileSync(coverPng, Buffer.from(cover.split(',')[1], 'base64'));
              inputs.push('-i', coverPng);
              filters.push(
                `[1:v]scale=${outW}:${outH}[ov]`,
                `[v][ov]overlay=0:0:enable='lte(t,0.2)'[vout]`
              );
              lastLabel = '[vout]';
            }
            const bakedMp4 = path.join(screenshotsDir, `video-baked-${i}.mp4`);
            execFileSync('ffmpeg', [
              '-y', ...inputs,
              '-filter_complex', filters.join(';'),
              '-map', lastLabel, '-map', '0:a?',
              '-c:v', 'libx264', '-profile:v', 'high', '-level', '4.0',
              '-crf', '20', '-c:a', 'aac',
              '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
              bakedMp4,
            ], { stdio: 'ignore' });
            mediaPath = bakedMp4;
          } catch (_) {
            // ffmpeg 不可用时退回原视频（画面比例和 Keynote 兼容性会受影响）
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
          videoAdjBySlide[seq + 1] = videoInfo.adj;

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
