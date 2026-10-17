const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');

const root = path.resolve(__dirname, '..');

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
  const write = (filename, value) => {
    const output = path.join(root, filename);
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, value);
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
  return { pages: urls.length, siteUrl };
}

if (require.main === module) {
  const result = buildSite();
  console.log(`Built ${result.pages} localized pages for ${result.siteUrl}, plus the root and 404 pages.`);
}

module.exports = { buildSite, loadSite, root };
