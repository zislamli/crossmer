const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { once } = require('node:events');
const { buildSite, loadSite, root } = require('../scripts/build');
const { createServer } = require('../scripts/serve');

function browser(initialPath = '/en/') {
  let url = new URL(initialPath, 'https://crossmer.com');
  let mainWrites = 0;
  let headHtml = '';
  const nodes = new Map();
  const listeners = { document: {}, window: {} };
  const stack = [url.href];
  let position = 0;
  const element = id => {
    if (!nodes.has(id)) nodes.set(id, {
      html: '', textContent: '',
      get innerHTML() { return this.html; },
      set innerHTML(value) { this.html = value; if (id === 'main') mainWrites++; },
      focus() {}, scrollIntoView() {}, removeAttribute() {}
    });
    return nodes.get(id);
  };
  const on = target => (name, handler) => {
    (listeners[target][name] ||= []).push(handler);
  };
  const emit = (target, name, event = {}) => Promise.all((listeners[target][name] || []).map(handler => handler(event)));
  const location = Object.fromEntries(['href', 'origin', 'pathname', 'search', 'hash'].map(key => [key, '']));
  for (const key of Object.keys(location)) Object.defineProperty(location, key, { get: () => url[key] });
  const history = {
    pushes: 0, replacements: 0,
    pushState(_state, _title, target) {
      url = new URL(target, url); stack.splice(++position); stack.push(url.href); this.pushes++;
    },
    replaceState(_state, _title, target) {
      url = new URL(target, url); stack[position] = url.href; this.replacements++;
    },
    async back() { if (position > 0) { url = new URL(stack[--position]); await emit('window', 'popstate'); } },
    async forward() { if (position < stack.length - 1) { url = new URL(stack[++position]); await emit('window', 'popstate'); } }
  };
  const document = {
    documentElement: { lang: 'en', dataset: { siteUrl: 'https://crossmer.com' } },
    head: {
      querySelectorAll: () => [{ remove() { headHtml = ''; } }],
      insertAdjacentHTML(_position, html) { headHtml += html; }
    },
    getElementById: element,
    querySelector: selector => selector === '.skip-link' ? element('skip') : null,
    querySelectorAll: () => [],
    addEventListener: on('document')
  };
  const context = vm.createContext({
    URL, URLSearchParams, Intl, fetch, AbortController, setTimeout, clearTimeout,
    location, history, document,
    window: { addEventListener: on('window'), scrollTo() {} }
  });
  vm.runInContext(fs.readFileSync(path.join(root, 'assets/site.js'), 'utf8'), context);
  return {
    get url() { return url; },
    get writes() { return mainWrites; },
    get main() { return element('main').innerHTML; },
    get head() { return headHtml; },
    document, history,
    async click(target, extra = {}) {
      const anchor = { href: new URL(target, url).href, dataset: {}, target: '', hasAttribute: () => false, ...extra };
      const event = { button: 0, defaultPrevented: false, preventDefault() { this.defaultPrevented = true; }, target: { closest: selector => selector === 'a' ? anchor : null } };
      await emit('document', 'click', event);
      return event.defaultPrevented;
    },
    async input(name, value) {
      await emit('document', 'input', { target: { name, value, checked: Boolean(value), closest: () => element('inquiry-form'), removeAttribute() {} } });
    },
    async submit() {
      await emit('document', 'submit', { preventDefault() {}, target: { id: 'inquiry-form' } });
    },
    async hash(hash) {
      url.hash = hash;
      // Browsers can dispatch both events for a fragment history entry.
      await emit('window', 'popstate');
      await emit('window', 'hashchange');
    }
  };
}

test('all 32 URLs serve localized content and complete SEO without JavaScript', async t => {
  const server = createServer().listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise(resolve => { server.close(resolve); server.closeAllConnections(); }));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const { modules } = loadSite();
  const renderer = modules['trade-render'];
  const { languages } = modules['trade-content'];
  const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
  assert.equal((sitemap.match(/<loc>/g) || []).length, 32);
  for (const language of languages) for (const route of renderer.routes) {
    const pathname = renderer.path(language, route);
    const response = await fetch(origin + pathname);
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get('content-type'), /text\/html/);
    const html = await response.text();
    assert.match(html, new RegExp(`<html lang="${language}"`));
    assert.match(html, /<main id="main"[^>]*>[\s\S]*<h1[ >]/);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, pathname);
    assert.ok(html.includes(`<title data-site-seo>${renderer.esc(renderer.metadata(language, route).title)}</title>`));
    assert.ok(html.includes(`rel="canonical" href="https://crossmer.com${pathname}"`));
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
    assert.equal((html.match(/hreflang=/g) || []).length, 9); // 5 head alternates + 4 visible language links.
    for (const alternate of [...languages, 'x-default']) {
      const target = alternate === 'x-default' ? 'en' : alternate;
      assert.ok(html.includes(`hreflang="${alternate}" href="https://crossmer.com${renderer.path(target, route)}"`));
    }
    assert.match(html, /property="og:image" content="https:\/\/crossmer.com\/assets\//);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
    assert.ok(!html.includes('#/'), pathname);
    assert.ok(sitemap.includes(`https://crossmer.com${pathname}`));
    for (const match of html.matchAll(/(?:src|href|srcset)="([^"]*)"/g)) {
      for (const entry of match[1].split(',')) {
        const value = entry.trim().split(/\s+/)[0];
        if (!value.startsWith('/assets/')) continue;
        const asset = new URL(value, origin);
        assert.ok(fs.statSync(path.join(root, asset.pathname)).isFile(), asset.pathname);
      }
    }
  }
  const redirect = await fetch(origin + '/az/about?test=1', { redirect: 'manual' });
  assert.equal(redirect.status, 308);
  assert.equal(redirect.headers.get('location'), '/az/about/?test=1');
  for (const missing of ['/az/missing/', '/src/site.js', '/.git/config']) {
    const response = await fetch(origin + missing);
    assert.equal(response.status, 404);
    const html = await response.text();
    assert.match(html, /name="robots" content="noindex, follow"/);
    assert.ok(!html.includes('rel="canonical"'));
  }
});

