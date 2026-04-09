# Guaranteed Income for Persian Americans

A static informational guide for nonprofits and practitioners building guaranteed income programs for the Persian-American community.

Organized by **DevArts Lab, Boston MA** — adapted from the [Urban Institute's Guaranteed Income Guide](https://www.urban.org/apps/how-build-guaranteed-income-program-and-coalition).

## Tech Stack

- **Next.js 15.3.5** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **next-intl v4** — bilingual EN + FA with RTL support
- **Vazirmatn** — Farsi font (via @fontsource)
- **Lucide React** — icons
- **shadcn/ui** — UI primitives

## Prerequisites

Node.js **v22 LTS** is required (Next.js 15 is incompatible with Node.js v25+):

```bash
nvm install 22
nvm use 22
```

An `.nvmrc` file is included so `nvm use` will pick the correct version automatically.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the app redirects to `/en` (English) by default.
Switch to Farsi at [http://localhost:3000/fa](http://localhost:3000/fa).

## Site Structure

| Route                  | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| `/[locale]`            | Home page — hero, section cards, coalition CTA                        |
| `/[locale]/understand` | Step 1 — Community demographics, immigration status, cultural context |
| `/[locale]/design`     | Step 2 — Eligibility, amounts, duration, target groups                |
| `/[locale]/engage`     | Step 3 — Outreach, language access, trust-building                    |
| `/[locale]/administer` | Step 4 — Enrollment, data privacy, casework                           |
| `/[locale]/payments`   | Step 5 — Banking barriers, dignity, financial inclusion               |
| `/[locale]/coalition`  | Step 6 — Coalition formation and advocacy                             |
| `/[locale]/resources`  | External resources and partner placeholder                            |

Locales: `en` (LTR) and `fa` (RTL).

## Content

All content lives in `messages/en.json` and `messages/fa.json`. Farsi content is fully authored (not placeholder).

## Callout Box Types

Pages use four callout box variants to highlight community-specific guidance:

- `immigration` — immigration status nuances (asylum, green card, citizen)
- `cultural` — cultural values (آبرو, family dynamics)
- `trust` — trust-building strategies
- `info` — general key considerations

## Deploy

```bash
npm run build
```

For static export, add `output: 'export'` to `next.config.ts` (middleware-based i18n requires a server — use Vercel for full i18n support).
