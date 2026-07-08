import fs from 'fs';
import JSZip from 'jszip';

const file = process.argv[2] || 'Presentation_P41.pptx';
const zip = await JSZip.loadAsync(fs.readFileSync(file));
const slideXml = await zip.file('ppt/slides/slide1.xml').async('string');
const relsXml = await zip.file('ppt/slides/_rels/slide1.xml.rels').async('string');
const hlinkCount = (slideXml.match(/hlinkClick/g) || []).length;
const urls = [...relsXml.matchAll(/Target="([^"]+)"/g)].map((m) => m[1]);
console.log(JSON.stringify({ file, hlinkCount, urls }, null, 2));
