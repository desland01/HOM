'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import { StoryHero } from '@/components/sections/story-hero'
import { StoryTrustBar } from '@/components/sections/story-trust-bar'
import { StoryVillain } from '@/components/sections/story-villain'
import { StoryEpiphany } from '@/components/sections/story-epiphany'
import { StoryPlan } from '@/components/sections/story-plan'
import { PortfolioViewports } from '@/components/sections/portfolio-viewports'
import { StoryUrgency } from '@/components/sections/story-urgency'
import { StoryMicDrop } from '@/components/sections/story-mic-drop'

export default function GetStartedPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-[100svh] bg-brand-ivory selection:bg-brand-mustard selection:text-brand-charcoal overflow-clip">
      {/* Sections in scroll order */}
      <StoryHero />
      <StoryTrustBar />
      <StoryVillain />
      <StoryEpiphany />
      <StoryPlan />

      {/* Social proof -- reuse existing component */}
      <PortfolioViewports />

      {/* Stat bar between portfolio and urgency */}
      <section className="py-12 lg:py-16 px-6 sm:px-12 bg-brand-charcoal text-brand-ivory border-t border-brand-ivory/10">
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-sora font-extrabold tracking-tighter-extreme">
            <span className="text-brand-mustard">14</span> new estimate requests per month
          </p>
          <p className="text-sm sm:text-base text-brand-ivory/40 font-sora font-extrabold uppercase tracking-widest mt-4">
            Average client result within 90 days
          </p>
        </div>
      </section>

      <StoryUrgency />
      <StoryMicDrop />

      {/* MOBILE CRO: FIXED BOTTOM CTA */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 z-50 lg:hidden"
          >
            <Link
              href="/get-started/build-your-plan"
              className="flex items-center justify-center w-full py-5 min-h-[48px] bg-brand-mustard text-brand-charcoal font-sora font-extrabold uppercase tracking-widest shadow-2xl active:scale-[0.98] transition-transform"
            >
              Check Territory Availability
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
