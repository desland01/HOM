'use client'

import Link from 'next/link'
import { FadeIn, TextReveal, Parallax, Magnetic } from '@/components/ui/animations'

export function StoryHero() {
  return (
    <section className="relative min-h-[100dvh] bg-brand-charcoal text-brand-ivory flex flex-col justify-center overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--brand-mustard)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 relative z-10">
        {/* Mustard label badge */}
        <FadeIn className="mb-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-mustard/30 bg-brand-mustard/5 text-brand-mustard text-xs sm:text-sm font-sora font-extrabold uppercase tracking-[0.3em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mustard opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mustard"></span>
            </span>
            THE 6-MONTH HEAD START
          </div>
        </FadeIn>

        {/* Headline */}
        <div className="max-w-[18ch] mb-8">
          <TextReveal
            text="YOUR COMPETITORS ARE STILL USING 10-YEAR-OLD MARKETING."
            className="text-4xl sm:text-6xl lg:text-8xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase"
          />
        </div>

        {/* Subhead */}
        <FadeIn delay={0.3} className="mb-10">
          <p className="text-xl sm:text-2xl text-brand-ivory/70 max-w-2xl font-medium">
            You are looking at a company that builds in 14 days what agencies take 6 months to deliver. And your local market is wide open.
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <Magnetic strength={10}>
            <Link
              href="/get-started/build-your-plan"
              className="group inline-flex items-center justify-center px-10 py-5 min-h-[48px] bg-brand-mustard text-brand-charcoal font-sora font-extrabold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-4">
                See If Your Territory Is Open
                <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">{'\u2192'}</span>
              </span>
            </Link>
          </Magnetic>
        </FadeIn>
      </div>

      {/* Parallax background element */}
      <Parallax offset={60} className="absolute bottom-0 right-0 pointer-events-none select-none">
        <span className="text-[20rem] sm:text-[30rem] font-sora font-extrabold leading-none opacity-[0.04] text-brand-ivory">
          2016
        </span>
      </Parallax>
    </section>
  )
}
