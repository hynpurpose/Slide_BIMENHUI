/**
 * 修复 anonymize 脚本误改的 JS 标识符（import/export/函数名），保留文案脱敏结果
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');

const IDENT_FIXES = [
  ['Page_BrandBrand', 'Page_SkyworthBrand'],
  ['Page_BrandReport_Product旗舰款B', 'Page_SkyworthReport_ProductA8H'],
  ['Page_BrandReport_Product旗舰款C', 'Page_SkyworthReport_ProductA10H'],
  ['Page_BrandReport_Product高端款A', 'Page_SkyworthReport_ProductQ7H'],
  ['Page_BrandReport_Product高端款B', 'Page_SkyworthReport_ProductQ8H'],
  ['Page_BrandReport_ProductA7HPro', 'Page_SkyworthReport_ProductA7HPro'],
  ['Page_BrandReport_', 'Page_SkyworthReport_'],
  ['Page_Brand', 'Page_Skyworth'],
  ["from '../pages/Page_Brand", "from '../pages/Page_Skyworth"],
  ['BrandReport_', 'SkyworthReport_'],
];

function walk(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (name === 'node_modules') continue;
    const st = fs.statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (/\.(js|jsx|json|cjs|mjs)$/.test(name)) out.push(full);
  }
  return out;
}

let n = 0;
for (const file of walk(SRC)) {
  let text = fs.readFileSync(file, 'utf8');
  const orig = text;
  for (const [from, to] of IDENT_FIXES) {
    text = text.split(from).join(to);
  }
  if (text !== orig) {
    fs.writeFileSync(file, text, 'utf8');
    n++;
    console.log('fixed:', path.relative(ROOT, file));
  }
}
console.log(`\nFixed ${n} file(s).`);
