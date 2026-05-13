# JoanRobayo Tattoo — Session Status

## Project
Landing page for JoanRobayo Tattoo (tattoo studio in Medellín).  
Built with **Next.js 16** + **Tailwind v4**.

## Git
- **Remote**: `https://github.com/arkstudio-co/landing-page-joan-robayo.git`
- **Branch**: `main` (11 commits, 6 ahead of origin)
- **Auth**: Classic PAT stored in Windows Credential Manager (user: `ArkStudio`)

## Commits (most recent first)
```
9852c97 Update blog listing with new hero image and clickable cards; swap consejos article images
8eba515 Update cuidar article with local images and add consejos article content
edb5d36 Add consejos article page with local images and refined layout
2a8b581 Polish article page: add Header, Contact section, and refine layout
c5dbe77 Add blog article detail page with dynamic routing and image support
1910ac7 Add blog page with custom header and subscription form
1027733 Migrate to next/image, add responsive menu, improve SEO and carousel
c3f238a Remove large video from history and add to gitignore
d993052 Replace API reviews with real Google reviews carousel, add WhatsApp CTAs, adjust layouts
daba3d7 Rebrand to JoanRobayo Tattoo, add nav links with smooth scroll and WhatsApp CTA
3d671a5 Initial commit: landing page for Ark Studio (tattoo studio)
```

## Current State (Sesión 004 — Completed)

### Completed this session
- ✅ **Blog hero image**: replaced `foto-principal-blog.jpg` → `hero-blog.jpg`
- ✅ **Blog cards**: wrapped in `<Link>` for full-card clickability to `/blog/:slug`
- ✅ **Consejos article images**: swapped body images from `consejos-1/3` → `consejos-4.jpg` + `consejos-5.png` under "Sin aspirina" section
- ✅ **Image normalization**: `consejos-5.PNG` → `consejos-5.png`
- ✅ **Build**: 0 errors in all 4 routes (home, blog listing, 3 article pages)
- ✅ **Commits**: 6 new commits covering blog articles, local images, header refactors

### In Progress
- (none)

### Pending for next session
- Page transition animations (View Transitions API)
- Analytics (Vercel Analytics or similar)
- sitemap.xml + robots.txt
- PWA (manifest, service worker)
- Lighthouse audit
- Image blurDataURL placeholders
- Fix lint error in `src/components/blog-header.tsx:14` (`<a>` → `<Link>`)

## Key Files
| File | Purpose |
|---|---|
| `src/app/page.tsx` | Home page (hero, styles, testimonials, portfolio, blog, contact) |
| `src/app/blog/page.tsx` | Blog listing page (hero, 3 card grid, CTA, subscription) |
| `src/app/blog/[slug]/page.tsx` | Blog detail pages (3 articles: bases, consejos, cuidar) |
| `src/components/header.tsx` | Main nav header with `contactHref` prop |
| `src/components/blog-header.tsx` | Blog-specific header (custom nav) |
| `src/components/blog-subscription.tsx` | Newsletter form via Formspree |
| `src/components/blog-section.tsx` | Home page blog preview section |
| `src/components/mobile-menu.tsx` | Hamburger overlay menu (optional links prop) |
| `src/components/hero.tsx` | Hero section with WhatsApp CTAs |
| `src/components/category-nav.tsx` | Category cards |
| `src/components/styles-section.tsx` | Tattoo styles grid |
| `src/components/tattoo-culture.tsx` | About/culture section |
| `src/components/testimonials.tsx` | Google reviews carousel |
| `src/components/portfolio-carousel.tsx` | Portfolio image carousel |
| `src/components/contact-section.tsx` | Contact form + info |
| `src/components/footer.tsx` | Footer with social links |
| `src/lib/constants.ts` | All data: nav, styles, reviews, portfolio, blog posts, contact |
| `next.config.ts` | Image remotePatterns, qualities, formats |

## Routes
| Route | Type | Content |
|---|---|---|
| `/` | Static | Full landing page |
| `/blog` | Static | Blog listing with 3 article cards |
| `/blog/bases-comportamiento-adecuado-estudio` | SSG | Article: etiqueta & cultura |
| `/blog/consejos-antes-de-hacerte-tattoo` | SSG | Article: preparación |
| `/blog/cuidar-tatuaje-manera-correcta` | SSG | Article: cuidados |

## Known Issues
- 1 lint error: `src/components/blog-header.tsx:14` — `<a href="/">` should be `<Link href="/">`

## Build / Dev
```powershell
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # ESLint
```

## Notes
- Next.js 16: `priority` deprecated → uses `preload` on hero images
- All images use `fill` + `sizes` for responsive optimization
- Remote images (Google avatars) via `remotePatterns` in `next.config.ts`
- Texture is pure CSS (no external dependency)
- Per-page Header via prop (`contactHref`), not from layout
- All article images are local files in `/images/`
