# NlivriLik — Landing Page

Conversion-focused landing page for NlivriLik (express delivery, Morocco). Every CTA drives users to WhatsApp (`wa.me/212610336499`) with a localized prefilled message.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4** + shadcn (Base UI)
- **MagicUI** components for all animations (bento grid, marquee, blur-fade, number ticker, aurora text, word rotate, border beam, ripple, shimmer/pulsating buttons, dot pattern)
- **Dark / light mode**: MagicUI `animated-theme-toggler` (View Transitions API), persisted in `localStorage("theme")`
- **i18n**: FR / EN / AR via JSON files (`src/i18n/locales/`), no URL prefix, persisted in `localStorage("nlivrilik-locale")` with a Zustand store. Arabic switches the page to RTL and the Cairo font.
- **Fonts**: Bricolage Grotesque (headings), Manrope (body), Cairo (Arabic) via `next/font`

## Commands

```bash
pnpm install
pnpm dev      # dev server (Turbopack)
pnpm build    # production build
pnpm start    # serve production build
```

## Structure

```
src/
  app/              layout (fonts, theme init, metadata), page, globals.css (brand palette)
  components/
    sections/       navbar, hero, stats, services, how-it-works, testimonials, faq, cta, footer
    ui/             MagicUI components (installed via shadcn registry)
    icons.tsx       WhatsApp + social brand SVGs
  i18n/             Zustand locale store + fr/en/ar JSON dictionaries
  lib/site.ts       WhatsApp number, socials, wa.me link builder
```

## SEO

- Rich metadata + Open Graph + Twitter cards in `src/app/layout.tsx` (FR keywords for Rabat/Salé/Témara/Kénitra + Arabic terms)
- JSON-LD structured data (`LocalBusiness`, `WebSite`, `FAQPage`) in `src/components/json-ld.tsx`
- `src/app/sitemap.ts` → `/sitemap.xml`, `src/app/robots.ts` → `/robots.txt` (AI crawlers allowed)
- `public/llms.txt` for AI answer engines
- Generated Open Graph image at `/opengraph-image` (`src/app/opengraph-image.tsx`)

## Editing content

- Copy/translations: `src/i18n/locales/{fr,en,ar}.json`
- WhatsApp number & socials: `src/lib/site.ts`
- Brand colors: CSS variables in `src/app/globals.css` (`--primary` orange, `--brand-green`, `--wa` WhatsApp green)
