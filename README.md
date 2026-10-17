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

Edit `src/site.js` for content, rendering and browser behavior; `src/site.css` for styles; and `src/template.html` for the page shell. Run the build after source changes. The build generates the root page, 32 localized pages, shared CSS/JavaScript, `404.html`, `robots.txt` and `sitemap.xml`. Images, fonts and their license live in `assets/`. The complete publishable website is assembled in `dist/`, which is recreated on each build. Existing generated files in the project root are also updated for compatibility. The local server serves `dist/` so that it previews the deployment output.

Each photograph has one shared file in `assets/`, used by all four languages and all screen sizes. Text alternatives are translated per language. Favicon sizes and the distinct product source documents remain separate assets.

## Hosting and SEO

The default public origin is `https://crossmer.com`. Set `SITE_URL` before building if the deployment uses a different origin. For example in PowerShell:

```powershell
$env:SITE_URL = 'https://www.example.com'
npm run build
```

Upload only the contents of `dist/` to a static host. Configure directory index files and the custom 404 page. Serve unknown paths with HTTP 404; do not rewrite every request to the home page. The build output contains public media, the font license and generated CSS/JavaScript; source directories, tests, Git metadata and dependencies are excluded.

## Cloudflare Workers

`wrangler.jsonc` explicitly sets `assets.directory` to `./dist`, serves directory index pages with trailing slashes and uses the custom 404 page. It avoids Wrangler's automatic setup, which would otherwise suggest publishing the whole repository using `assets.directory: "."`.

In **Settings > Build** for the connected Worker, use:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Root directory | Repository root |

Set `SITE_URL` as a build variable if the production origin differs from `https://crossmer.com`. Workers Builds does not honor custom `build.command` settings in the Wrangler file, so keep the explicit dashboard build command. See [Cloudflare build configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/) and [static site routing](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/).

For a manual deployment from an authenticated local environment, `npm run deploy` builds first and then invokes Wrangler. Wrangler is obtained through `npx`; no dependency installation is needed for normal local development or tests. The Cloudflare Worker name must match `crossmer` or the name in `wrangler.jsonc` must be updated to match the existing Worker.

For Cloudflare Pages instead of Workers, use build command `npm run build` and output directory `dist`.

Each localized URL contains its content and metadata in the initial HTML. Canonical and language alternates omit inquiry query parameters. Internal navigation uses browser history, with back/forward support. Existing links such as `/#/az/about/` are converted to `/az/about/` in the browser. The root serves the English home page with `/en/` as its canonical URL.

## Contact form

The contact form submits JSON directly to Web3Forms at `https://api.web3forms.com/submit`. Its public access key is configured in `inquiryConfig` in `src/site.js`; Web3Forms delivers to the recipient associated with that key. No backend or Cloudflare secret is required for this browser-side form identifier. See the [Web3Forms API reference](https://docs.web3forms.com/getting-started/api-reference).

Submissions include the inquiry fields, reply-to email, language and consent confirmation. Client validation, the hidden spam field, a 20-second request timeout and a pending state prevent common errors and duplicate clicks. Only an HTTP success response with `success: true` clears the form. Failures keep the entries for retry. Status messages and the privacy notice are available in all four languages. Without JavaScript, the contact page offers the company email address instead.

Automated delivery tests mock Web3Forms responses and do not send email. A successful automated test does not verify activation of the access key or receipt in the associated mailbox.
