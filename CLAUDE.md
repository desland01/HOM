# Homeowner Marketers Project Context

## Project Overview

This is the codebase for the Homeowner Marketers landing page. It is a Next.js application designed to convert painting contractors into pilot partners for a new SEO and website development service.

The design relies heavily on established brand guidelines to communicate a professional, modern, and high-performance tone, pivoting away from standard "agency" or "contractor" templates. It utilizes high-end, Webflow-inspired animations to create a premium, "machined" feel.

**Key Technologies:**
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (with custom extreme scaling like `text-10xl`)
- **Animations:** Framer Motion (global reusable library)
- **Typography:** `next/font/google` (Sora & Inter)
- **Deployment Target:** Vercel

## Brand Guidelines & Vibe

This project meticulously adheres to the Homeowner Marketers brand identity:
- **Tone:** Professional, authoritative, structured growth, strategic intelligence.
- **Aesthetic:** "Machined", high-contrast, massive typography, Webflow-tier interactions.
- **Colors:** 
  - **Soft Ivory** (`#F5F3EF` / `bg-brand-ivory`) - Primary background.
  - **Deep Mustard Gold** (`#C9A227` / `bg-brand-mustard`) - Primary accents, badges, highlights.
  - **Charcoal Black** (`#1C1C1C` / `text-brand-charcoal`) - Primary text, dark backgrounds.
- **Typography:**
  - **Primary (Headings/Buttons):** Sora (ExtraBold, Bold, SemiBold, Medium). Use `-0.05em` tracking for a tighter, premium look.
  - **Secondary (Body):** Inter (Regular, Medium, SemiBold).

## Animation Architecture (Webflow Vibe)

Animations are centralized in `components/ui/animations.tsx` to maintain a globally scalable, premium feel without duplicating Framer Motion logic.

- **`FadeIn`**: Standard staggered entrance for text blocks.
- **`TextReveal`**: Staggered word-by-word spring reveal for massive (`text-7xl`+) headings.
- **`Parallax`**: Scroll-linked Y-axis offset for background numbers and secondary text.
- **`Magnetic`**: Spring-based cursor pull effect for primary CTA buttons.
- **`ScaleReveal`**: Snappy scale-up entrance for cards and grid items.
- **`StickyFeatures`**: A specialized component for 3D stacking cards on scroll (`components/ui/sticky-features.tsx`).

## Mobile CRO Mandates

Mobile optimization is strictly enforced based on conversion rate data:
- **Viewports:** Always use `100dvh` instead of `100vh` or `h-screen` to prevent layout jumping when mobile browser address bars appear/disappear.
- **Typography Limits:** Never use font sizes below `12px` (`text-xs`) to maintain WCAG legibility. Scale down massive desktop headings (e.g., `text-10xl` to `text-5xl`) to prevent horizontal scroll breaking on 375px screens.
- **Touch Targets:** Ensure interactive elements have sufficient padding and height (minimum 48px).

## Building and Running

The project utilizes standard Next.js npm scripts:

- **Install dependencies:** `npm install`
- **Development server:** `npm run dev` (Runs locally on `localhost:3000`)
- **Production build:** `npm run build`
- **Start production server:** `npm run start`

## Development Conventions

- Use Tailwind for all styling. Rely heavily on grid layouts and thick borders to maintain the "machined" vibe.
- Extract complex UI sections into `components/sections/` (e.g., `comparison-table.tsx`, `guarantees.tsx`).
- Always verify changes against mobile viewports (`375px` width).
- **Changelog:** All major updates are tracked in `CHANGELOG.md`.