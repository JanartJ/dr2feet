# Dr. 2 Feet — Regenerative Podiatry

A premium, animated marketing site for Dr. 2 Feet (Bilal Khan, DPM), built with React + Vite (JavaScript, no TypeScript).

## Tech stack
- React 19 + Vite
- react-router-dom (multi-page routing + animated route transitions)
- framer-motion (animations)
- Plain CSS with a shared design-token system (`src/index.css`)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

The production files are output to `dist/`. Deploy that folder to any static host (Vercel, Netlify, Cloudflare Pages, S3, etc.).

## Project structure

```
src/
  assets/          logo image
  components/      Navbar, Footer, BioGraphic (hero SVG art), Accordion,
                    TestimonialRotator, PageTransition, ScrollToTop
  pages/           Home, About, Services, Contact, NotFound
  index.css        design tokens (colors, type, spacing) + shared utility classes
```

## Content to personalize before launch
- `src/components/Footer.jsx` and `src/pages/Contact.jsx` — address, phone, email, hours are placeholders
- `src/pages/Home.jsx` — patient stats and testimonial quotes are placeholders
- `src/pages/About.jsx` — credentials list is a placeholder; confirm exact titles/fellowships
- `src/pages/Contact.jsx` — the contact form currently only shows a success state client-side; wire the `handleSubmit` function up to your email service / backend / form provider (e.g. Formspree, a serverless function, etc.) to actually receive submissions
- Google Maps embed in `src/pages/Contact.jsx` uses a generic address query — replace with your real address for an accurate pin

## Design notes
- Color palette, typography, and motion choices are documented in `src/index.css` and follow the visual language of the logo (deep navy, electric blue/teal bio-glow, chrome text).
- Motion is intentionally restrained: one orchestrated hero sequence, route-change transitions, and hover/interaction-triggered effects — not fade-ins on every scroll.
