# Mistora Estate Villa — Website

A premium, single-page static website for **Mistora Estate Villa**, a private estate stay in Coorg, Karnataka. Built with plain HTML5, CSS3 and modern vanilla JavaScript — no frameworks, no build step, no dependencies.

## Live Contact

- **Host:** Nahim
- **Phone / WhatsApp:** +91 8073713857
- **Email:** Nahimsh22@gmail.com

## Project Structure

```
.
├── index.html                  Main single-page site
├── privacy-policy.html         Privacy policy page
├── terms-and-conditions.html   Booking terms & house rules
├── style.css                   Core design system + all component styles
├── legal.css                   Supplementary styles for the legal pages
├── script.js                   Nav, scroll reveal, lightbox, carousel, back-to-top
├── images/                     Gallery, hero and attraction images (SVG placeholders + og-image.png)
├── icons/                      Amenity line icons (SVG, recolored via CSS mask-image)
├── favicon/                    Favicon set + web app manifest
├── robots.txt
├── sitemap.xml
└── README.md
```

## Replacing Placeholder Images

Every photo on the site is currently a generated placeholder (`images/*.svg`) so the layout can be reviewed before real photography is available. To replace them:

1. Shoot or source real photos for each file listed below (matching aspect ratio helps, but isn't required — CSS handles cropping).
2. Save your new photos using the **same filenames** but with a real image extension (e.g. `.jpg` or `.webp`).
3. Update the corresponding `src` attributes in `index.html` (a simple find-and-replace of `.svg` → `.jpg` inside the `images/` references will do it, once every file exists).
4. Compress images (aim for under 200KB each) and, ideally, provide `.webp` versions with a `<picture>` fallback for best performance.

| File | Used for |
|---|---|
| `hero.svg` | Full-screen hero background |
| `villa.svg` | About section + gallery |
| `bedroom1.svg`, `bedroom2.svg` | Gallery |
| `livingroom.svg` | Gallery |
| `garden.svg` | Gallery |
| `campfire.svg` | Gallery |
| `food.svg` | Gallery |
| `view.svg` | Gallery + Contact section |
| `sunrise.svg` | Gallery |
| `pool.svg` | Gallery |
| `abbeyfalls.svg`, `rajaseat.svg`, `dubare.svg`, `goldentemple.svg`, `mandalpatti.svg`, `nisargadhama.svg`, `coffeeplantation.svg` | Nearby Attractions |
| `og-image.png` | Social share preview (Open Graph / Twitter Card) |

## Before You Deploy — Replace These Placeholders

- **Canonical URL / domain:** `https://www.mistoraestatevilla.com/` is used throughout (`<link rel="canonical">`, Open Graph tags, JSON-LD, `robots.txt`, `sitemap.xml`). Replace it with your real domain everywhere it appears.
- **Google Maps embed:** the `<iframe>` in the Location section currently points to a generic "Coorg, Karnataka" search. Replace `src` with your exact Google Maps embed URL (Google Maps → Share → Embed a map) once you have the villa's exact pin.
- **Social links:** Instagram / Facebook / YouTube icons in the footer currently link to `#`. Update `href` once real profiles exist.
- **Reviews:** testimonials are realistic placeholders, not real guest quotes. Replace with genuine reviews as they come in — and only add `Review`/`AggregateRating` structured data once reviews are real (Google's guidelines prohibit fabricated review markup).
- **Legal pages:** `privacy-policy.html` and `terms-and-conditions.html` contain reasonable, generic starting language. Have them reviewed against your actual booking/payment process before relying on them legally.

## Features

- Sticky, glassmorphic navigation with mobile drawer menu
- Full-screen hero with scroll indicator
- Scroll-reveal animations (`IntersectionObserver`, respects `prefers-reduced-motion`)
- Masonry-style photo gallery with a keyboard-accessible lightbox
- Amenities grid using a single recolorable SVG icon set
- Horizontally scrollable, snap-based guest reviews carousel
- Nearby attractions grid
- Embedded map with a clear placeholder note
- Floating WhatsApp button + back-to-top button
- SEO: meta description/keywords, canonical, Open Graph, Twitter Card, `LodgingBusiness` + `LocalBusiness` JSON-LD, `robots.txt`, `sitemap.xml`
- Accessibility: skip link, semantic landmarks, proper heading hierarchy, visible focus states, descriptive alt text, `aria-label`s on icon-only controls

## Local Preview

No build tools are required. Serve the folder with any static server, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

This is a fully static site — no build step, no environment variables, no framework detection needed. It's deployed on **Vercel** at `www.mistoraestatevilla.com`.

### Deploying to Vercel with the custom domain

1. In the [Vercel dashboard](https://vercel.com), import this repository as a new project. Since there's no build step, leave the Framework Preset as **Other** and the Build Command / Output Directory blank (Vercel will serve the static files from the repo root as-is).
2. Once deployed, go to the project's **Settings → Domains** and add `www.mistoraestatevilla.com`.
3. Vercel will show the DNS records you need to add at your domain registrar. There are two ways to satisfy them — pick one, not both:
   - **Recommended (simplest): delegate DNS to Vercel.** At your registrar, change the domain's nameservers to Vercel's:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`
     Vercel then manages all DNS records for the domain automatically. This is usually what clears an "Invalid Configuration" error fastest, since there's no record-by-record mismatch possible.
   - **Manual records**, if you want to keep DNS at your current provider:
     - `www` → `CNAME` → `cname.vercel-dns.com`
     - `@` (apex/root, i.e. `mistoraestatevilla.com`) → `A` → `76.76.21.21`
4. Also add the apex domain `mistoraestatevilla.com` (without `www`) in **Settings → Domains** and set it to **redirect** to `www.mistoraestatevilla.com` — this matches the canonical URLs already used throughout the site's meta tags and structured data.
5. DNS changes can take a few minutes up to 48 hours to propagate. Vercel automatically issues and renews the SSL certificate once the records resolve correctly.

**Common cause of "Invalid Configuration":** DNS records pointing somewhere other than Vercel (e.g. leftover records from a different host), or having only one of the two required records (`www` CNAME and apex `A`) in place. Double-check both, or switch to the nameserver option above to avoid the issue entirely.

If you ever deploy elsewhere instead (Netlify, GitHub Pages, Cloudflare Pages), just add the domain through that provider's dashboard — no other changes to this repo are needed.
