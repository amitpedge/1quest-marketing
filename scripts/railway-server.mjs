/**
 * Production static server for Railway.
 * Serves astro build output from dist/ and preserves Cloudflare-style redirects.
 */
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");
const port = Number(process.env.PORT) || 4321;

const app = express();

app.disable("x-powered-by");

app.get("/sitemap.xml", (_req, res) => {
  res.redirect(301, "/sitemap-index.xml");
});

app.use(
  express.static(dist, {
    index: "index.html",
    extensions: ["html"],
    redirect: true,
  })
);

app.listen(port, "0.0.0.0", () => {
  console.log(`1quest-marketing serving ${dist} on port ${port}`);
});