test('navigation, same-link clicks and back/forward render exactly once', async () => {
  const page = browser();
  assert.equal(page.writes, 1);
  await page.click('/en/about/');
  assert.equal(page.writes, 2);
  assert.equal(page.url.pathname, '/en/about/');
  await page.click('/en/about/');
  assert.equal(page.writes, 3);
  assert.equal(page.history.pushes, 1);
  await page.history.back();
  assert.equal(page.writes, 4);
  assert.equal(page.url.pathname, '/en/');
  await page.history.forward();
  assert.equal(page.writes, 5);
  assert.equal(page.url.pathname, '/en/about/');
  assert.equal(await page.click('#main'), false);
  assert.equal(await page.click('https://other.example/en/about/'), false);
  assert.equal(page.writes, 5);
});

test('re-entering a product link restores defaults while preserving unrelated entries', async () => {
  const page = browser();
  const productLink = '/az/contact/?type=product&product=silicomanganese';
  await page.click(productLink);
  await page.input('name', 'Test User');
  await page.input('type', 'general');
  await page.input('product', 'Custom material');
  await page.click('/az/about/');
  await page.click(productLink);
  assert.match(page.main, /value="product" selected/);
  assert.match(page.main, /value="Silikomanqan"/);
  assert.match(page.main, /value="Test User"/);
  await page.input('type', 'supplier');
  const writes = page.writes;
  await page.click(productLink);
  assert.equal(page.writes, writes + 1);
  assert.match(page.main, /value="product" selected/);
});

test('validation and language switching preserve user edits and update SEO', async () => {
  const page = browser('/en/contact/?type=product&product=silicomanganese');
  await page.input('type', 'general');
  await page.input('product', 'Custom material');
  await page.submit();
  assert.match(page.main, /value="general" selected/);
  assert.match(page.main, /value="Custom material"/);
  assert.match(page.main, /aria-invalid="true"/);
  await page.click('/az/contact/?type=product&product=silicomanganese');
  assert.match(page.main, /value="general" selected/);
  assert.match(page.main, /value="Custom material"/);
  assert.equal(page.document.documentElement.lang, 'az');
  assert.match(page.head, /rel="canonical" href="https:\/\/crossmer.com\/az\/contact\/"/);
  assert.equal((page.head.match(/rel="canonical"/g) || []).length, 1);
  assert.ok(!page.head.includes('?type='));
  assert.match(page.head, /property="og:locale" content="az_AZ"/);
});

test('legacy links migrate on first load and hash changes with one render', async () => {
  const page = browser('/#/ru/contact/?type=product&product=silicomanganese');
  assert.equal(page.url.pathname, '/ru/contact/');
  assert.equal(page.url.hash, '');
  assert.equal(page.history.replacements, 1);
  assert.equal(page.writes, 1);
  assert.match(page.main, /value="product" selected/);
  await page.hash('#/az/about/');
  assert.equal(page.url.pathname, '/az/about/');
  assert.equal(page.url.hash, '');
  assert.equal(page.writes, 2);
  await page.hash('#main');
  assert.equal(page.writes, 2);
});

test('invalid deployment origins are rejected before writing output', () => {
  assert.throws(() => buildSite({ siteUrl: 'https://crossmer.com/subdirectory/' }), /SITE_URL/);
  assert.throws(() => buildSite({ siteUrl: 'file:///example/' }), /SITE_URL/);
});

test('explicit index.html URLs retain the page and its clean canonical', () => {
  const home = browser('/index.html');
  assert.match(home.main, /Connecting Markets/);
  assert.match(home.head, /rel="canonical" href="https:\/\/crossmer.com\/en\/"/);
  const about = browser('/az/about/index.html');
  assert.match(about.head, /rel="canonical" href="https:\/\/crossmer.com\/az\/about\/"/);
  assert.ok(!about.head.includes('noindex'));
});
