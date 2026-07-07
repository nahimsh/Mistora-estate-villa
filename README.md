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

This is a fully static site — it can be deployed as-is to Netlify, Vercel, GitHub Pages, Cloudflare Pages, or any standard web host. No environment variables or build commands are needed.

### Deploying to GitHub Pages with the custom domain

The repo includes a `CNAME` file set to `www.mistoraestatevilla.com`, which is what GitHub Pages needs to serve the site on that domain instead of the default `github.io` URL.

1. In the repo, go to **Settings → Pages** and set the source branch (e.g. `main`) and folder (`/`, the repo root).
2. At your domain registrar / DNS provider, add these records:
   - `CNAME` record: host `www` → `<your-github-username>.github.io`
   - For the bare/apex domain (`mistoraestatevilla.com` without `www`) to also work, add `A` records pointing `@` to GitHub Pages' IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and optionally an `AAAA` record set for IPv6).
3. Back in **Settings → Pages**, confirm the custom domain shows as `www.mistoraestatevilla.com` and enable **Enforce HTTPS** once the certificate is issued (can take up to ~24 hours after DNS propagates).
4. DNS changes can take anywhere from a few minutes to 48 hours to propagate fully.

If you deploy elsewhere (Netlify/Vercel/Cloudflare Pages) instead, delete the `CNAME` file — it's specific to GitHub Pages — and add the domain through that provider's dashboard instead.
