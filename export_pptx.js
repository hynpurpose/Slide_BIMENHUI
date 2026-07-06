import puppeteer from 'puppeteer';
import pptxgen from 'pptxgenjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/* PowerPoint「自动播放」的 timing 节点模板（{SPID} 为视频 pic 的形状 id） */
const AUTOPLAY_TIMING_XML =
    '<p:timing><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst>' +
    '<p:seq concurrent="1" nextAc="seek"><p:cTn id="2" dur="indefinite" nodeType="mainSeq"><p:childTnLst>' +
    '<p:par><p:cTn id="3" fill="hold"><p:stCondLst><p:cond delay="indefinite"/><p:cond evt="onBegin" delay="0"><p:tn val="2"/></p:cond></p:stCondLst><p:childTnLst>' +
    '<p:par><p:cTn id="4" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>' +
    '<p:par><p:cTn id="5" presetID="1" presetClass="mediacall" presetSubtype="0" fill="hold" nodeType="afterEffect"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>' +
    '<p:cmd type="call" cmd="playFrom(0.0)"><p:cBhvr><p:cTn id="6" dur="1" fill="hold"/><p:tgtEl><p:spTgt spid="{SPID}"/></p:tgtEl></p:cBhvr></p:cmd>' +
    '</p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par>' +
    '</p:childTnLst></p:cTn>' +
    '<p:prevCondLst><p:cond evt="onPrev" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:prevCondLst>' +
    '<p:nextCondLst><p:cond evt="onNext" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:nextCondLst></p:seq>' +
    '<p:video><p:cMediaNode vol="80000"><p:cTn id="7" fill="hold" display="0" masterRel="sameClick">' +
    '<p:stCondLst><p:cond evt="onBegin" delay="0"><p:tn val="5"/></p:cond></p:stCondLst>' +
    '<p:endCondLst><p:cond evt="onStopAudio" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:endCondLst>' +
    '</p:cTn><p:tgtEl><p:spTgt spid="{SPID}"/></p:tgtEl></p:cMediaNode></p:video>' +
    '</p:childTnLst></p:cTn></p:par></p:tnLst></p:timing>';

/* 后处理含视频的幻灯片：
 * 1. 视频 pic 的矩形几何改成圆角矩形（封面图与播放画面共用同一形状）
 * 2. 注入 timing 节点，放映到该页时视频自动播放 */
async function postProcessVideoSlides(pptxPath, adjBySlide) {
    const { default: JSZip } = await import('jszip');
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
                AUTOPLAY_TIMING_XML.replace(/\{SPID\}/g, spid) + '</p:sld>'
            );
        }
        zip.file(name, xml);
    }
    fs.writeFileSync(
        pptxPath,
        await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' })
    );
}

// dynamically fetch totalSlides later

