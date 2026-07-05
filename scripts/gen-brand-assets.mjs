// Generates raster brand assets from the vector logo:
//   public/logo-512.png  — 512×512 transparent PNG (schema publisher logo)
//   public/og-image.png  — 1200×630 paper-background social/search card
// Run: node scripts/gen-brand-assets.mjs
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");
const logoSvg = readFileSync(join(pub, "1quest-logo.svg"));

const PAPER = { r: 243, g: 239, b: 229, alpha: 1 }; // --paper #f3efe5
const INK = "#16150f";

// 1) Square transparent logo (512×512), logo padded and centred.
const logo440 = await sharp(logoSvg).resize({ width: 440 }).png().toBuffer();
await sharp({
  create: { width: 512, height: 512, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([{ input: logo440, gravity: "center" }])
  .png()
  .toFile(join(pub, "logo-512.png"));

// 2) OG card (1200×630) on paper, logo centred with a tagline.
const logoW = 660;
const logo660 = await sharp(logoSvg).resize({ width: logoW }).png().toBuffer();
const logoMeta = await sharp(logo660).metadata();
const logoTop = 130;
const logoLeft = Math.round((1200 - logoW) / 2);
const tagline = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <text x="600" y="${logoTop + (logoMeta.height ?? 380) + 62}" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-size="36" fill="${INK}">
    AI study agents for school &amp; UPSC
  </text>
</svg>`;

await sharp({
  create: { width: 1200, height: 630, channels: 4, background: PAPER },
})
  .composite([
    { input: logo660, top: logoTop, left: logoLeft },
    { input: Buffer.from(tagline), top: 0, left: 0 },
  ])
  .png()
  .toFile(join(pub, "og-image.png"));

console.log("Generated public/logo-512.png and public/og-image.png");
