/**
 * 批量脱敏：品牌定制方案 → 通用对外方案
 * 用法: node scripts/anonymize-brand.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EXT = new Set(['.js', '.jsx', '.json', '.cjs', '.mjs', '.md', '.mdc']);

/** 按长度降序，避免短词先替换导致长词匹配失败 */
const REPLACEMENTS = [
  // 竞品产品型号（先于品牌名）
  ['进口品牌A画壁系列', '进口品牌A画壁系列'],
  ['进口品牌A画境电视', '进口品牌A画境电视'],
  ['进口品牌A The Frame', '进口品牌A The Frame'],
  ['进口品牌A画壁电视', '进口品牌A画壁电视'],
  ['进口品牌A', '进口品牌A'],
  ['进口品牌B OLED G5', '进口品牌B OLED G5'],
  ['进口品牌B', '进口品牌B'],
  ['竞品A-R8', '竞品A-R8'],
  ['竞品F-D8S Pro', '竞品F-D8S Pro'],
  ['竞品F-Q50S', '竞品F-Q50S'],
  ['竞品B Art 7M', '竞品B Art 7M'],

  // 产品型号（先于品牌名）
  ['旗舰款A', '旗舰款A'],
  ['旗舰款A', '旗舰款A'],
  ['旗舰款A', '旗舰款A'],
  ['旗舰款C', '旗舰款C'],
  ['旗舰款B', '旗舰款B'],
  ['高端款B', '高端款B'],
  ['高端款A', '高端款A'],
  ['经典款A', '经典款A'],

  // 品牌组合（先于单独品牌）
  ['某家电品牌壁纸电视', '某家电品牌壁纸电视'],
  ['某家电品牌电视', '某家电品牌电视'],
  ['某家电品牌', '某家电品牌'],
  ['某家电品牌AI', '某家电品牌AI'],
  ['品牌定制', '品牌定制'],
  ['品牌的内容', '品牌的内容'],
  ['品牌词条', '品牌词条'],
  ['某家电品牌', '某家电品牌'],
  ['BRAND KEYWORDS', 'BRAND KEYWORDS'],
  ['BRAND', 'BRAND'],
  ['Brand', 'Brand'],
  ['brand', 'brand'],

  // 竞品品牌
  ['竞品A', '竞品A'],
  ['竞品B', '竞品B'],
  ['竞品C', '竞品C'],
  ['竞品D', '竞品D'],
  ['竞品E', '竞品E'],
  ['竞品F', '竞品F'],
  ['竞品G', '竞品G'],
  ['竞品H', '竞品H'],
  ['竞品I', '竞品I'],
  ['竞品I', '竞品I'],

  // 监测账号
  ['demo_brand_01', 'demo_brand_01'],

  // 数据源文件名描述
  ['品牌词条分类.xlsx', '品牌词条分类.xlsx'],
  ['某家电品牌真评数据.xlsx', '品牌真评数据.xlsx'],
];

const TARGET_DIRS = [
  path.join(ROOT, 'src'),
  path.join(ROOT, 'scripts'),
  path.join(ROOT, 'export-pptx.cjs'),
].flatMap((p) => {
  if (fs.existsSync(p) && fs.statSync(p).isFile()) return [p];
  if (!fs.existsSync(p)) return [];
  return walkDir(p);
});

function walkDir(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (name === 'node_modules' || name === '.git') continue;
    const st = fs.statSync(full);
    if (st.isDirectory()) out.push(...walkDir(full));
    else if (EXT.has(path.extname(name))) out.push(full);
  }
  return out;
}

function applyReplacements(text) {
  let result = text;
  for (const [from, to] of REPLACEMENTS) {
    result = result.split(from).join(to);
  }
  return result;
}

let changed = 0;
for (const file of TARGET_DIRS) {
  const raw = fs.readFileSync(file, 'utf8');
  const next = applyReplacements(raw);
  if (next !== raw) {
    fs.writeFileSync(file, next, 'utf8');
    changed++;
    console.log('updated:', path.relative(ROOT, file));
  }
}
console.log(`\nDone. ${changed} file(s) updated.`);
