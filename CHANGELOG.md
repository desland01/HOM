# Changelog

All notable changes to the Homeowner Marketers project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- **Copy Update (page.tsx):** Updated the Solution section heading from "LOOK LIKE THE BEST. CHARGE LIKE THE BEST." to "LOOK LIKE THE BEST - CHARGE LIKE THE BEST." per the user's request.
- **Sticky Features Animation (sticky-features.tsx):** Refined the entrance animation of "The Solution" cards. Removed the blur effect entirely and increased the entrance zoom scale (starting from 0.6 instead of 0.8) to make the "zoom and lock into place" feel more pronounced and snappy.
- **Guarantees Section Copy Rewrite (guarantees.tsx):** Rewrote all copy in the guarantees section using Hormozi-Sanchez risk-reversal methodology. Updated all 6 guaranteeDetails modal entries (top-3, pagespeed, risk-free, walk-away, delivery, approval) with progressive 3-step stories where each step tells a unique part of the guarantee narrative. Rewrote all 6 guarantee card titles and descriptions to maximize "no way I can lose" framing. Section header changed from "THE 'NO B.S.' GUARANTEE STACK." to "SIX GUARANTEES. ZERO RISK. ALL YOURS." Label changed from "Our Promises" to "You Risk Nothing." All copy at 5th grade reading level, you/your dominant voice, ASCII only, zero tech jargon. Specific penalties named throughout (work free, fix free, 20% off, keep everything).
- **Hormozi-Sanchez Copy Rewrite (add-ons-and-bundles.tsx):** Rewrote all copy strings in the add-ons section using Hormozi-Sanchez value-stacking methodology. Maintenance plan features now describe outcomes ("Your site stays online 24/7") instead of features ("24/7 Uptime Monitoring"). SEO plan features rewritten to sell Google visibility results. Fixed Enterprise tier's broken warning-style features ("Impact fades without Ultimate Arsenal") with actual value props. AI tool descriptions now frame around lost revenue ($5,000 missed call) and 24/7 availability. Bundle descriptions sell the combined outcome instead of listing ingredients. A la carte items each sell an outcome in one sentence. Section headers refreshed ("STACK THE DECK." / "Add More Firepower"). Sub-headers rewritten to outcome-oriented language ("Keep It Running", "Get Found First", "Never Miss A Lead", "Pick What You Need", "Bundle And Save"). All copy at 5th grade reading level, you/your dominant, ASCII only, zero tech jargon. Renamed "Enterprise Takeover" to "Total Takeover". Renamed "Google Business Profile Setup" to "Google Profile Setup".
- **Hormozi-Sanchez Copy Rewrite (page.tsx):** Rewrote all user-facing copy strings using direct-response methodology grounded in the brand messaging playbook. Hero headline changed to "STOP LOOKING CHEAP. START CHARGING MORE." Problem cards rewritten with painter-specific pain language. All tier feature lists now sell outcomes instead of tech features. Removed all remaining jargon (Geo-Silo, GBP entity synchronization, reverse-silo, DataForSEO). CTAs shifted to "See If You Qualify" and "Let's Talk" for higher conversion intent. Solution header changed to "LOOK LIKE THE BEST. CHARGE LIKE THE BEST." Tier names updated to Neighborhood Pro, City Dominator, Metro Takeover. All copy at 5th grade reading level, you/your dominant voice, ASCII only.
- **Comparison Table Copy Overhaul:** Rewrote all 6 featureDetails modal entries (titles, descriptions, and tier strings) in `comparison-table.tsx` using Hormozi-Sanchez methodology. Fixed critical bug where page-speed tiers had 3 identical lines. Replaced all tech jargon (Geo-Silo, reverse-silo, NAP, DataForSEO, GBP entity sync) with plain-language benefit copy. Updated section header from "SIDE BY SIDE." to "NO SURPRISES." with refreshed subtitle.
- **Global Copy Rewrite:** Stripped out tech jargon (Next.js, Vercel, React, JSON-LD) across `app/page.tsx`, `components/ui/sticky-features.tsx`, `components/sections/comparison-table.tsx`, and `components/sections/guarantees.tsx`. Realigned all user-facing text to speak directly to painting contractors (e.g. "Stop looking like the guy with a van", "Filter the tire-kickers", "High-Performance Architecture").
- Rewrote `docs/core-message.md` to aggressively strip out tech jargon (Agentic Engineering, Netflix-tier, etc.) and realign the messaging to speak directly to blue-collar painting business owners.
- Restructured `docs/core-message.md` into a formal brand messaging architecture, highlighting de-commoditization, Agentic Engineering USPs, and the funnel architecture.
- **Messaging Pivot:** Shifted core offer messaging from "no 12-month lock-ins" to "paying for speed and precision." Emphasized that 90-day proof engine transitions into a mandatory 12-month recurring growth plan.
- Updated `components/sections/add-ons-and-bundles.tsx` to explicitly state that the Enterprise Takeover tier indexes 50 pages at once for max start velocity.

### Added
- Created `docs/core-message.md` to formalize the brand's unique selling propositions, positioning strategy, and pricing funnel (speed over commodity).
- Added `components/sections/add-ons-and-bundles.tsx` to showcase optional upgrades like Website Maintenance, SEO Growth Plans, AI Tools, Bundles, and A La Carte services.
- Created `docs/offer-options.md` synthesizing all components of the "Pilot Offer" from existing project documents (Next.js build details, 90-day proof period, and pricing tiers).
- Copied `docs/offer-options.md` to `~/.claude/` to serve as a shared global context.

### Changed
- Rewrote `docs/offer-options.md` with a non-technical TLDR, detailed component explainers, market-comparable pricing tiers, and explicit ownership/buyout clauses.

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