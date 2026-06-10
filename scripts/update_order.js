import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { flatSlides } from '../src/config/parseConfig.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, '../src/slideOrder.json');

const order = flatSlides.map(s => s.id);
fs.writeFileSync(filePath, JSON.stringify(order, null, 2), 'utf-8');
console.log(`Successfully updated slideOrder.json with ${order.length} slides.`);
