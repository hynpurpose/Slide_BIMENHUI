/**
 * 第二轮文案脱敏（仅 JSON 数据文件，不碰 JS 标识符）
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const REPLACEMENTS = [
  ['哈曼卡顿', '品牌联名音响'],
  ['哈曼联合定制音响系统', '品牌联名音响系统'],
  ['哈曼 6.2.2 五向发声定位音响', '6.2.2 五向发声定位音响'],
  ['哈曼 6.2.2 音响', '6.2.2 联名音响'],
  ['4000cc 哈曼音腔', '4000cc 大音腔'],
  ['哈曼大音腔', '大音腔音响'],
  ['自带哈曼音响', '自带联名音响'],
  ['哈曼全景声', '全景声'],
  ['哈曼', '品牌联名'],
  ['索尼', '进口品牌C'],
  ['A7D', '经典款'],
  ['A7H 系列', '旗舰款A 系列'],
  ['A7H pro', '旗舰款A'],
  ['Canvas TV 艺术系列', '艺术电视系列'],
  ['Art 7M / A300 系列', 'Art 系列'],
  ['D8S 壁纸系列', 'D 系列壁纸款'],
  ['The Frame 画框系列', '画框系列'],
  ['D8S Pro', 'D 系列 Pro'],
  ['85Art 7M', '85寸 Art 款'],
  ['LS03D', '进口画框款'],
  ['A7Q', '竞品A 旗舰款'],
  ['A95L', '旗舰款X'],
  ['9系', '9 系旗舰'],
  ['S8 芯片', '自研芯片'],
];

const files = [
  'src/data/skyworthKeywords.json',
  'src/data/geoReport.json',
  'src/data/geoOverview.json',
  'src/data/skyworthDecisionAnalysis.json',
  'src/slideEdits.json',
].map((f) => path.join(ROOT, f));

for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  const orig = text;
  for (const [from, to] of REPLACEMENTS) {
    text = text.split(from).join(to);
  }
  if (text !== orig) {
    fs.writeFileSync(file, text, 'utf8');
    console.log('updated:', path.relative(ROOT, file));
  }
}
