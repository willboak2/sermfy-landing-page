# Sermfy CMS — Marketing Home Page

A Next.js (App Router) + Tailwind CSS rebuild of the Sermfy CMS public
home page, built from the provided Figma export spec. Fully responsive
from mobile up through the 1728px desktop layout.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view it.

## Structure

```
app/
  layout.tsx      Root layout, font + metadata
  page.tsx         Assembles the sections
  globals.css      Tailwind entry + small utilities
components/
  Header.tsx           Sticky nav with mobile menu
  Hero.tsx             Headline, CTAs, wave background
  WaveBackground.tsx   Decorative SVG line field
  DashboardMockup.tsx  Laptop + phone app preview
  Features.tsx         "Features You'll Love" 3x3 grid
  Footer.tsx           Link columns + CTA + bottom bar
```

## Notes / customizing

- Brand colors, the blue-to-cyan gradient, and the navy header live in
  `tailwind.config.ts` under `colors` / `backgroundImage` — change them
  once and they update everywhere.
- The laptop/phone dashboard preview is built from real HTML/CSS (no
  screenshot asset needed) so it's easy to restyle or swap for an actual
  product screenshot — just replace `DashboardMockup.tsx`'s contents with
  an `<Image />`.
- Nav links, footer links, and feature copy are plain arrays at the top
  of each component — edit the arrays, not the markup, to change copy.
- All interactive elements (`Login`, `Sign Up`, `Request Demo`, etc.) are
  plain buttons/anchors with `href="#"` placeholders — wire them up to
  your routes/auth once ready.
