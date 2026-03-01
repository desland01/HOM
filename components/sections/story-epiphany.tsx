'use client'

import { FadeIn } from '@/components/ui/animations'

export function StoryEpiphany() {
  return (
    <section className="py-32 lg:py-48 px-6 sm:px-12 bg-brand-charcoal text-brand-ivory relative overflow-hidden">
      <div className="bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] absolute inset-0 pointer-events-none" />

      <div className="max-w-[900px] mx-auto relative z-10">
        <div className="relative">
          <span className="text-[8rem] sm:text-[12rem] font-sora font-extrabold text-brand-mustard/10 leading-none absolute -top-8 -left-4 pointer-events-none select-none" aria-hidden="true">
            &quot;
          </span>

          <FadeIn delay={0}>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-sora font-bold leading-snug mb-12 sm:mb-16">
              In 2023, the AI labs started releasing tools that changed everything. Not chatbots. Real infrastructure. The kind that lets one developer do the work of twenty.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-sora font-bold leading-snug mb-12 sm:mb-16">
              We did not see a trend. We saw an unfair advantage.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl sm:text-2xl text-brand-ivory/70 font-medium leading-relaxed mb-12 sm:mb-16">
              While bloated agencies were still sending you 47-page proposals and scheduling &apos;alignment calls,&apos; we were deploying technology straight from the labs. Building sites in days, not months. Running SEO engines that adapt in real time.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-sora font-extrabold text-brand-mustard mb-16 sm:mb-20">
              We do not need 10 people to approve a color change. We move like a crew.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-xl text-brand-ivory/50">
              That is the 6-month head start. And you are looking at it right now.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
