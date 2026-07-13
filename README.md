# Mistora Estate Villa — Website

A quiet-luxury single-page website for **Mistora Estate Villa**, a private pool villa on a coffee estate in Suntikoppa, Coorg, Karnataka. Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**, with **Lenis** for smooth scrolling.

Design reference: Aman Resorts, Six Senses, Soneva, Evolve Back Coorg — restraint over decoration, generous whitespace, photography-led.

## Live Contact

- **Host:** Nahim
- **Phone / WhatsApp:** +91 8073713857
- **Email:** Nahimsh22@gmail.com

## Tech Stack

- **Next.js 14** — App Router, TypeScript, `next/image` (AVIF/WebP, lazy loading, blur-free but properly sized), Metadata API for SEO/JSON-LD/`robots.txt`/`sitemap.xml`.
- **Tailwind CSS** — custom palette and font tokens in `tailwind.config.ts` (see below).
- **Framer Motion** — scroll-triggered fade-ups (`components/motion.tsx`), staggered reveals, the hero's slow Ken Burns zoom, the rotating testimonial spotlight, and the gallery lightbox transition.
- **Lenis** — smooth-scroll wrapper in `components/SmoothScrollProvider.tsx`, disabled automatically when the visitor has `prefers-reduced-motion` set.

## Project Structure

```
.
├── app/
│   ├── layout.tsx                 Root layout: fonts, metadata, JSON-LD, Header/Footer/FloatingActions
│   ├── page.tsx                   Homepage — composes all sections in order
│   ├── globals.css                Tailwind entrypoint + base styles
│   ├── robots.ts                  robots.txt (Next.js metadata route)
│   ├── sitemap.ts                 sitemap.xml (Next.js metadata route)
│   ├── privacy-policy/page.tsx
│   └── terms-and-conditions/page.tsx
├── components/
│   ├── Header.tsx                 Sticky nav — transparent over the hero, solid once scrolled
│   ├── Hero.tsx
│   ├── Intro.tsx
│   ├── Villa.tsx                  Asymmetric alternating rows with scroll parallax
│   ├── Amenities.tsx
│   ├── Experiences.tsx            Pool / coffee walks / dining / bonfire grid
│   ├── WhyStay.tsx
│   ├── Gallery.tsx                 Masonry grid + keyboard-accessible lightbox
│   ├── Nearby.tsx
│   ├── Testimonial.tsx            Single-quote spotlight, cycles through all reviews
│   ├── Location.tsx
│   ├── BookingCTA.tsx
│   ├── Footer.tsx
│   ├── FloatingActions.tsx        WhatsApp button + back-to-top
│   ├── SmoothScrollProvider.tsx   Lenis wrapper
│   └── motion.tsx                 Shared Framer Motion variants/easing + Reveal helpers
├── lib/
│   └── site-config.ts             All content lives here: copy, contact info, nav, amenities,
│                                   experiences, gallery images, nearby attractions, testimonials
├── public/
│   ├── images/                    Real photos + remaining SVG placeholders
│   ├── icons/                     Amenity line icons (SVG, recolored via CSS mask-image)
│   └── favicon/                   Favicon set + web app manifest
├── tailwind.config.ts             Palette, fonts, type scale, custom easing/duration tokens
└── package.json
```

## Design Tokens (`tailwind.config.ts`)

| Token | Value | Use |
|---|---|---|
| `forest` | `#1B3A2F` (+ `light` `#2C5643` / `dark` `#10231C`) | Primary — dark sections, buttons, headings |
| `gold` | `#C9A227` (+ `light` `#DEC06B` / `dark` `#9C7E1D`) | Eyebrow text, accents |
| `offwhite` | `#FAF8F3` | Background |
| `charcoal` | `#2A2A28` (+ `soft` `#5A5A55`) | Body text |
| `font-serif` | Fraunces | Headings, display type |
| `font-sans` | Outfit | Body text, nav, UI |
| `ease-luxury` | `cubic-bezier(0.16, 1, 0.3, 1)` | All Framer Motion / CSS transitions — slow, confident, no bounce |

## Content

**Every piece of copy, contact info, and image reference lives in `lib/site-config.ts`.** To change any text on the site — nav labels, the intro paragraph, amenity names, testimonial quotes, nearby attractions — edit that file; you shouldn't need to touch component code for content changes.

