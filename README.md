# 1Quest Marketing (Astro)

Public marketing site for **1Quest Learn** — static pages optimized for SEO and Cloudflare Pages deployment.

## Pages

| Route       | File                    |
| ----------- | ----------------------- |
| `/`         | `src/pages/index.astro` |
| `/about/`   | `src/pages/about.astro` |
| `/contact/` | `src/pages/contact.astro` |
| `/privacy/` | `src/pages/privacy.astro` |

## Commands

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in ./dist
npm run preview  # preview production build
```

## Deploy

### Railway (recommended for ops alongside the main app)

Connect this repo in [Railway](https://railway.app/). `railway.toml` sets build (`npm run build`) and start (`npm start`). See [docs/RAILWAY_DEPLOY.md](docs/RAILWAY_DEPLOY.md).

### Cloudflare Pages (alternative)

Build command `npm run build`, output directory `dist`. No `npm start` — Pages serves `dist/` at the edge. `wrangler.jsonc` is for optional Wrangler deploys.

The main 1Quest app (Remix + Railway) stays separate; link CTAs from here to the app when ready.
