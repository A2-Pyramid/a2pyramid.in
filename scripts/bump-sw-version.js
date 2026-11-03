import { readFileSync, writeFileSync } from 'fs';

const path = './public/sw.js';
const content = readFileSync(path, 'utf8');
const updated = content.replace(
  /const CACHE_NAME = 'a2pyramid-v(\d+)';/,
  (_, n) => `const CACHE_NAME = 'a2pyramid-v${parseInt(n) + 1}';`
);
writeFileSync(path, updated);
console.log('✅ Service worker cache version bumped');
