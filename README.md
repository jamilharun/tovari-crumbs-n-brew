# Calea Pastries & Coffee — Website

Unofficial website for Calea Pastries & Coffee, Bacolod City's award-winning dessert cafe. This is their first web presence.

**Tagline:** "Because Life is Sweeter in Bacolod."
**Owner:** Ging Consing
**Live locations:** Lacson Street (flagship), Robinsons Place Bacolod, The District Ayala North Point

---

## Tech Stack

|              |                                                                   |
| ------------ | ----------------------------------------------------------------- |
| Framework    | React 19 + TypeScript                                             |
| Build tool   | Vite 8 (`@vitejs/plugin-react`)                                   |
| Styling      | Tailwind CSS v4 via `@tailwindcss/vite` — no `tailwind.config.js` |
| UI libraries | None                                                              |

---

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

### All scripts

| Command           | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `npm run dev`     | Start local development server with HMR                      |
| `npm run build`   | Type-check and build for production (`tsc -b && vite build`) |
| `npm run preview` | Preview the production build locally                         |
| `npm run lint`    | Run ESLint                                                   |

---

## Project Structure

```
src/
  components/
    Navbar.tsx       Fixed top nav — transparent over hero, solid on scroll, mobile hamburger
    Hero.tsx         Full-viewport hero with pastry photography and tagline
    GlassCase.tsx    Signature section: horizontal scroll with blur-reveal cards
    Menu.tsx         Filterable catalog (All / Cakes & Pastries / Beverages / Seasonal)
    About.tsx        Brand story, name origin, stats bar
    FindUs.tsx       3 branch location cards with address, phone, and hours
    Gallery.tsx      CSS columns masonry layout with keyboard-navigable lightbox
    Footer.tsx       Tagline, social links, TripAdvisor badge, smooth-scroll nav
  index.css          Global styles + Tailwind v4 @theme block (all design tokens)
  App.tsx            Root component, page assembly
  main.tsx           Entry point
```

---

## Design System — "Patisserie Hush"

All tokens are defined in `src/index.css` under a `@theme {}` block (Tailwind v4 syntax). There is no `tailwind.config.js`.

### Color tokens

| Token               | Value     | Usage                         |
| ------------------- | --------- | ----------------------------- |
| `--color-ivory`     | `#F0E6D2` | Page background, card fills   |
| `--color-rose-gold` | `#C49A84` | Primary accent, CTAs, borders |
| `--color-espresso`  | `#2B1A0F` | Headings, body text           |
| `--color-sage`      | `#8A9A85` | Secondary accents, subtle UI  |

### Typography tokens

| Token             | Family           | Usage                          |
| ----------------- | ---------------- | ------------------------------ |
| `--font-playfair` | Playfair Display | Section headings, hero titles  |
| `--font-dmsans`   | DM Sans          | Body copy, UI labels           |
| `--font-italiana` | Italiana         | Accent labels, decorative text |

Custom fonts defined in `@theme` are available directly as utilities:

```html
<h1 class="font-playfair">...</h1>
<p class="font-dmsans">...</p>
<span class="font-italiana">...</span>
```

### Notable implementation details

- **Glass Case dual reveal:** CSS `group-hover` handles desktop; React state toggle handles mobile/tap. Both mechanisms run simultaneously — do not remove one thinking the other covers it.
- **Images:** All images are currently Unsplash placeholders sized via `?w=` query params for performance. Replace with real Calea photography before launch (see checklist below).
- **Tailwind v4:** There is no config file. Custom tokens, fonts, and any theme extensions belong in the `@theme {}` block in `src/index.css`.

---

## Pre-launch Checklist

These items must be resolved before the site goes live:

- [ ] **Replace placeholder images** — swap all Unsplash URLs in `Hero.tsx`, `GlassCase.tsx`, and `Gallery.tsx` with real Calea photography. Keep the `?w=` sizing params or equivalent for performance.
- [ ] **Confirm founding year** — verify the establishment year (currently listed as 2009) with owner Ging Consing.
- [ ] **Verify Chocolate Mud Pie claim** — confirm the origin/recipe claim referenced in `About.tsx` with the owner before publishing.
- [ ] **Confirm branch hours** — Robinsons Place and Ayala North Point hours are listed as "mall hours." Get exact operating times for both branches directly.
- [ ] **Claim review listings** — claim and link the official TripAdvisor and Yelp listings (TripAdvisor badge in footer links to the unclaimed profile).
- [ ] **Set up analytics** — add Google Analytics 4 or an equivalent (e.g., Plausible, Fathom) before launch to capture baseline traffic data.

---

## Deployment

This project is configured for [Netlify](https://netlify.com).

### Deploy via Netlify UI

1. Push the repository to GitHub (or GitLab / Bitbucket)
2. Log in to Netlify → **Add new site** → **Import an existing project**
3. Connect your repository
4. Netlify auto-detects the build settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

### Deploy via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init       # link to existing site or create new
netlify deploy --prod
```

### Environment notes

- No environment variables are required for the base site
- If analytics or a contact form is added later, add those keys in **Netlify → Site settings → Environment variables**
