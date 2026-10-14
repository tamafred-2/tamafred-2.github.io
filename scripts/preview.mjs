import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT ?? 3000);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
};

try {
  await stat(resolve(root, "index.html"));
} catch {
  console.error("Static export missing. Run npm run build first.");
  process.exit(1);
}

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    let file = resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(403).end();
      return;
    }
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith("/")) {
        response
          .writeHead(308, { Location: `${pathname}/${url.search}` })
          .end();
        return;
      }
      file = resolve(file, "index.html");
    }
    const body = await readFile(file);
    response.writeHead(200, {
      "Content-Type": types[extname(file)] ?? "application/octet-stream",
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(await readFile(resolve(root, "404.html")));
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Static portfolio: http://localhost:${port}`),
);
