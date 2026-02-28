'use client'

import { useState, useEffect, useRef, forwardRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FadeIn, TextReveal, Parallax, Magnetic, ScaleReveal } from '@/components/ui/animations'
import { StickyFeatures } from '@/components/ui/sticky-features'
import { ComparisonTable } from '@/components/sections/comparison-table'
import { Guarantees } from '@/components/sections/guarantees'
import { AddOnsAndBundles } from '@/components/sections/add-ons-and-bundles'
import { PortfolioViewports } from '@/components/sections/portfolio-viewports'

export default function Home() {
  const [showBanner, setShowBanner] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-[100dvh] bg-brand-ivory selection:bg-brand-mustard selection:text-brand-charcoal overflow-clip pb-24 lg:pb-0">
      {/* STICKY TOP BANNER */}
      <AnimatePresence>
        {showBanner && (
          <motion.div 
            initial={{ y: -50 }} animate={{ y: 0 }} exit={{ y: -50 }}
            className="fixed top-0 left-0 right-0 h-14 bg-brand-mustard flex items-center justify-center z-[100] px-12 border-b border-brand-charcoal/10"
          >
            <span className="text-brand-charcoal font-sora font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase text-center">
              HALF OFF YOUR BUILD -- 5 PAINTER SPOTS LEFT
            </span>
            <button 
              onClick={() => setShowBanner(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-brand-charcoal text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity"
              aria-label="Close banner"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERSIZED HERO */}
      <section className={`relative ${showBanner ? 'pt-[72px]' : 'pt-6'} pb-20 ${showBanner ? 'lg:pt-24' : 'lg:pt-16'} lg:pb-6 px-6 sm:px-12 flex flex-col items-start overflow-clip border-b border-brand-charcoal/5 transition-[padding] duration-300`}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--brand-mustard)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] pointer-events-none" />
        
        <div className="w-full max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col items-start">
            <FadeIn delay={0.1} className="flex items-center gap-4 mb-4 sm:mb-6">
              <Image
                src="/HM-Logo.png"
                alt="Homeowner Marketers"
                width={240}
                height={80}
                priority
                sizes="(max-width: 640px) 48px, 80px"
                className="h-12 sm:h-20 w-auto object-contain invert"
              />
              <div className="h-6 w-px bg-brand-charcoal/10 hidden sm:block" />
              <div className="text-xs sm:text-sm font-sora font-extrabold tracking-[0.3em] uppercase text-brand-charcoal/40 hidden sm:block">
                Premium Websites for Painters
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="flex flex-col items-start gap-2 mb-3">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-mustard/30 bg-brand-mustard/5 text-brand-mustard text-xs sm:text-sm font-sora font-extrabold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mustard opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mustard"></span>
                </span>
                Only 5 Pilot Spots Open
              </div>
            </FadeIn>

            <TextReveal 
              text="STOP LOOKING CHEAP. START CHARGING MORE." 
              className="text-4xl sm:text-7xl lg:text-7xl xl:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.85] tracking-tighter-extreme mb-4 lg:mb-4 max-w-[15ch] lg:max-w-[25ch] text-left" 
            />
            
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 w-full items-center">
              <FadeIn delay={0} className="col-span-2 lg:col-span-6">
                <p className="text-lg sm:text-xl lg:text-2xl text-brand-charcoal/70 leading-relaxed max-w-2xl font-medium mb-4">
                  Your website makes you look like every other painter in town. That is why you keep getting price shoppers. We build you a premium site in <span className="text-brand-charcoal font-extrabold">14 days</span>, prove it pulls quality leads for <span className="text-brand-charcoal font-extrabold">90 days</span>, or you walk away with zero risk.
                </p>
                <Magnetic strength={10}>
                  <Link href="#tiers" className="group relative inline-flex items-center justify-center px-8 py-4 lg:px-10 lg:py-5 overflow-hidden font-sora font-extrabold text-brand-ivory bg-brand-charcoal rounded-none transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95 shadow-2xl w-full sm:w-auto text-base lg:text-lg uppercase tracking-widest">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-charcoal via-brand-charcoal to-brand-mustard opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 flex items-center gap-4">
                      Check Availability <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </span>
                  </Link>
                </Magnetic>
              </FadeIn>

              <FadeIn delay={0.6} className="col-span-2 lg:col-span-6 flex justify-start lg:justify-end">
                <motion.div 
                  className="relative group perspective-1000"
                  whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-brand-charcoal/20 blur-xl translate-y-8 scale-90 group-hover:opacity-100 transition-opacity opacity-0 duration-500"></div>
                  <div className="absolute inset-0 bg-brand-mustard translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                  <motion.div 
                    className="relative flex flex-col items-center justify-center bg-brand-mustard text-brand-charcoal px-6 py-3 sm:px-10 sm:py-8 border-2 border-brand-charcoal rotate-[-2deg] group-hover:rotate-0 transition-all duration-300 shadow-[0_20px_50px_rgba(201,162,39,0.2)]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div 
                      className="text-4xl sm:text-6xl lg:text-7xl font-sora font-extrabold leading-none tracking-tighter-extreme"
                      style={{ transform: "translateZ(50px)" }}
                    >
                      50% OFF
                    </motion.div>
                    <div className="h-px w-full bg-brand-charcoal/20 my-1 sm:my-4" style={{ transform: "translateZ(30px)" }}></div>
                    <div className="text-sm sm:text-lg font-sora font-extrabold tracking-[0.2em] uppercase" style={{ transform: "translateZ(20px)" }}>
                      First 5 Painters Only
                    </div>
                  </motion.div>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* INFINITE MARQUEE STRIP */}
      <section className="py-6 bg-brand-charcoal text-brand-mustard border-b-4 border-brand-mustard overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex shrink-0 gap-12 text-xl font-sora font-extrabold uppercase tracking-widest items-center">
          <span className="shrink-0">Built in 14 Days</span> <span className="shrink-0 text-brand-ivory/20">•</span>
          <span className="shrink-0">5 Spots Left</span> <span className="shrink-0 text-brand-ivory/20">•</span>
          <span className="shrink-0">90-Day Proof or Walk Away</span> <span className="shrink-0 text-brand-ivory/20">•</span>
          <span className="shrink-0">Attract Higher-Paying Jobs</span> <span className="shrink-0 text-brand-ivory/20">•</span>
        </div>
        <div className="animate-marquee flex shrink-0 gap-12 text-xl font-sora font-extrabold uppercase tracking-widest items-center" aria-hidden="true">
          <span className="shrink-0">Built in 14 Days</span> <span className="shrink-0 text-brand-ivory/20">•</span>
          <span className="shrink-0">5 Spots Left</span> <span className="shrink-0 text-brand-ivory/20">•</span>
          <span className="shrink-0">90-Day Proof or Walk Away</span> <span className="shrink-0 text-brand-ivory/20">•</span>
          <span className="shrink-0">Attract Higher-Paying Jobs</span> <span className="shrink-0 text-brand-ivory/20">•</span>
        </div>
      </section>

      {/* THE PROBLEM — STICKY SCROLL */}
      <section className="py-24 lg:py-40 px-6 sm:px-12 bg-white relative">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 lg:items-start">
          <div className="lg:w-5/12 lg:sticky lg:top-40 h-fit">
            <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">The Problem</FadeIn>
            <TextReveal 
              text="YOUR WEBSITE IS COSTING YOU MONEY." 
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase mb-8"
            />
            <FadeIn className="text-xl text-brand-charcoal/50 font-medium">
              Right now, your online presence is pushing away the $15k+ jobs and attracting the "$500 to paint my shed" crowd. Here is why.
            </FadeIn>
          </div>

          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-charcoal/5 border border-brand-charcoal/5">
            <ProblemCardsList />
          </div>
        </div>
      </section>

      {/* THE SOLUTION — STICKY STACKING CARDS */}
      <section className="py-24 lg:py-40 bg-brand-charcoal text-brand-ivory relative overflow-visible">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 mb-24 lg:mb-40 relative z-10 text-center">
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">The Solution</FadeIn>
          <TextReveal 
            text="LOOK LIKE THE BEST - CHARGE LIKE THE BEST." 
            className="text-5xl sm:text-7xl lg:text-9xl font-sora font-extrabold leading-[0.85] tracking-tighter-extreme uppercase justify-center" 
          />
        </div>

        <div className="relative z-10">
          <StickyFeatures />
        </div>
      </section>

      <PortfolioViewports />

      {/* TIERS — STICKY SCROLL */}
      <section id="tiers" className="py-24 lg:py-40 px-6 sm:px-12 bg-brand-ivory relative">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 lg:items-start">
          <div className="lg:w-5/12 lg:sticky lg:top-40 h-fit">
            <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">Pilot Packages</FadeIn>
            <TextReveal 
              text="PICK YOUR GROWTH PLAN." 
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase mb-8" 
            />
            <FadeIn className="text-xl text-brand-charcoal/50 font-medium">
              Your upfront cost covers a done-for-you site build plus 90 days of marketing to prove it works. Pick the plan that fits your business. Scale when you see results.
            </FadeIn>
          </div>

          <div className="lg:w-7/12 flex flex-col gap-12">
            <FadeIn>
              <TierCard 
                name="Tier 01" title="Neighborhood Pro"
                save="$2,250" original="$4,500" price="$2,250"
                buildFeatures={[
                  "Premium custom website that screams quality",
                  "Your #1 city shows up when homeowners search",
                  "4 service pages that sell your best work",
                  "Built to rank on Google and AI search engines",
                  "Lead capture form that filters out tire-kickers"
                ]}
                monthlyFeatures={[
                  "Google Business Profile kept fresh and optimized",
                  "2 blog posts per month that bring in local traffic",
                  "Clear ranking reports you can actually understand",
                  "Quarterly strategy call to plan your next move"
                ]}
              />
            </FadeIn>

            <FadeIn>
              <TierCard 
                name="Tier 02" title="City Dominator"
                save="$3,400" original="$6,800" price="$3,400" isPopular
                buildFeatures={[
                  "Show up in 3 surrounding cities, not just one",
                  "12 pages targeting every service homeowners search for",
                  "Photo gallery that makes your best jobs sell for you",
                  "Areas We Serve page so locals know you cover their town"
                ]}
                monthlyFeatures={[
                  "4 blog posts per month driving local search traffic",
                  "Weekly Google Business Profile updates and posts",
                  "We respond to your reviews so you look professional",
                  "Strategy call every 2 weeks to keep your pipeline full"
                ]}
              />
            </FadeIn>

            <FadeIn>
              <TierCard 
                name="Tier 03" title="Metro Takeover"
                save="$5,250" original="$10,500" price="$5,250"
                buildFeatures={[
                  "Dominate 6 cities across your entire metro area",
                  "Unlimited service pages for every job type you do",
                  "Online paint cost calculator that pre-qualifies leads",
                  "Multi-step intake form that filters out budget shoppers",
                  "Trust badges, reviews, and proof that close on autopilot"
                ]}
                monthlyFeatures={[
                  "8 blog posts per month flooding your area with content",
                  "Automated review requests after every completed job",
                  "We track what your competitors rank for and beat them",
                  "Direct Slack channel with your dedicated team",
                  "Monthly strategy calls to scale your territory"
                ]}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <AddOnsAndBundles />
      <ComparisonTable />
      <Guarantees />

      {/* FINAL CTA — OVERSIZED */}
      <section className="py-32 lg:py-64 px-6 sm:px-12 text-left bg-brand-mustard text-brand-charcoal relative overflow-hidden">
        <Parallax offset={80} className="absolute bottom-0 right-0 text-[30rem] font-sora font-extrabold leading-none opacity-[0.03] select-none translate-y-1/4 translate-x-1/4 pointer-events-none">
          50%
        </Parallax>
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div>
            <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-charcoal/50 mb-12">Only 5 Spots This Round</FadeIn>
            
            <TextReveal 
              text="YOUR MOVE." 
              className="text-5xl sm:text-8xl lg:text-11xl font-sora font-extrabold leading-[0.8] tracking-tighter-extreme uppercase mb-16 max-w-[10ch]" 
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <FadeIn delay={0.2} className="lg:col-span-6">
                <p className="text-2xl sm:text-3xl font-sora font-extrabold uppercase mb-12 leading-tight">
                  5 painters. Half price. 14-day build. <br />
                  <span className="opacity-50 text-brand-charcoal/70 font-medium normal-case text-xl block mt-4">We build it first. You see it live before you pay a dime. No risk.</span>
                </p>
                <Magnetic strength={10}>
                  <Link href="mailto:hello@homeownermarketers.com?subject=Pilot%20Partner%20Application" className="group relative inline-flex items-center justify-center px-10 py-6 overflow-hidden font-sora font-extrabold text-brand-ivory bg-brand-charcoal rounded-none transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95 shadow-2xl w-full sm:w-auto text-xl uppercase tracking-widest">
                    <span className="relative z-10 flex items-center gap-4">
                      Check Availability <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                    </span>
                  </Link>
                </Magnetic>
              </FadeIn>
              <FadeIn delay={0.4} className="lg:col-span-6 lg:text-right">
                <div className="text-sm font-sora font-extrabold tracking-widest uppercase mb-4 opacity-50">Questions?</div>
                <a href="mailto:hello@homeownermarketers.com" className="text-2xl sm:text-4xl font-sora font-extrabold hover:underline transition-all py-2 inline-block">hello@homeownermarketers.com</a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 px-6 sm:px-12 bg-white border-t border-brand-charcoal/5">
        <FadeIn className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div className="flex flex-col gap-6">
            <Image src="/HM-Logo.png" alt="Homeowner Marketers" width={240} height={80} className="h-12 sm:h-16 w-auto object-contain invert opacity-80 self-start" />
            <p className="text-brand-charcoal/40 font-medium text-sm">&copy; 2026 Homeowner Marketers. Premium websites for painters who refuse to compete on price.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-sora font-extrabold uppercase tracking-[0.2em] text-brand-charcoal/60">
            <a href="#" className="hover:text-brand-mustard transition-colors py-3 px-2">How It Works</a>
            <a href="#" className="hover:text-brand-mustard transition-colors py-3 px-2">Results</a>
            <a href="#" className="hover:text-brand-mustard transition-colors py-3 px-2">Pricing</a>
            <a href="#" className="hover:text-brand-mustard transition-colors py-3 px-2">Contact</a>
          </div>
        </FadeIn>
      </footer>

      {/* MOBILE CRO: FIXED BOTTOM CTA */}
      <AnimatePresence>
        {scrolled && (
          <motion.div 
            initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 z-50 lg:hidden"
          >
            <Link href="#tiers" className="flex items-center justify-center w-full py-5 min-h-[48px] bg-brand-mustard text-brand-charcoal font-sora font-extrabold uppercase tracking-widest shadow-2xl active:scale-[0.98] transition-transform">
              Check Availability ↓
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

function TierCard({ name, title, save, original, price, buildFeatures, monthlyFeatures, isPopular }: any) {
  return (
    <div className={`relative p-10 lg:p-12 border-2 ${isPopular ? 'bg-brand-charcoal text-brand-ivory border-brand-charcoal' : 'bg-white text-brand-charcoal border-brand-charcoal/5'} flex flex-col h-full group hover:-translate-y-2 transition-transform duration-500`}>
      {isPopular && (
        <div className="absolute -top-4 left-10 bg-brand-mustard text-brand-charcoal text-xs font-sora font-extrabold tracking-[0.2em] uppercase px-4 py-2 rounded-none shadow-xl">
          Most Popular
        </div>
      )}

      <div className="mb-12">
        <div className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase opacity-40 mb-2">{name}</div>
        <h3 className="text-3xl font-sora font-extrabold mb-10 uppercase tracking-tight">{title}</h3>

        <div className="flex flex-col gap-1">          <div className="flex items-baseline gap-3">
            <span className={`text-sm font-sora font-extrabold uppercase tracking-widest ${isPopular ? 'text-brand-mustard' : 'text-brand-mustard'}`}>SAVE {save}</span>
            <span className={`text-xl font-sora font-extrabold line-through opacity-20`}>{original}</span>
          </div>
          <div className="text-5xl sm:text-6xl font-sora font-extrabold tracking-tighter-extreme">{price}</div>
          <div className={`text-xs font-bold uppercase tracking-widest mt-2 ${isPopular ? 'text-brand-ivory/40' : 'text-brand-charcoal/40'}`}>Upfront Investment</div>
        </div>
      </div>

      <div className="space-y-12 flex-grow">
        <div>
          <div className={`text-xs font-sora font-extrabold uppercase tracking-[0.2em] mb-6 pb-2 border-b ${isPopular ? 'border-brand-ivory/10' : 'border-brand-charcoal/10'}`}>14-Day Build</div>
          <ul className="space-y-4">
            {buildFeatures.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-4 text-sm font-medium leading-relaxed">
                <span className="text-brand-mustard font-sora font-extrabold text-lg leading-none">/</span>
                <span className={isPopular ? 'text-brand-ivory/80' : 'text-brand-charcoal/80'}>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={`text-xs font-sora font-extrabold uppercase tracking-[0.2em] mb-6 pb-2 border-b ${isPopular ? 'border-brand-ivory/10' : 'border-brand-charcoal/10'}`}>90-Day Engine</div>
          <ul className="space-y-4">
            {monthlyFeatures.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-4 text-sm font-medium leading-relaxed">
                <span className="text-brand-mustard font-sora font-extrabold text-lg leading-none">/</span>
                <span className={isPopular ? 'text-brand-ivory/80' : 'text-brand-charcoal/80'}>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <Link href="#tiers" className={`flex items-center justify-center w-full py-5 min-h-[48px] font-sora font-extrabold uppercase tracking-widest transition-all ${isPopular ? 'bg-brand-mustard text-brand-charcoal hover:bg-white' : 'bg-brand-charcoal text-brand-ivory hover:bg-brand-mustard hover:text-brand-charcoal'}`}>
          Get Started
        </Link>
      </div>
    </div>
  )
}

function ProblemCardsList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const windowCenterY = window.innerHeight / 2
      let minDistance = Infinity
      let newActiveIndex = null

      cardRefs.current.forEach((el, index) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        // Calculate the center of the element
        const elementCenterY = rect.top + rect.height / 2
        const distance = Math.abs(windowCenterY - elementCenterY)
        
        // Threshold: Must be somewhat near the center to be active
        if (distance < minDistance && distance < window.innerHeight / 1.5) {
          minDistance = distance
          newActiveIndex = index
        }
      })

      setActiveIndex(newActiveIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const items = [
    { title: "You Look Cheap Online", desc: "Your site looks like every other painter on page one. A homeowner cannot tell you apart from the guy working out of his garage.", icon: "x" },
    { title: "Price Shoppers Only", desc: "Your inbox is full of people asking 'what is your cheapest price?' because nothing on your site says premium.", icon: "x" },
    { title: "Agency Black Hole", desc: "You pay $1,500 a month and have no idea what they do. They say 'SEO takes time' while your phone stays quiet.", icon: "x" },
    { title: "6 Months to Launch", desc: "Your last agency took half a year to build a basic site. You lost thousands in jobs while they 'finalized the design.'", icon: "x" },
    { title: "Slow Site, Lost Leads", desc: "Your site takes 5+ seconds to load. By then the homeowner already called your competitor.", icon: "x" },
    { title: "Brochure, Not a Closer", desc: "Your site is a digital business card. It does not qualify leads, show pricing, or give homeowners a reason to pick you.", icon: "x" }
  ]

  return (
    <>
      {items.map((item, i) => (
        <ProblemCard 
          key={i} 
          item={item} 
          i={i} 
          isActive={activeIndex === i} 
          ref={(el) => { cardRefs.current[i] = el }} 
        />
      ))}
    </>
  )
}

const ProblemCard = forwardRef<HTMLDivElement, { item: { title: string, desc: string, icon: string }, i: number, isActive: boolean }>(({ item, i, isActive }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
      className={`group p-8 sm:p-10 transition-colors duration-500 h-full cursor-pointer
        ${isActive ? 'bg-brand-charcoal text-brand-ivory' : 'bg-brand-ivory text-brand-charcoal lg:hover:bg-brand-charcoal lg:hover:text-brand-ivory'}`}
    >
      <div className="flex items-start gap-5 mb-4">
        <div className={`text-4xl font-sora font-extrabold leading-none transition-transform duration-500 ${isActive ? 'scale-110 text-brand-mustard' : 'text-brand-mustard lg:group-hover:scale-110'}`}>
          {item.icon}
        </div>
        <h4 className="text-xl sm:text-2xl font-sora font-extrabold uppercase tracking-tight leading-tight mt-1">
          {item.title}
        </h4>
      </div>
      <p className={`leading-relaxed font-medium transition-colors duration-500 ${isActive ? 'text-brand-ivory/60' : 'text-brand-charcoal/60 lg:group-hover:text-brand-ivory/60'}`}>{item.desc}</p>
    </motion.div>
  )
})
ProblemCard.displayName = 'ProblemCard'

