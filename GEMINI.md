# Homeowner Marketers Project Context

## Project Overview

This is the codebase for the Homeowner Marketers landing page. It is a Next.js application designed to convert painting contractors into pilot partners for a new SEO and website development service.

The design relies heavily on established brand guidelines to communicate a professional, modern, and high-performance tone, pivoting away from standard "agency" or "contractor" templates.

**Key Technologies:**
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Typography:** `next/font/google` (Sora & Inter)
- **Deployment Target:** Vercel

## Brand Guidelines

This project meticulously adheres to the Homeowner Marketers brand identity:
- **Tone:** Professional, authoritative, structured growth, strategic intelligence.
- **Colors:** 
  - **Soft Ivory** (`#F5F3EF` / `bg-brand-ivory`) - Primary background.
  - **Deep Mustard Gold** (`#C9A227` / `bg-brand-mustard`) - Primary accents, buttons, highlights.
  - **Charcoal Black** (`#1C1C1C` / `text-brand-charcoal`) - Primary text, dark backgrounds.
- **Typography:**
  - **Primary (Headings/Buttons):** Sora (ExtraBold, Bold, SemiBold, Medium).
  - **Secondary (Body):** Inter (Regular, Medium, SemiBold).

## Building and Running

The project utilizes standard Next.js npm scripts:

- **Install dependencies:** `npm install`
- **Development server:** `npm run dev` (Runs locally on `localhost:3000`)
- **Production build:** `npm run build`
- **Start production server:** `npm run start`

## Development Conventions

- Use Tailwind for all styling to maintain consistency.
- Extract repeated UI components into their own files if they grow in complexity (e.g., Pricing Cards, Feature Checkmarks).
- Maintain responsiveness across mobile and desktop breakpoints using Tailwind's `md:`, `lg:`, `xl:` prefixes.
- Framer Motion should be used for scroll reveal effects to emulate a high-end application feel. Use the `whileInView` prop to trigger animations as users scroll down the page.
