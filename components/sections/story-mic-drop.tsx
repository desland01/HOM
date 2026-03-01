'use client'

import Link from 'next/link'
import { FadeIn, TextReveal, Magnetic } from '@/components/ui/animations'

export function StoryMicDrop() {
  return (
    <section className="py-32 lg:py-48 px-6 sm:px-12 bg-brand-charcoal text-brand-ivory">
      <div className="max-w-[900px] mx-auto">
        {/* Opening hook */}
        <FadeIn delay={0}>
          <p className="text-xl sm:text-2xl text-brand-mustard font-sora font-bold mb-12">
            By the way...
          </p>
        </FadeIn>

        {/* The reveal */}
        <FadeIn delay={0.15}>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-sora font-extrabold leading-snug mb-8">
            We built this entire page -- the copy, the design, the funnel you are about to enter -- in 20 minutes.
          </p>
        </FadeIn>

        {/* The implication */}
        <FadeIn delay={0.3}>
          <p className="text-xl sm:text-2xl text-brand-ivory/50 font-medium mb-16">
            That is what 6 months ahead looks like.
          </p>
        </FadeIn>

        {/* Mic drop headline */}
        <FadeIn delay={0.45} className="mb-16">
          <TextReveal
            text="ARE YOU GETTING IN?"
            className="text-4xl sm:text-6xl lg:text-7xl font-sora font-extrabold tracking-tighter-extreme uppercase text-brand-mustard"
          />
        </FadeIn>

        {/* Oversized CTA */}
        <FadeIn delay={0.6}>
          <Magnetic strength={10}>
            <Link
              href="/get-started/build-your-plan"
              className="group inline-flex items-center justify-center gap-4 w-full sm:w-auto px-12 py-6 sm:px-16 sm:py-8 min-h-[48px] bg-brand-mustard text-brand-charcoal font-sora font-extrabold text-xl sm:text-2xl uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-2xl"
            >
              BUILD YOUR PLAN
              <span
                className="inline-block transition-transform duration-300 group-hover:translate-x-2"
                aria-hidden="true"
              >
                {'\u2192'}
              </span>
            </Link>
          </Magnetic>
        </FadeIn>

        {/* Reassurance line */}
        <FadeIn delay={0.8}>
          <p className="text-sm text-brand-ivory/30 font-medium mt-6 text-center sm:text-left">
            No commitment. No credit card. Just answers.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
