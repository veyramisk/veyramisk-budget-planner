// Cloudflare Pages: build command `node build-demo.cjs`, output directory `dist`.
// The regular GitHub Pages planner stays unchanged; only this output forces demo mode.
const fs = require('node:fs');
const path = require('node:path');
const out = path.join(__dirname, 'dist');
fs.mkdirSync(out, { recursive: true });
for (const file of ['index.html', 'app.js', 'veyramisk.css', 'sw.js', 'favicon.svg', 'logo.svg', 'leaves.svg', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png']) {
  fs.copyFileSync(path.join(__dirname, file), path.join(out, file));
}
const html = fs.readFileSync(path.join(out, 'index.html'), 'utf8')
  .replace('<script type="module" src="./app.js"></script>', '<script src="./demo-config.js"></script>\n    <script type="module" src="./app.js"></script>')
  .replace('<title>VeyraMisk ADHD Budget Planner</title>', '<title>Free Live Demo | VeyraMisk ADHD Budget Planner</title>');
fs.writeFileSync(path.join(out, 'index.html'), html);
fs.writeFileSync(path.join(out, 'demo-config.js'), `// Keep public example data separate from the regular planner.\nconst demoURL=new URL(location.href);\nif(!demoURL.searchParams.has('demo')){demoURL.searchParams.set('demo','');history.replaceState(null,'',demoURL);}\n`);
const sw = fs.readFileSync(path.join(out, 'sw.js'), 'utf8')
  .replace('veyramisk-v2-analysis', 'veyramisk-demo-v3')
  .replace("['./','./app.js'", "['./','./demo-config.js','./app.js'");
fs.writeFileSync(path.join(out, 'sw.js'), sw);
fs.writeFileSync(path.join(out, '_headers'), '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n/sw.js\n  Cache-Control: no-cache\n/index.html\n  Cache-Control: no-cache\n');
console.log('Built VeyraMisk demo in dist/');