## Swapping in Your Own Images

Most images are already real photos of the villa. A handful of sections still use generated placeholder SVGs until photography is available:

| File(s) | Section | Status |
|---|---|---|
| `hero.jpg`, `villa.jpg`, `pool.jpg`, `view.jpg`, `bedroom1.jpg`, `bedroom2.jpg`, `bedroom3.jpg`, `bedroom4.jpg`, `dusk.jpg`, `pathway.jpg`, `driveway.jpg`, `livingroom.jpg`, `family-suite.jpg`, `suite-lounge.jpg`, `outdoor-dining.jpg` | Hero, Villa rows, Experiences, Gallery, Contact | ✅ Real photos |
| `garden.svg`, `campfire.svg`, `food.svg`, `sunrise.svg` | Gallery / Experiences | Placeholder |
| `abbeyfalls.svg`, `rajaseat.svg`, `dubare.svg`, `goldentemple.svg`, `mandalpatti.svg`, `nisargadhama.svg`, `coffeeplantation.svg` | Nearby Attractions | Placeholder |
| `og-image.png` | Social share preview | Placeholder |

To replace a placeholder:

1. Save your photo into `public/images/` using the **same filename** but a real extension (`.jpg` or `.webp`).
2. Update the matching entry in `lib/site-config.ts` (e.g. `experiences`, `galleryImages`, `nearbyAttractions`) to point at the new filename.
3. That's it — `next/image` handles resizing, lazy loading and format conversion automatically. No manual compression needed, though keeping originals under ~2–3MB speeds up the build.

**Placeholders intentionally have no baked-in captions** (unlike a typical stock generator) because the same placeholder can appear in more than one section with different copy — e.g. `campfire.svg` is captioned "Campfire Evenings" in the Gallery but "Bonfire Evenings" in Experiences. If you regenerate placeholders yourself, keep them caption-free for the same reason.

## Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Deployment (Vercel)

This project deploys to **Vercel** at `www.mistoraestatevilla.com` — no special configuration needed; Vercel auto-detects Next.js.

1. Import the repository into the [Vercel dashboard](https://vercel.com) as a new project. Framework Preset, Build Command and Output Directory are all auto-detected — leave them as-is.
2. Go to **Settings → Domains** and add `www.mistoraestatevilla.com`.
3. At your domain registrar, either:
   - **Recommended:** point the domain's nameservers to Vercel's (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`) — Vercel then manages all records automatically, and
   - **or**, keep your current DNS provider and add both:
     - `www` → `CNAME` → `cname.vercel-dns.com`
     - `@` (apex) → `A` → `76.76.21.21`
4. Add the apex domain (`mistoraestatevilla.com`, no `www`) in **Settings → Domains** too, and set it to redirect to `www.mistoraestatevilla.com` — this matches the canonical URLs already baked into the site's metadata.
5. DNS propagation can take a few minutes up to 48 hours. Vercel issues and renews SSL automatically once records resolve.

## Before You Go Fully Live

- **Google Maps embed** (`components/Location.tsx`): currently points to a generic "Coorg, Karnataka" search. Replace the iframe `src` with your exact Google Maps embed URL once you have the villa's precise pin (Google Maps → Share → Embed a map).
- **Reviews** (`lib/site-config.ts` → `testimonials`): these are realistic placeholders, not real guest quotes. Swap in genuine reviews as they come in, and only add `Review`/`AggregateRating` JSON-LD once they're real — Google's structured data guidelines prohibit fabricated review markup.
- **Social links**: no social profiles are linked yet (none existed to reference). Add them to the Footer once available.
- **Legal pages**: `app/privacy-policy` and `app/terms-and-conditions` contain reasonable generic starting language — have them reviewed against your actual booking/payment process before relying on them legally.
- **OG image**: `public/images/og-image.png` is a generated placeholder graphic, not a real photo — consider swapping it for a real hero shot sized 1200×630 for richer social link previews.

## Accessibility & Performance Notes

- Skip-to-content link, semantic landmarks, visible focus states throughout.
- All images carry descriptive `alt` text; icon-only buttons carry `aria-label`.
- All motion respects `prefers-reduced-motion` (Lenis smooth-scroll and the testimonial auto-rotate both disable themselves).
- `next/image` is used everywhere with explicit `sizes` for correct responsive loading; the hero image is marked `priority` since it's the LCP element.
