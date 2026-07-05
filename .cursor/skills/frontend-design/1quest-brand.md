# 1Quest — brand tokens (companion to frontend-design)

Read this alongside `SKILL.md` when designing 1Quest marketing pages. Palette is derived
from the Clasico reference and fixed by the client; spend creative freedom on layout,
type treatment, and the signature element — not on inventing new colors.

## Subject
- **1Quest** — AI study agents for two audiences: **school students** and **UPSC aspirants**.
- The site carries a **School | UPSC** switch; audience is encoded in color.
- Page's single job: get the right person to start with the right agent.

## Palette (source of truth: `src/styles/tokens.css`)
| Name | Hex | Use |
|------|-----|-----|
| Paper | `#F3EFE5` | Page background |
| Paper deep | `#EAE3D4` | Alternating panels, cards |
| Sage | `#CBDEC8` | School world, soft panels |
| Green | `#2C6E49` | School solid accent (AA-safe on paper) |
| Signal red | `#E63329` | Signature accent, badges, UPSC world |
| Red solid | `#D62B20` | UPSC solid CTA (AA-safe) |
| Ink | `#16150F` | Text |
| Ink muted | `#5B564B` | Secondary text |

`--accent` is remapped by mode: **school → green**, **upsc → red**.

## Type
- Display: **Newsreader** (serif) — used with restraint; italics for one accent word.
- Body / UI: **Hanken Grotesk**.
- Eyebrows: Newsreader, uppercase, letter-spacing ~0.22em (the Clasico move).

## Signature
- The **School ⇄ UPSC toggle** re-skins the hero (copy, agent names, accent color).
- Keep everything else quiet. One bold move only.

## Guardrails
- Do not reintroduce the generic "cream + serif + terracotta" feel: the red is a loud
  signal, not a soft terracotta, and sage adds a second axis.
- Numbered markers only where content is a real sequence (e.g. "How it works").
- Respect reduced motion; visible keyboard focus; mobile down to 360px.
