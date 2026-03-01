'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FadeIn, TextReveal, ScaleReveal } from '@/components/ui/animations'

const TIERS = [
  {
    id: 'foundation',
    name: 'Local Foundation',
    price: '$2,250',
    desc: 'Best for single-city dominance.',
    subject: 'Pilot Application - Tier 1 Foundation'
  },
  {
    id: 'expansion',
    name: 'Territory Expansion',
    price: '$3,400',
    desc: 'Capture 4 surrounding suburbs.',
    subject: 'Pilot Application - Tier 2 Expansion',
    isPopular: true
  },
  {
    id: 'takeover',
    name: 'Enterprise Takeover',
    price: '$5,250',
    desc: 'Total metro area saturation.',
    subject: 'Pilot Application - Tier 3 Takeover'
  }
]

export default function GetStartedFunnel() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)

  const activeTier = TIERS.find(t => t.id === selectedTier)
  const mailtoLink = activeTier 
    ? `mailto:hello@homeownermarketers.com?subject=${encodeURIComponent(activeTier.subject)}&body=${encodeURIComponent("I'm interested in the " + activeTier.name + " package. My territory is: [Insert Your City]")}`
    : '#'

  return (
    <main className="min-h-[100svh] bg-brand-charcoal selection:bg-brand-mustard selection:text-brand-charcoal overflow-clip text-brand-ivory font-medium">
      
      {/* MINIMAL HEADER */}
      <nav className="w-full p-6 sm:px-12 flex justify-center border-b border-brand-ivory/10 bg-brand-charcoal/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="pointer-events-auto">
          <Image
            src="/HM-Logo.png"
            alt="Homeowner Marketers"
            width={200}
            height={60}
            priority
            className="h-8 sm:h-10 w-auto object-contain invert grayscale brightness-200 opacity-80 hover:opacity-100 transition-opacity"
          />
        </Link>
      </nav>

      <article className="max-w-[1000px] mx-auto px-6 py-20 sm:py-32">
        
        {/* THE HOOK */}
        <div className="flex flex-col items-center text-center mb-24 lg:mb-32">
          <FadeIn className="text-brand-mustard font-sora font-extrabold tracking-[0.4em] uppercase text-xs sm:text-sm mb-8">
            Confidential Territory Invite
          </FadeIn>
          <div className="max-w-[15ch]">
            <TextReveal 
              text="YOUR COMPETITION IS PROBABLY READING THIS TOO." 
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase mb-8"
            />
          </div>
        </div>

        {/* THE STORY (IMPLIED HERO JOURNEY) */}
        <div className="max-w-3xl mx-auto space-y-12 lg:space-y-20 mb-32">
          
          <FadeIn className="space-y-6">
            <p className="text-xl sm:text-2xl font-medium leading-relaxed text-brand-ivory/90 font-sora">
              The jobs you take on define your reputation. You've built a business on quality, sweat, and doing the job right when others cut corners.
            </p>
            <p className="text-lg sm:text-xl text-brand-ivory/60 leading-relaxed">
              But while you were mastering your trade, the world changed. The "old way" of getting leads—relying on a 10-year-old marketing playbook and hoping the phone rings—has hit an invisible wall. You're paying bloated agencies $1,500 a month to sit in meetings while your digital presence gathers dust. They call it "SEO." We call it an anchor.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-6 pt-12 border-t border-brand-ivory/10">
            <h3 className="text-2xl sm:text-3xl font-sora font-extrabold text-white uppercase tracking-tight">The Generational Shift</h3>
            <p className="text-lg sm:text-xl text-brand-ivory/80 leading-relaxed">
              In the AI labs, things move in dog years. A "generational transition" used to take a decade; now it takes 90 days. We have a 6-month head start on the entire industry because we deploy tech the moment it leaves the lab.
            </p>
            <p className="text-lg sm:text-xl text-brand-ivory/80 leading-relaxed font-bold text-brand-mustard">
              In AI-time, 6 months is a decade. 
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-6 pt-12 border-t border-brand-ivory/10">
            <h3 className="text-2xl sm:text-3xl font-sora font-extrabold text-white uppercase tracking-tight">No Bloat. Just Infrastructure.</h3>
            <p className="text-lg sm:text-xl text-brand-ivory/80 leading-relaxed">
              Our model was built natively on this new technology. We don't have a 10-person chain of command or junior copywriters waiting for approval. Our agentic development practices allow us to turn the work of one developer into twenty.
            </p>
            <p className="text-lg sm:text-xl text-brand-ivory/80 leading-relaxed">
              We build entire metropolitan SEO architectures in days, not months. While your competition is still asking ChatGPT for relationship advice, we're deploying proprietary AI to write 50 pages and build advanced data files for every endpoint.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="space-y-6 pt-12 border-t border-brand-ivory/10 bg-brand-mustard/5 p-8 -mx-8 rounded-2xl border border-brand-mustard/20">
            <h3 className="text-2xl sm:text-3xl font-sora font-extrabold text-brand-mustard uppercase tracking-tight">The DeLorean Is Idling</h3>
            <p className="text-lg sm:text-xl text-brand-ivory/90 leading-relaxed">
              This is your opportunity to leave your competition stuck in the 2010s while you zoom off to the future. We've built the engine; you just need to turn the key.
            </p>
            <p className="text-lg sm:text-xl text-brand-ivory/90 font-bold leading-relaxed">
              But there's a strict limit: We only take ONE painting company per territory. 
            </p>
            <p className="text-lg sm:text-xl text-brand-ivory/60 leading-relaxed">
              Once your city is locked, it's locked. We refuse to compete against our own clients. And since we are fully transparent about our methodology, it's only a matter of time before your biggest competitor finds our playbook.
            </p>
          </FadeIn>

        </div>

        {/* CLICK-FUNNEL STEP: PACKAGE SELECTION */}
        <section id="selection" className="py-24 border-t border-brand-ivory/10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl sm:text-5xl font-sora font-extrabold text-white uppercase tracking-tight mb-4">Choose Your Velocity</h2>
              <p className="text-lg text-brand-ivory/50">Select the build tier you want to secure for your territory.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {TIERS.map((tier, i) => (
              <ScaleReveal key={tier.id} delay={i * 0.1}>
                <button
                  onClick={() => setSelectedTier(tier.id)}
                  className={`w-full text-left p-8 border-2 transition-all duration-500 relative group
                    ${selectedTier === tier.id 
                      ? 'border-brand-mustard bg-brand-mustard/10 shadow-[0_0_30px_rgba(201,162,39,0.2)]' 
                      : 'border-brand-ivory/10 bg-white/5 hover:border-brand-ivory/30'}`}
                >
                  {tier.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-mustard text-brand-charcoal text-[10px] font-sora font-extrabold uppercase tracking-widest">
                      Most Scalable
                    </div>
                  )}
                  <div className={`text-xs font-sora font-extrabold uppercase tracking-widest mb-4 transition-colors ${selectedTier === tier.id ? 'text-brand-mustard' : 'text-brand-ivory/40'}`}>
                    Tier 0{i + 1}
                  </div>
                  <h4 className="text-xl font-sora font-extrabold uppercase mb-2">{tier.name}</h4>
                  <div className="text-3xl font-sora font-extrabold text-brand-mustard mb-4">{tier.price}</div>
                  <p className="text-sm text-brand-ivory/60 leading-relaxed">{tier.desc}</p>
                  
                  {/* Radio indicator */}
                  <div className={`mt-8 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedTier === tier.id ? 'border-brand-mustard' : 'border-brand-ivory/20 group-hover:border-brand-ivory/40'}`}>
                    {selectedTier === tier.id && <div className="w-2.5 h-2.5 rounded-full bg-brand-mustard shadow-[0_0_10px_var(--brand-mustard)]" />}
                  </div>
                </button>
              </ScaleReveal>
            ))}
          </div>

          {/* DYNAMIC CTA */}
          <div className="flex flex-col items-center">
            <AnimatePresence mode="wait">
              {selectedTier ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full flex flex-col items-center"
                >
                  <Link 
                    href={mailtoLink}
                    className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-sora font-extrabold text-brand-charcoal bg-brand-mustard transition-all duration-300 ease-out hover:scale-[1.05] active:scale-95 shadow-[0_0_50px_rgba(201,162,39,0.4)] text-xl uppercase tracking-widest w-full sm:w-auto"
                  >
                    <span className="relative z-10 flex items-center gap-4">
                      Lock In My Territory <span className="text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </span>
                  </Link>
                  <p className="text-brand-ivory/40 text-xs mt-6 font-medium uppercase tracking-[0.2em]">
                    Btw... we built this entire funnel in 20 minutes. Are you getting in?
                  </p>
                </motion.div>
              ) : (
                <div className="h-[104px] flex items-center">
                  <p className="text-brand-ivory/30 font-sora font-extrabold uppercase tracking-widest animate-pulse">
                    Select a tier to continue
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </article>
    </main>
  )
}
