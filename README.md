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

Built for **Cloudflare Pages**: connect this repo, set build command to `npm run build`, output directory to `dist`.

The main 1Quest app (Remix + Railway) stays separate; link CTAs from here to the app when ready.
