// Cloudflare Pages: build command `node build-demo.cjs`, output directory `dist`.
// GitHub Pages always serves the normal planner; this output always serves the demo.
const fs = require('node:fs');
const path = require('node:path');
const out = path.join(__dirname, 'dist');
fs.mkdirSync(out, { recursive: true });
for (const file of ['index.html', 'app.js', 'veyramisk.css', 'sw.js', 'favicon.svg', 'logo.svg', 'leaves.svg', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png']) {
  fs.copyFileSync(path.join(__dirname, file), path.join(out, file));
}
const html = fs.readFileSync(path.join(out, 'index.html'), 'utf8')
  .replace('<title>VeyraMisk ADHD Budget Planner</title>', '<title>Free Live Demo | VeyraMisk ADHD Budget Planner</title>')
  .replace('https://1esrakula.github.io/veyramisk-budget-planner/', 'https://veyramisk-budget-planner.pages.dev/');
fs.writeFileSync(path.join(out, 'index.html'), html);
const demoApp = fs.readFileSync(path.join(out, 'app.js'), 'utf8').replace('const VM_DEMO = false;', 'const VM_DEMO = true;');
if (!demoApp.includes('const VM_DEMO = true;')) throw new Error('Demo mode configuration missing');
fs.writeFileSync(path.join(out, 'app.js'), demoApp);
fs.rmSync(path.join(out, 'demo-config.js'), { force: true });
const sw = fs.readFileSync(path.join(out, 'sw.js'), 'utf8')
  .replace(/const CACHE='[^']+'/, "const CACHE='veyramisk-demo-v4'");
fs.writeFileSync(path.join(out, 'sw.js'), sw);
fs.writeFileSync(path.join(out, '_headers'), '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n/sw.js\n  Cache-Control: no-cache\n/index.html\n  Cache-Control: no-cache\n');
console.log('Built VeyraMisk demo in dist/');