async function run() {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
        headless: "new",
        defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 2 },
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();

    console.log('Navigating to http://localhost:5176...');
    try {
        await page.goto('http://localhost:5176', { waitUntil: 'networkidle0', timeout: 60000 });
    } catch (e) {
        console.error('Failed to load page. Make sure Vite server is running on port 5176.', e);
        await browser.close();
        return;
    }

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

    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';

    const videoAdjBySlide = {};
    let addedSlides = 0;

    const totalSlides = 108;

    console.log(`Found ${totalSlides} slides. Starting capture...`);

    const args = process.argv.slice(2);
    let startPage = 1;
    let endPage = totalSlides;
    let hasPageFilter = false;
    const pageIndex = args.indexOf('--pages');
    if (pageIndex !== -1 && args[pageIndex + 1]) {
        const pageArg = args[pageIndex + 1];
        if (pageArg.includes('-')) {
            const [s, e] = pageArg.split('-').map(Number);
            startPage = s;
            endPage = e;
        } else {
            startPage = parseInt(pageArg, 10);
            endPage = startPage;
        }
        hasPageFilter = true;
        console.log(`Targeting pages ${startPage} to ${endPage}`);
    }

    for (let i = 0; i < totalSlides; i++) {
        const pageNum = i + 1;
        const isTargetPage = pageNum >= startPage && pageNum <= endPage;

        if (isTargetPage) {
            console.log(`Processing slide ${i + 1}/${totalSlides}...`);

            await new Promise(r => setTimeout(r, 1500));

            const screenshotBuffer = await page.evaluateHandle(() => {
                const wrapper = document.querySelector('.origin-center');
                if (wrapper) {
                    wrapper.style.transform = 'none';
                    wrapper.style.zoom = '1';
                    return wrapper;
                }
                return document.body;
            }).then(handle => handle.screenshot({ type: 'png' }));

            const slide = pptx.addSlide();
            addedSlides += 1;
            slide.background = { fill: '000000' };

            // 页面里若有 <video>，采用「视频在底层 + 挖圆角洞的整页截图在顶层」的叠层结构：
            // 圆角由顶层截图的透明像素决定，不依赖播放器对形状几何的支持（Keynote 兼容）
            const videoInfo = await page.evaluate(() => {
                const root = document.querySelector('.origin-center') || document.body;
                const video = root.querySelector('video');
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
            let slideImgData = `image/png;base64,${screenshotBuffer.toString('base64')}`;

            if (videoPath && fs.existsSync(videoPath)) {
                // 1. 底层：视频（封面用视频元素截图，含播放键/角标，烘焙圆角透明度）
                let cover;
                try {
                    const videoEl = await page.$('video');
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
                } catch (_) { /* 封面截图失败时用默认播放键封面 */ }

                slide.addMedia({
                    type: 'video',
                    path: videoPath,
                    cover,
                    x: videoInfo.x * 10,
                    y: videoInfo.y * 5.625,
                    w: videoInfo.w * 10,
                    h: videoInfo.h * 5.625,
                });
                videoAdjBySlide[addedSlides] = videoInfo.adj;

                // 2. 顶层：整页截图，在视频位置挖一个圆角透明窗口
                //    （窗口向内收缩 1px，保证截图里的圆角边框像素保留在顶层）
                const holedDataUrl = await page.evaluate(
                    async (dataUrl, info) => {
                        const img = new Image();
                        await new Promise((res, rej) => {
                            img.onload = res;
                            img.onerror = rej;
                            img.src = dataUrl;
                        });
                        const c = document.createElement('canvas');
                        c.width = img.width;
                        c.height = img.height;
                        const ctx = c.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        const holeW = info.w * img.width;
                        const scale = holeW / info.cssW;
                        const inset = 1 * scale;
                        ctx.globalCompositeOperation = 'destination-out';
                        ctx.beginPath();
                        ctx.roundRect(
                            info.x * img.width + inset,
                            info.y * img.height + inset,
                            holeW - inset * 2,
                            info.h * img.height - inset * 2,
                            Math.max(0, info.radiusPx * scale - inset)
                        );
                        ctx.fill();
                        return c.toDataURL('image/png');
                    },
                    `data:${slideImgData}`,
                    videoInfo
                );
                slideImgData = holedDataUrl.replace('data:', '');
            }

            slide.addImage({
                data: slideImgData,
                x: 0,
                y: 0,
                w: 10,
                h: 5.625
            });
        }

        if (i < totalSlides - 1) {
            await page.keyboard.press('ArrowRight');
            if (!isTargetPage) {
                await new Promise(r => setTimeout(r, 100));
            }
        }
    }

    const outputName = hasPageFilter
        ? `Presentation_P${startPage}-${endPage}.pptx`
        : `Presentation.pptx`;
    console.log('Generating PPTX file...');
    await pptx.writeFile({ fileName: outputName });
    if (Object.keys(videoAdjBySlide).length > 0) {
        await postProcessVideoSlides(outputName, videoAdjBySlide);
    }
    console.log(`Export complete: ${outputName}`);
    await browser.close();
}

run();
