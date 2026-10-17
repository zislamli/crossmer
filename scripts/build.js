const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');

const root = path.resolve(__dirname, '..');
const outputRoot = path.join(root, 'dist');

function resetOutput() {
  if (fs.existsSync(outputRoot)) {
    const entry = fs.lstatSync(outputRoot);
    const expected = path.join(fs.realpathSync(root), 'dist');
    if (!entry.isDirectory() || entry.isSymbolicLink() || fs.realpathSync(outputRoot) !== expected) {
      throw new Error('Refusing to clean an output path outside the project dist directory.');
    }
    fs.rmSync(outputRoot, { recursive: true });
  }
  fs.mkdirSync(outputRoot);
}

function copyPublicAssets(directory = path.join(root, 'assets')) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const source = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error('Public assets must not contain symbolic links: ' + source);
    if (entry.isDirectory()) {
      copyPublicAssets(source);
    } else if (entry.isFile()) {
      const relative = path.relative(root, source);
      const isMedia = /\.(webp|jpe?g|png|svg|woff2?|ico)$/i.test(entry.name);
      const isLicense = relative === path.join('assets', 'fonts', 'Inter-OFL.txt');
      if ((!isMedia && !isLicense) || entry.name === 'favicon-preview.png') continue;
      const output = path.join(outputRoot, relative);
      fs.mkdirSync(path.dirname(output), { recursive: true });
      fs.copyFileSync(source, output);
    }
  }
}

function loadSite() {
  const source = fs.readFileSync(path.join(root, 'src/site.js'), 'utf8');
  const appStart = source.indexOf('modules["trade-app"]');
  if (appStart < 0) throw new Error('Browser application boundary is missing.');
  new vm.Script(source, { filename: 'src/site.js' });
  const context = vm.createContext({ URL, URLSearchParams, Intl, fetch, AbortController, setTimeout, clearTimeout });
  vm.runInContext(source.slice(0, appStart) + ';globalThis.siteModules = modules;', context);
  return { source, modules: context.siteModules };
}

function buildSite({ siteUrl = process.env.SITE_URL || 'https://crossmer.com' } = {}) {
  const parsed = new URL(siteUrl);
  if (!['https:', 'http:'].includes(parsed.protocol) || parsed.pathname !== '/' || parsed.search || parsed.hash || parsed.username || parsed.password) {
    throw new Error('SITE_URL must be an HTTP(S) origin, for example https://crossmer.com.');
  }
  siteUrl = parsed.origin;
  const { source, modules } = loadSite();
  const { languages, copy } = modules['trade-content'];
  const renderer = modules['trade-render'];
  const template = fs.readFileSync(path.join(root, 'src/template.html'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'src/site.css'), 'utf8');
  const revision = crypto.createHash('sha256').update(source).update(css).digest('hex').slice(0, 12);
  resetOutput();
  const write = (filename, value) => {
    // Keep the existing generated files available, and publish only the dist copy.
    for (const base of [root, outputRoot]) {
      const output = path.join(base, filename);
      fs.mkdirSync(path.dirname(output), { recursive: true });
      fs.writeFileSync(output, value);
    }
  };

  function page(language, route) {
    const values = {
      language,
      siteUrl: renderer.esc(siteUrl),
      seo: renderer.seoTags(language, route, siteUrl),
      skip: renderer.esc(copy[language].skip),
      header: renderer.header(language, route),
      main: renderer.renderPage(language, route),
      footer: renderer.footer(language, route),
      noScriptContact: route === 'contact'
        ? `<noscript><p class="container delivery-notice">${renderer.esc(copy[language].contact)}: <a href="mailto:info@crossmer.com">info@crossmer.com</a></p></noscript>`
        : ''
    };
    return template.replace(/\{\{(\w+)\}\}/g, (_, name) => {
      if (!(name in values)) throw new Error('Unknown template field: ' + name);
      return values[name];
    }).replace(/\/assets\/site\.(css|js)/g, `/assets/site.$1?v=${revision}`);
  }

  const urls = [];
  for (const language of languages) {
    for (const route of renderer.routes) {
      const pathname = renderer.path(language, route);
      write(pathname.slice(1) + 'index.html', page(language, route));
      urls.push(new URL(pathname, siteUrl).href);
    }
  }
  // The root keeps a complete English home page and canonicalizes to /en/.
  write('index.html', page('en', ''));
  write('404.html', page('en', 'not-found'));
  write('assets/site.js', source);
  write('assets/site.css', css);
  write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
  write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${renderer.esc(url)}</loc></url>`).join('\n')}\n</urlset>\n`);
  copyPublicAssets();
  fs.copyFileSync(path.join(root, 'favicon.ico'), path.join(outputRoot, 'favicon.ico'));
  const files = fs.readdirSync(outputRoot, { recursive: true, withFileTypes: true }).filter(entry => entry.isFile()).length;
  return { pages: urls.length, siteUrl, outputRoot, files };
}

if (require.main === module) {
  const result = buildSite();
  console.log(`Built ${result.pages} localized pages for ${result.siteUrl}. Ready to publish: dist/ (${result.files} files).`);
}

module.exports = { buildSite, loadSite, root, outputRoot };
