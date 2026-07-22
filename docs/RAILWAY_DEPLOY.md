# Deploy 1quest-marketing on Railway

Static Astro site: **build** → `dist/`, **start** → Express serves `dist/` on `$PORT`.

## New Railway service

1. [Railway dashboard](https://railway.app/) → **New Project** → **Deploy from GitHub repo**
2. Select **`amitpedge/1quest-marketing`**
3. Railway reads `railway.toml` (build + start + health check on `/`)
4. **Settings → Networking → Generate domain** (or add custom domain `1quest.app`)

## Build / start (automatic)

| Step | Command |
|------|---------|
| Build | `npm run build` |
| Start | `npm start` → `node scripts/railway-server.mjs` |

Node **≥ 22.12.0** (see `package.json` `engines`).

## Environment variables

None required for the marketing site. Optional:

| Variable | Purpose |
|----------|---------|
| `PORT` | Set by Railway automatically |

## Custom domain cutover (from Cloudflare Pages)

1. Deploy on Railway and confirm `*.up.railway.app` serves the site
2. In Railway: **Settings → Networking → Custom Domain** → add `1quest.app` (and `www` if used)
3. Update DNS at your registrar / Cloudflare to Railway’s CNAME target
4. Wait for TLS provisioning

If you keep **Cloudflare as DNS proxy** (orange cloud), point the record at Railway’s hostname and ensure SSL mode is **Full**.

## Redirects

`/sitemap.xml` → `/sitemap-index.xml` (301) is handled in `scripts/railway-server.mjs` (replacing Cloudflare Pages `_redirects` behaviour).

## Local smoke test

```sh
npm run build
PORT=4322 npm start
# open http://127.0.0.1:4322/
```

## Cloudflare Pages

`wrangler.jsonc` remains for optional Cloudflare deploy. Production can run on **either** Railway or Cloudflare Pages, not both on the same domain without DNS changes.
