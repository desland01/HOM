'use client'

import { FadeIn, TextReveal, ScaleReveal } from '@/components/ui/animations'

interface PlanStep {
  number: string
  title: string
  description: string
}

const planSteps: PlanStep[] = [
  {
    number: '01',
    title: 'Check Your Territory',
    description: 'Enter your city. We show you if your exclusive spot is still open. One painter per area -- that is the rule.',
  },
  {
    number: '02',
    title: 'We Build Your Machine',
    description: 'In 14 days, you get a premium website, local SEO structure, and a lead engine built to attract homeowners who pay what you are worth.',
  },
  {
    number: '03',
    title: 'Your Phone Starts Ringing',
    description: 'Within 90 days, you are getting estimate requests from homeowners searching for exactly what you do. If not, you walk away.',
  },
]

export function StoryPlan() {
  return (
    <section className="py-24 lg:py-40 px-6 sm:px-12 bg-brand-ivory">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">
            The Path Forward
          </FadeIn>
          <TextReveal
            text="THREE STEPS. ZERO RISK."
            className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase justify-center"
          />
        </div>

        {/* Step cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {planSteps.map((step, index) => (
            <ScaleReveal key={step.number} delay={index * 0.1}>
              <div className="p-10 lg:p-12 border-2 border-brand-charcoal/5 bg-white h-full">
                <span className="text-8xl lg:text-9xl font-sora font-extrabold text-brand-mustard/10 leading-none mb-4 block select-none">
                  {step.number}
                </span>
                <h3 className="font-sora font-extrabold uppercase text-xl sm:text-2xl tracking-tight mb-4 text-brand-charcoal">
                  {step.title}
                </h3>
                <p className="text-brand-charcoal/60 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScaleReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
