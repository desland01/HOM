'use client'

import Link from 'next/link'
import { FadeIn, TextReveal, ScaleReveal, Magnetic } from '@/components/ui/animations'

type Territory = {
  city: string
  state: string
  status: 'claimed' | 'open'
}

const TERRITORIES: Territory[] = [
  { city: 'Austin', state: 'TX', status: 'claimed' },
  { city: 'Denver', state: 'CO', status: 'claimed' },
  { city: 'Tampa', state: 'FL', status: 'open' },
  { city: 'Portland', state: 'OR', status: 'open' },
  { city: 'Nashville', state: 'TN', status: 'claimed' },
  { city: 'Charlotte', state: 'NC', status: 'claimed' },
  { city: 'Atlanta', state: 'GA', status: 'open' },
  { city: 'Phoenix', state: 'AZ', status: 'claimed' },
  { city: 'Dallas', state: 'TX', status: 'open' },
  { city: 'Raleigh', state: 'NC', status: 'claimed' },
  { city: 'Seattle', state: 'WA', status: 'open' },
  { city: 'San Diego', state: 'CA', status: 'claimed' },
  { city: 'Columbus', state: 'OH', status: 'claimed' },
  { city: 'Chicago', state: 'IL', status: 'open' },
  { city: 'Jacksonville', state: 'FL', status: 'claimed' },
  { city: 'Minneapolis', state: 'MN', status: 'claimed' },
  { city: 'Boston', state: 'MA', status: 'open' },
  { city: 'Salt Lake City', state: 'UT', status: 'claimed' },
]

export function StoryUrgency() {
  return (
    <section className="min-h-[100dvh] flex items-center bg-brand-charcoal text-brand-ivory px-6 sm:px-12 py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto w-full">
        <TextReveal
          text="ONE COMPANY PER TERRITORY. YOUR COMPETITOR WILL FIND US EVENTUALLY."
          className="text-4xl sm:text-6xl lg:text-7xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase max-w-[20ch] mb-16"
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mb-16 max-w-4xl">
          {TERRITORIES.map((territory, index) => (
            <ScaleReveal key={`${territory.city}-${territory.state}`} delay={index * 0.04}>
              {territory.status === 'claimed' ? (
                <div className="p-4 bg-brand-charcoal border border-brand-ivory/10 opacity-40">
                  <div className="text-xs font-sora font-extrabold uppercase tracking-wider text-brand-ivory/50">
                    {territory.city}, {territory.state}
                  </div>
                  <div className="text-[10px] text-brand-ivory/30 uppercase tracking-widest mt-2">
                    CLAIMED
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-brand-charcoal border-2 border-brand-mustard/50">
                  <div className="text-xs font-sora font-extrabold uppercase tracking-wider text-brand-mustard">
                    {territory.city}, {territory.state}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="relative inline-flex h-2 w-2">
                      <span className="absolute inset-0 h-2 w-2 rounded-full bg-brand-mustard animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-mustard" />
                    </span>
                    <span className="text-[10px] text-brand-mustard uppercase tracking-widest">
                      OPEN
                    </span>
                  </div>
                </div>
              )}
            </ScaleReveal>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="text-2xl sm:text-3xl font-sora font-extrabold text-brand-ivory/50 mb-12">
            That is not a threat. It is math.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <Magnetic>
            <Link
              href="/get-started/build-your-plan"
              className="inline-flex items-center justify-center px-10 py-5 min-h-[48px] bg-brand-mustard text-brand-charcoal font-sora font-extrabold uppercase tracking-widest text-sm hover:bg-brand-mustard/90 transition-colors"
              aria-label="Check if your city is open for our painting contractor marketing service"
            >
              Check If Your City Is Open
            </Link>
          </Magnetic>
        </FadeIn>
      </div>
    </section>
  )
}
