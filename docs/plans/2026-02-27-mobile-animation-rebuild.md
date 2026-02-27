# Animation Architecture Audit & Rebuild Plan
**Date:** 2026-02-27

## The Problem
The glitches observed on the mobile view of the deployed website during scrolling and transition points are caused by architectural conflicts between CSS layout engines, mobile browser behavior, and Framer Motion's calculation cycles. 

### Key Audit Findings:
1. **The Conflict of `snap-start`, `sticky`, and `useScroll`**: In `components/ui/sticky-features.tsx`, CSS scroll snapping (`snap-type`, `snap-start`) is competing directly with Framer Motion's `useScroll`. When the browser snaps to a section, it forces a smooth scroll animation natively. Framer Motion simultaneously tries to read the scroll position to animate the scale and opacity. This race condition creates severe judder.
2. **Dynamic Viewport Heights (`100dvh`)**: Mobile browsers show and hide the address bar on scroll. This changes the viewport height, causing `100dvh` to recalculate. When the container resizes mid-scroll, Framer Motion's `offset: ['start end', 'start start']` recalculates its bounds on the fly, causing sudden jumps in the animation.
3. **Non-Compositor Animations**: In `StickyFeatures`, the `top` property is animated via an inline style: `top: calc(-10vh + ${i * 25}px)`. The `top` property runs on the CPU and triggers expensive layout recalculations on every frame. This is a primary source of lag on low-end mobile devices. 
4. **Spring Physics Overload**: In `components/ui/animations.tsx`, `Parallax` wraps `useTransform` with `useSpring`. On mobile, calculating spring physics for scroll-linked animations often lags behind the user's thumb, making the site feel "heavy" or out of sync with the scroll wheel.

## First Principles of Performant Scroll Animations
To build it right for tomorrow, we must adhere to these rules:

1. **Animate Compositor Properties Only**: Stick strictly to `opacity` and `transform` (`scale`, `x`, `y`). Never animate `width`, `height`, `top`, `left`, or `margin` on scroll. The GPU handles transforms, leaving the main thread free.
2. **Decouple the "Track" from the "Visuals"**: For sticky stacking cards, the modern pattern is a "Scroll Track". You create a tall container (e.g., `400vh` tall) to give the user room to scroll. Inside it, a single `position: sticky; top: 0; height: 100vh; overflow: hidden;` container holds the visual elements absolute-positioned. Framer Motion tracks the progress of the `400vh` track container (0 to 1) and drives the transforms of the absolute cards inside the sticky container. This avoids fighting with the DOM layout engine.
3. **Remove Scroll Snapping**: If you want a smooth, narrative-driven scroll animation, let the user's scroll wheel control the timeline linearly without the browser snapping and jerking the position.
4. **Hardware Acceleration**: Explicitly use `will-change: transform` on elements that undergo continuous scroll transformation to promote them to their own render layer.

## Implementation Plan

### Phase 1: Refactor `StickyFeatures` (The Rebuild)
Instead of patching the existing CSS snap/sticky hybrid, we will rewrite the component using the "Scroll Track" pattern.
- **Track Container**: Implement a parent `<div />` with a height relative to the number of features (e.g., `height: ${features.length * 100}vh`).
- **Sticky Viewport**: A child `<div className="sticky top-0 h-screen overflow-hidden" />`.
- **Absolute Cards**: The cards are rendered `absolute inset-0` inside the sticky div.
- **Single Source of Truth**: We use a single `useScroll` attached to the track container. We map the `scrollYProgress` (0 to 1) to the individual cards.
  - Card 0 starts at `y: 0`, scales down as progress continues.
  - Card 1 maps from `y: '100%'` to `0` based on specific progress thresholds, scaling down after it lands.
- **Remove CSS Snap**: All `snap-start` and `snap-type` classes will be stripped.

### Phase 2: Audit & Optimize `animations.tsx`
- **Optimize Parallax**: Remove the `useSpring` wrapper from `Parallax` or drastically increase its stiffness/damping so it doesn't drag on mobile. Use pure `y` transforms.
- **Hardware Acceleration**: Ensure `FadeIn` and `ScaleReveal` have `will-change: transform, opacity` added to their styles.

### Phase 3: Validation
- Verify the scrolling is buttery smooth on mobile device simulators (375px width), relying solely on the GPU without layout recalculations.
