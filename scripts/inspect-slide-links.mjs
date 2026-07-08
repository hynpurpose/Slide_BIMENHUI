import puppeteer from 'puppeteer';
import fs from 'fs';

const order = JSON.parse(fs.readFileSync('src/slideOrder.json', 'utf-8'));
const pageNum = Number(process.argv[2] || 41);
const slideId = order[pageNum - 1];

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 2048, height: 1208, deviceScaleFactor: 1 });
await page.evaluateOnNewDocument((sid) => {
  sessionStorage.setItem('slide-current-id', sid);
}, slideId);
await page.goto(process.argv[3] || 'http://localhost:4466', {
  waitUntil: 'networkidle0',
  timeout: 60000,
});
await new Promise((r) => setTimeout(r, 2000));

const info = await page.evaluate(() => {
  const root = document.querySelector('div[style*="width: 1920px"]');
  const rr = root?.getBoundingClientRect();
  const bodyText = root?.innerText?.slice(0, 200) || '';
  const links = root
    ? [...root.querySelectorAll('a[href]')].map((a) => {
        const r = a.getBoundingClientRect();
        return {
          href: a.href,
          text: a.textContent.trim(),
          x: r.left - (rr?.left || 0),
          y: r.top - (rr?.top || 0),
          w: r.width,
          h: r.height,
        };
      })
    : [];
  return {
    bodyText,
    root: rr ? { w: rr.width, h: rr.height } : null,
    links,
  };
});

console.log(JSON.stringify({ pageNum, slideId, ...info }, null, 2));
await browser.close();
