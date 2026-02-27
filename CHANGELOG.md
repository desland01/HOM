# Changelog

All notable changes to the Homeowner Marketers project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Created `docs/offer-options.md` synthesizing all components of the "Pilot Offer" from existing project documents (Next.js build details, 90-day proof period, and pricing tiers).

### Added
- Added `components/ui/feature-modal.tsx` to handle progressive disclosure of tier-specific feature details.
- Added `components/ui/guarantee-modal.tsx` with a 3-step animated carousel (page-turn on desktop, swipe on mobile) to explain guarantees in depth.
- Imported `SITE-STRUCTURE-PLAN.md` into the `docs` folder as a reference artifact.
- Established the **Vibe Coding Protocol** in `GEMINI.md` and `CLAUDE.md`, officially designating the User as the Product Manager/Creative Director and the AI as the Senior Autonomous Developer.
- Created `CHANGELOG.md` to track project history.
- Set up a git post-commit hook to automatically encourage changelog updates or log git activity.
- Created `components/ui/animations.tsx` to act as a centralized, Webflow-inspired animation library (Framer Motion).
- Added `FadeIn`, `TextReveal`, `Parallax`, `Magnetic`, and `ScaleReveal` reusable animation wrappers.
- Created `components/ui/sticky-features.tsx` for a 3D sticky stacking card effect on the features section.
- Added an infinite CSS marquee strip below the hero section.
- Migrated and redesigned the `ComparisonTable` and `Guarantees` sections from the original HTML into modular React components (`components/sections/`).

### Changed
- **Copywriting:** Applied the Hormozi-Sanchez framework across the landing page to create punchy, high-contrast, value-first hooks (e.g., "WE BUILD THE MACHINE. YOU COUNT THE LEADS.").
- **Guarantees:** Redesigned the "Our Promises" section into clickable cards that trigger deep-dive modals. Added a 6th "Top 3 Or We Work Free" guarantee with a custom SVG chalk double-underline.
- **Features:** Updated `StickyFeatures` with buttons linking to deep-dive `FeatureModal` popups for each section.
- **Design System:** Transitioned the site to a Webflow "machined" aesthetic with oversized typography (up to `text-10xl`), tight tracking, and heavy borders.
- **Hero Section:** Upgraded the "50% OFF" badge with a 3D rotation spring animation on hover.
- **Layout:** Converted "The Problem" and "Pilot Packages" sections to use a modern side-by-side sticky scroll layout.
- **Mobile CRO:** Replaced all `h-screen` classes with `100dvh` to fix mobile browser jumpiness.
- **Mobile CRO:** Scaled down massive typography (`text-10xl` -> `text-5xl`) on mobile breakpoints to prevent horizontal overflow on 375px screens.
- **Accessibility:** Upgraded all `text-[10px]` utility classes to `text-xs` (12px) to meet baseline mobile legibility standards.
- Updated `GEMINI.md` and created `CLAUDE.md` to establish firm guidelines on the animation architecture, Webflow vibe, and mobile CRO standards.