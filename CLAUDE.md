# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TD STUDIOS luxury website built with Next.js 14, TypeScript, and Tailwind CSS. The site is automatically synced with v0.app deployments and hosted on Vercel. This is a marketing website showcasing premium design services including website design, development, social media marketing, and graphic design.

## Package Manager

**Use pnpm for all package operations.** This project uses pnpm as indicated by `pnpm-lock.yaml`.

## Development Commands

```bash
# Start development server (localhost:3000)
pnpm dev

# Build for production
pnpm build

# Run production build locally
pnpm start

# Lint the codebase
pnpm lint

# Run Playwright E2E tests (tests in tests/ directory)
pnpm test:e2e

# Run Lighthouse SEO audit (tests homepage and /services)
pnpm test:seo

# Validate HTML heading structure and metadata
pnpm lint:html
# or
pnpm check:structure

# Run full audit (build + E2E + SEO tests)
pnpm audit
```

## Architecture & Structure

### App Router (Next.js 14)
- Uses Next.js App Router with TypeScript
- File-based routing in `app/` directory
- Server and client components mixed (note "use client" directives)

### Key Directories
- `app/` - Next.js app router pages and layouts
  - `app/services/` - Service-specific pages (website-design, development, social-media, design)
  - `app/work/[slug]/` - Dynamic portfolio client pages (uses generateStaticParams)
  - Route structure mirrors navigation: home, work, process, about, contact
- `components/` - Reusable React components
  - Custom components: hero, navigation, service-tiles, testimonials, process-rail, cta
  - Luxury design components: glass-card, primary-button, loading-screen, frosted-button
  - Animation components: custom-cursor, page-transition, scroll-reveal (Framer Motion based)
  - `components/ui/` - shadcn/ui components (button, input, select, textarea)
- `lib/` - Utility functions and data
  - `utils.ts` - cn() tailwind merge helper
  - `clients-data.ts` - Portfolio client data (Client interface + clients array)
  - `seo.ts` - Structured data helpers for JSON-LD
- `public/` - Static assets and images
  - `public/clients/` - Client logos and portfolio assets organized by slug
- `scripts/` - Build validation scripts (check-headings.js)

### Design System

**Luxury aesthetic with glassmorphism:**
- Dark mode by default (`className="dark"` on html element)
- Custom utility classes defined in `app/globals.css`:
  - `.chrome-text` - Metallic gradient text effect used for branding
  - `.glass` - Base glassmorphism with backdrop blur
  - `.glass-card` - Glassmorphic card with hover lift effect
  - `.primary-button` - Glassmorphic button with sheen animation on hover
  - `.secondary-button` - Transparent button with border
  - `.focus-ring` - Consistent focus styling for accessibility
  - `.grid-bg` - Radial grid background for sections
  - `.divider` - 1px white/10 divider line
- Brand colors: `--color-ink` (#0A0A0B) background, `--color-platinum` (#E6E7EA) text
- Uses oklch color space for modern color definitions
- Tailwind CSS v4 with custom CSS variables
- Reduced motion support for accessibility

### Component Patterns

**Navigation (components/navigation.tsx):**
- Client component with dropdown menus
- Responsive mobile menu with hamburger icon
- Uses pathname detection for active states
- Services dropdown with sub-navigation

**Page Structure:**
- Most service pages follow: Hero Section → Services Grid → Process/Capabilities → Portfolio → CTA
- Extensive use of GlassCard components for content containers
- Image optimization with Next.js Image component

### Path Aliases
Uses `@/*` for absolute imports:
- `@/components` → components/
- `@/lib` → lib/
- `@/app` → app/

### Styling Configuration

**components.json (shadcn/ui config):**
- Style: "new-york"
- Base color: neutral
- Icon library: lucide-react
- CSS variables enabled

**Build Configuration:**
- ESLint and TypeScript checks disabled during builds (`ignoreDuringBuilds: true`)
- Image optimization disabled (`unoptimized: true`)
- These settings allow rapid iteration from v0.app syncs

## Deployment & v0.app Integration

This project auto-syncs with v0.app and deploys to Vercel:
- v0.app project: https://v0.app/chat/projects/pa3YYmKLuvN
- Vercel deployment: https://vercel.com/td-studioss-projects/v0-website-build-ip
- Changes made in v0.app automatically push to this repo
- **Important:** Manual changes may be overwritten by v0.app syncs

## Key Dependencies

- Next.js 14.2.16 with React 18
- Radix UI primitives for accessible components
- Tailwind CSS v4 with PostCSS
- Form handling: react-hook-form with zod validation
- Icons: lucide-react
- Animations: framer-motion, tailwindcss-animate, tw-animate-css
- Date handling: date-fns
- Carousel: embla-carousel-react
- Font: Inter (via next/font/google) or Geist
- Theme management: next-themes

## Development Notes

- Loading screen shows for 1.5 seconds on homepage before content displays
- Navigation is fixed and uses glassmorphic backdrop blur
- All pages maintain consistent luxury aesthetic with dark theme
- Metadata configured for SEO with OpenGraph and Twitter cards
- @vercel/analytics integrated for tracking

### Portfolio System (Work Pages)

**Dynamic client pages use static generation:**
- Client data defined in `lib/clients-data.ts` as a typed array
- Each client has a unique `slug` field used for routing
- `/work/[slug]/page.tsx` uses `generateStaticParams()` to pre-render all client pages at build time
- `generateMetadata()` creates SEO-optimized metadata per client

**Client interface includes:**
- Basic info: name, slug, logo, industry, year
- Services array, description, results array
- Gallery images (array of paths)
- Optional: heroImage, tagline, websiteUrl, socialLinks, testimonial
- Logo modifiers: logoInvert (boolean), logoBgColor (string)

**Adding new portfolio clients:**
1. Add client entry to `clients` array in `lib/clients-data.ts`
2. Create unique slug (used in URL: `/work/{slug}`)
3. Add logo to `public/clients/{slug}/logo.{ext}`
4. Add gallery images to `public/` or client-specific folder
5. Run `pnpm build` to verify static generation works

## Testing & Quality

- **E2E Testing:** Playwright tests in `tests/` directory verify:
  - Homepage loading and sticky CTA behavior
  - Contact form validation
  - Services page structure
  - Navigation and dropdown menus
- **SEO Auditing:** Lighthouse CI (lighthouserc.json) tests:
  - Performance (min 90%)
  - Accessibility (min 95%)
  - SEO (min 95%)
  - Best Practices (min 95%)
  - Runs on homepage and /services
- **HTML Validation:** scripts/check-headings.js validates:
  - Each page has exactly one `<h1>` element
  - All pages have proper metadata exports
  - Client components import Hero for H1
- **Full Audit:** Run `pnpm audit` before deployments to verify build, tests, and SEO

## Accessibility Features

- Skip to main content link (visible on focus)
- Proper ARIA labels on navigation and interactive elements
- Focus ring utilities for keyboard navigation
- Reduced motion support in CSS
- Semantic HTML structure with proper heading hierarchy
- Test IDs for E2E testing (e.g., `data-testid="hero-title"`)

## SEO & Structured Data

- Comprehensive metadata in app/layout.tsx (OpenGraph, Twitter cards)
- JSON-LD structured data for Organization and LocalBusiness schemas (lib/seo.ts)
- Canonical URLs configured
- Google verification token placeholder
- Font optimization with preload and display swap
