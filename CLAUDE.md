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
```

## Architecture & Structure

### App Router (Next.js 14)
- Uses Next.js App Router with TypeScript
- File-based routing in `app/` directory
- Server and client components mixed (note "use client" directives)

### Key Directories
- `app/` - Next.js app router pages and layouts
  - `app/services/` - Service-specific pages (website-design, development, social-media, design)
  - Route structure mirrors navigation: home, work, process, about, contact
- `components/` - Reusable React components
  - Custom components: hero, navigation, service-tiles, testimonials, process-rail, cta
  - Luxury design components: glass-card, primary-button, loading-screen
  - `components/ui/` - shadcn/ui components (button, input, select, textarea)
- `lib/` - Utility functions (utils.ts for cn() tailwind merge)
- `public/` - Static assets and images
- `styles/` - Additional style files

### Design System

**Luxury aesthetic with glassmorphism:**
- Dark mode by default (`className="dark"` on html element)
- Custom utility classes defined in `app/globals.css`:
  - `.chrome-text` - Metallic gradient text effect used for branding
  - `.glass-card` - Glassmorphic card with backdrop blur and subtle borders
  - `.primary-button` - Glassmorphic button with hover effects
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

## v0.app Integration

This project auto-syncs with v0.app:
- Changes made in v0.app automatically push to this repo
- Deployed at: https://vercel.com/td-studioss-projects/v0-website-build-ip
- v0.app project: https://v0.app/chat/projects/pa3YYmKLuvN
- When making manual changes, be aware they may be overwritten by v0.app syncs

## Key Dependencies

- Next.js 14.2.16 with React 18
- Radix UI primitives for accessible components
- Tailwind CSS v4 with PostCSS
- Form handling: react-hook-form with zod validation
- Icons: lucide-react
- Animations: tailwindcss-animate, tw-animate-css
- Date handling: date-fns
- Carousel: embla-carousel-react
- Font: Inter (via next/font/google)

## Development Notes

- Loading screen shows for 1.5 seconds on homepage before content displays
- Navigation is fixed and uses glassmorphic backdrop blur
- All pages maintain consistent luxury aesthetic with dark theme
- Metadata configured for SEO with OpenGraph and Twitter cards
- @vercel/analytics integrated for tracking
