# JoanRobayo Tattoo — Session Status

## Project
Landing page for JoanRobayo Tattoo (tattoo studio in Medellín).  
Built with **Next.js 16** + **Tailwind v4**.

## Git
- **Remote**: `https://github.com/arkstudio-co/landing-page-joan-robayo.git` — **pushed successfully**
- **Branch**: `main` (4 commits)
- **Commit SHA**: `c3f238a`
- **Auth**: Classic PAT stored in Windows Credential Manager (user: `ArkStudio`)

## Commits (most recent first)
```
c3f238a Remove large video from history and add to gitignore
d993052 Replace API reviews with real Google reviews carousel, add WhatsApp CTAs, adjust layouts
daba3d7 Rebrand to JoanRobayo Tattoo, add nav links with smooth scroll and WhatsApp CTA
3d671a5 Initial commit: landing page for Ark Studio (tattoo studio)
```

## Current State (Sesión 002)
- ✅ **next/image migration**: All `<img>` replaced with `<Image>` (hero, logo, categories, styles, blog, carousel, testimonials, footer)
- ✅ **next.config.ts**: Added `qualities: [75]` (Next.js 16 requirement), `formats: ["image/avif", "image/webp"]`
- ✅ **Texture background**: Replaced external Google URL with pure CSS radial gradients
- ✅ **Mobile hamburger menu**: New `MobileMenu` client component with animated overlay
- ✅ **Responsive fonts**: All `text-6xl` → `text-4xl md:text-6xl`, adjusted padding/margins
- ✅ **SEO**: OG tags, Twitter cards, keywords, JSON-LD for TattooParlor schema
- ✅ **Build**: 0 errors
- ✅ **Lint**: 0 errors

## Key Files
| File | Purpose |
|---|---|
| `src/components/mobile-menu.tsx` | Hamburger menu with animated overlay (client component) |
| `src/components/testimonials.tsx` | Infinite carousel with auto-scroll + drag, uses next/image |
| `src/lib/constants.ts` | 6 real Google reviews with `photoUri` |
| `src/components/hero.tsx` | WhatsApp CTAs, uses next/image with preload |
| `src/components/portfolio-carousel.tsx` | Carousel with next/image fill |
| `.gitignore` | Updated to exclude `public/videos/` |
| `.env.local` | `GOOGLE_PLACES_API_KEY` (not referenced anymore, kept for reference) |

## Build / Dev
```powershell
npm run dev    # Start dev server
npm run build  # Production build
npm run lint   # ESLint
```

## Notes
- `priority` prop deprecated in Next.js 16 → uses `preload` on hero image
- All images use `fill` with `sizes` for responsive optimization
- Remote images (Google avatars) configured via `remotePatterns` in `next.config.ts`
- Texture is pure CSS (no external dependency)
