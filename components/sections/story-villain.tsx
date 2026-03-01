'use client'

import { FadeIn, TextReveal, ScaleReveal } from '@/components/ui/animations'

interface VillainCard {
  label: string
  title: string
  body: string
}

const villainCards: VillainCard[] = [
  {
    label: 'WHAT YOU SEE',
    title: 'You Are Invisible on Google',
    body: 'You do 50k in revenue per job, but when someone in your city searches "house painter near me", they find the guy who started last year. Your work is better. Your online presence says otherwise.',
  },
  {
    label: 'WHAT YOU FEEL',
    title: 'You Feel Like a Secret',
    body: 'You have done hundreds of jobs. Your craftsmanship speaks for itself -- to the people who already know you. But every morning you wake up wondering where the next estimate is coming from. That is not a business. That is a trap.',
  },
  {
    label: 'WHAT IS WRONG',
    title: 'Great Craftsmen Deserve to Be Found',
    body: 'The best painters in your city should not be losing jobs to hacks with better Google rankings. Your skill took years to build. Your online presence should reflect that.',
  },
]

export function StoryVillain() {
  return (
    <section className="py-24 lg:py-40 px-6 sm:px-12 bg-white relative">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 lg:items-start">
        {/* Sticky headline side */}
        <div className="lg:w-5/12 lg:sticky lg:top-40 h-fit">
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">
            The Real Enemy
          </FadeIn>
          <TextReveal
            text="IT IS NOT YOUR COMPETITION. IT IS YOUR INVISIBILITY."
            className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase"
          />
        </div>

        {/* Scrolling cards side */}
        <div className="lg:w-7/12 flex flex-col gap-8">
          {villainCards.map((card, index) => (
            <ScaleReveal key={card.label} delay={index * 0.1}>
              <div className="p-8 sm:p-10 border-2 border-brand-charcoal/5 bg-brand-ivory transition">
                <span className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-4 block">
                  {card.label}
                </span>
                <h3 className="text-xl sm:text-2xl font-sora font-extrabold uppercase tracking-tight mb-4 text-brand-charcoal">
                  {card.title}
                </h3>
                <p className="text-brand-charcoal/60 font-medium leading-relaxed">
                  {card.body}
                </p>
              </div>
            </ScaleReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
