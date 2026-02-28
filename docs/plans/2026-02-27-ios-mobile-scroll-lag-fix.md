# Research & Implementation Plan: iOS Mobile View Scroll Lag

**Date:** 2026-02-27
**Issue:** When changing scroll direction on iOS mobile browsers (Safari/Chrome), a lag/jerky effect occurs due to the native navigation bar collapsing/expanding.

## 1. Root Cause Analysis

The "jerky feel" when changing scroll directions on iOS is a well-known layout thrashing issue caused by the intersection of native browser UI behavior, CSS units, and scroll-linked JavaScript calculations:

### A. The Native Navigation Bar (Address Bar) Resize Thrashing
- **The Trigger:** When a user scrolls down on iOS Safari, the bottom navigation/address bar hides. When they scroll up, it reappears. 
- **The Layout Shift:** This physical change in screen real estate fires a `resize` event and changes the value of `100vh` and `100dvh` (Dynamic Viewport Height).
- **The Lag:** Framer Motion (via `useScroll` and `offset` mappings) and CSS layout engines are forced to recalculate dimensions, bounds, and layout positions mid-scroll. The GPU has to hand control back to the CPU to calculate the new DOM heights, causing a massive frame drop or "jerk".

### B. The `scroll-smooth` Conflict
- The `app/layout.tsx` currently has `<html lang="en" className="scroll-smooth">`.
- Native CSS smooth scrolling often battles iOS's native momentum scrolling (`-webkit-overflow-scrolling: touch`), particularly when the browser UI shifts or when CSS Scroll Snapping (`snap-start`) is present. This creates a friction state where the browser hesitates to decide if it should animate the scroll or pass it to the user's thumb.

### C. Rubber-Banding Overscroll
- iOS's signature "rubber-band" bounce at the top and bottom of containers can interfere with `position: sticky` and scroll listeners, abruptly altering the scroll delta.

---

## 2. Proposed Fixes & Implementation Plan

To eliminate the iOS scroll direction lag, we must decouple the viewport resize logic from our animations and lock down the CSS behavior.

### Phase 1: Viewport Stabilization (CSS)
1. **Remove Smooth Scrolling on Mobile:**
   - Update `app/layout.tsx` to conditionally apply smooth scrolling, or remove `<html className="scroll-smooth">` if it's primarily causing friction. A better approach is `md:scroll-smooth` so mobile relies purely on native momentum.
2. **Implement Small Viewport Units (`svh`):**
   - Replace dynamic height units (`100dvh` or `100vh`) with `100svh` (Small Viewport Height) on containers holding sticky animations (like `StickyFeatures`). 
   - `100svh` uses the smallest possible viewport height (when the navigation bar is *visible*). This prevents the element from physically changing size and triggering Framer Motion recalculations when the user changes scroll direction.
3. **Control Overscroll Behavior:**
   - Apply `overscroll-none` (Tailwind for `overscroll-behavior: none`) to the body or specific scroll tracks to prevent the rubber-band bounce from misaligning the scroll-linked transforms.

### Phase 2: Component Architecture Updates (React / Framer Motion)
1. **Execute the Mobile Animation Rebuild:**
   - Align with the existing `2026-02-27-mobile-animation-rebuild.md` plan to strip out CSS `snap-start` and `snap-type` classes from `components/ui/sticky-features.tsx`. The combination of CSS Scroll Snap + `100dvh` + changing scroll direction on iOS is the primary cause of the total scroll freeze.
2. **Debounce Resize / Lock Heights on Mount:**
   - If Framer Motion must track a large container, we ensure the parent container is set to a relative, fixed multiplier (e.g., `height: 400svh`) instead of a dynamic one, ensuring its height is rock solid regardless of the address bar state.

---

## 3. Immediate Action Items

If approved, the AI Developer will execute the following surgical updates:

1. **`app/layout.tsx`**: Change `className="scroll-smooth"` to `className="md:scroll-smooth"`.
2. **`components/ui/sticky-features.tsx`**: 
   - Change instances of `h-[100dvh]` to `h-[100svh]`.
   - Remove `snap-start` classes to decouple native scrolling from Framer calculations.
3. **`app/globals.css`**: Add `body { overscroll-behavior-y: none; }` (optional, for testing if the above two don't fully resolve the momentum lag).

*Review this plan and provide permission to proceed with the Phase 1 and Phase 2 implementations.*