// Prerender the SSR worker to a static index.html for GitHub Pages.
// TanStack Start (Cloudflare adapter) emits a Worker fetch handler at
// dist/server/index.js. We invoke it once for "/" and write the resulting
// HTML to dist/client/index.html so GitHub Pages can serve a real static SPA.
import { writeFileSync, copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const workerPath = resolve("dist/server/index.js");
if (!existsSync(workerPath)) {
  console.error("dist/server/index.js missing — did `vite build` run?");
  process.exit(1);
}

const { default: worker } = await import(workerPath);
const distClient = resolve("dist/client");
const url = process.env.SITE_URL || "https://scooby.boo/";

const res = await worker.fetch(
  new Request(url),
  {},
  { waitUntil() {}, passThroughOnException() {} },
);
let html = await res.text();

// Make any absolute asset URLs root-relative for GitHub Pages.
html = html.replace(/https?:\/\/[^"']*\/assets\//g, "/assets/");

writeFileSync(resolve(distClient, "index.html"), html);
copyFileSync(
  resolve(distClient, "index.html"),
  resolve(distClient, "404.html"),
);
writeFileSync(resolve(distClient, ".nojekyll"), "");
console.log(
  `Prerendered ${html.length} bytes -> dist/client/index.html (+ 404.html)`,
);
