# CROSSMER

A dependency-free static website in English, Azerbaijani, Turkish and Russian.

## Local use

Use Node.js 20 or newer. No package installation is required.

```sh
npm run dev
```

Open http://127.0.0.1:4173. Clean routes require an HTTP server; opening HTML files directly through `file://` is not supported.

```sh
npm run build
npm test
```

Edit `src/site.js` for content, rendering and browser behavior; `src/site.css` for styles; and `src/template.html` for the page shell. Run the build after source changes. The build generates the root page, 32 localized pages, shared CSS/JavaScript, `404.html`, `robots.txt` and `sitemap.xml`. Images, fonts and their license live in `assets/`.

## Hosting and SEO

The default public origin is `https://crossmer.com`. Set `SITE_URL` before building if the deployment uses a different origin. For example in PowerShell:

```powershell
$env:SITE_URL = 'https://www.example.com'
npm run build
```

Upload `index.html`, `404.html`, `favicon.ico`, `robots.txt`, `sitemap.xml`, `assets/`, and the `en/`, `az/`, `tr/`, `ru/` directories to a static host. Configure directory index files and the custom 404 page. Serve unknown paths with HTTP 404; do not rewrite every request to the home page. Source, scripts and tests need not be published.

Each localized URL contains its content and metadata in the initial HTML. Canonical and language alternates omit inquiry query parameters. Internal navigation uses browser history, with back/forward support. Existing links such as `/#/az/about/` are converted to `/az/about/` in the browser. The root serves the English home page with `/en/` as its canonical URL.

The inquiry form still downloads a text file; online delivery is not configured. Without JavaScript, the contact page offers the company email address instead.
