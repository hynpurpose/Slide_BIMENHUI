import puppeteer from 'puppeteer';
import pptxgen from 'pptxgenjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/* 把指定幻灯片里视频 pic 的矩形几何改成圆角矩形（封面图与播放画面共用同一形状） */
async function roundVideoCorners(pptxPath, adjBySlide) {
    const { default: JSZip } = await import('jszip');
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
            slide.addImage({
                data: `image/png;base64,${screenshotBuffer.toString('base64')}`,
                x: 0,
                y: 0,
                w: 10,
                h: 5.625
            });

            // 页面里若有 <video>，在截图上叠加可播放的视频（位置按元素实际区域换算）
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
                    // roundRect 的 adj：圆角半径占短边的比例 × 100000
                    adj: Math.round((radius / Math.min(rect.width, rect.height)) * 100000),
                };
            });

            if (videoInfo && videoInfo.src.startsWith('/')) {
                const videoPath = path.join(__dirname, 'public', videoInfo.src);
                if (fs.existsSync(videoPath)) {
                    let cover;
                    try {
                        const videoEl = await page.$('video');
                        if (videoEl) {
                            const buf = await videoEl.screenshot({ type: 'png' });
                            cover = `data:image/png;base64,${buf.toString('base64')}`;
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
                    if (videoInfo.adj > 0) videoAdjBySlide[addedSlides] = videoInfo.adj;
                }
            }
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
        await roundVideoCorners(outputName, videoAdjBySlide);
    }
    console.log(`Export complete: ${outputName}`);
    await browser.close();
}

run();
