const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { outputRoot: root } = require('./build');

const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.ico': 'image/x-icon', '.woff': 'font/woff' };

function createServer() {
  return http.createServer((request, response) => {
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405, { Allow: 'GET, HEAD' });
      response.end();
      return;
    }
    let url, pathname;
    try {
      url = new URL(request.url, 'http://localhost');
      pathname = decodeURIComponent(url.pathname);
    } catch {
      response.writeHead(400);
      response.end();
      return;
    }
    const publicPath = pathname === '/' || /^\/(en|az|tr|ru)(\/|$)/.test(pathname) || pathname.startsWith('/assets/') || ['/robots.txt', '/sitemap.xml', '/404.html', '/index.html', '/favicon.ico'].includes(pathname);
    let filename = path.resolve(root, '.' + pathname);
    let status = 200;
    if (!publicPath || (!filename.startsWith(root + path.sep) && filename !== root) || pathname.includes('\\') || pathname.includes('\0')) {
      status = 404;
    } else {
      try {
        if (fs.statSync(filename).isDirectory()) {
          if (!pathname.endsWith('/')) {
            response.writeHead(308, { Location: url.pathname + '/' + url.search });
            response.end();
            return;
          }
          filename = path.join(filename, 'index.html');
        }
        if (!fs.statSync(filename).isFile()) status = 404;
      } catch {
        status = 404;
      }
    }
    if (status === 404) filename = path.join(root, '404.html');
    const content = fs.readFileSync(filename);
    response.writeHead(status, { 'Content-Type': types[path.extname(filename)] || 'application/octet-stream', 'Content-Length': content.length, 'X-Content-Type-Options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : content);
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT || 4173);
  createServer().listen(port, '127.0.0.1', () => console.log(`CROSSMER: http://127.0.0.1:${port}`));
}

module.exports = { createServer };
