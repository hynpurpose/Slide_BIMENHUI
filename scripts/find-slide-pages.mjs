import puppeteer from 'puppeteer';
import fs from 'fs';

const order = JSON.parse(fs.readFileSync('src/slideOrder.json', 'utf-8'));
const browser = await puppeteer.launch({
  headless: 'new',
  executablePath:
    process.env.PUPPETEER_EXECUTABLE_PATH ||
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 2048, height: 1208 });
await page.goto(process.argv[2] || 'http://localhost:4466', {
  waitUntil: 'networkidle0',
  timeout: 60000,
});
await page.addStyleTag({
  content: `
    aside, .export-hide { display: none !important; }
    div[style*="1920px"] { zoom: 1 !important; width: 1920px !important; height: 1080px !important; }
  `,
});

const hits = [];
for (let i = 0; i < order.length; i++) {
  await page.evaluate((sid) => {
    sessionStorage.setItem('slide-current-id', sid);
  }, order[i]);
  await page.reload({ waitUntil: 'networkidle0', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 700));
  const text = await page.evaluate(
    () => document.querySelector('div[style*="width: 1920px"]')?.innerText || ''
  );
  if (text.includes('KPI 及验收标准') || text.includes('KPI与交付标准')) {
    hits.push({ page: i + 1, id: order[i], kind: 'kpi' });
  }
  if (text.includes('核心成员') && text.includes('欧阳')) {
    hits.push({ page: i + 1, id: order[i], kind: 'team' });
  }
}

console.log(JSON.stringify(hits, null, 2));
await browser.close();
