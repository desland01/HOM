'use client'

import { useState, useEffect, useRef, forwardRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FadeIn, TextReveal, Parallax, Magnetic, ScaleReveal } from '@/components/ui/animations'
import { StickyFeatures } from '@/components/ui/sticky-features'
import { ComparisonTable } from '@/components/sections/comparison-table'
import { Guarantees } from '@/components/sections/guarantees'
import { PortfolioViewports } from '@/components/sections/portfolio-viewports'
import { UnifiedModal, PlaybookModalContent } from '@/components/ui/modals'
import { Configurator } from '@/components/sections/configurator'
import { AddOnsAndBundles } from '@/components/sections/add-ons-and-bundles'
import { useModals } from '@/components/ui/modal-context'

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

export default function Home() {
  const [showBanner, setShowBanner] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const { activeModalId, openModal, closeModal } = useModals()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const playbookCards = [
    {
      step: "Play 01",
      title: "Geo-Silos & Hubs",
      content: "We build dedicated hubs for every city and service you offer. We flood the zone so you're the only choice.",
      details: "Unlike standard sites that have a single 'Services' page, we build a matrix. If you serve 10 cities with 5 services, we deploy 50 optimized endpoints. This architectural dominance tells Google you aren't just a painter—you are the definitive authority for that specific square mile."
    },
    {
      step: "Play 02",
      title: "A.E.O. (Answer Engine)",
      content: "Homeowners are now asking ChatGPT and Google AI for recommendations. We make sure they cite you.",
      details: "We deploy advanced JSON-LD Schema and 'llms.txt' files. These are invisible to humans but serve as a 'cheat sheet' for AI bots. When an LLM scans the web to answer 'Who is the best cabinet painter in [City]?', your business data is the easiest for it to read, verify, and recommend."
    },
    {
      step: "Play 03",
      title: "High-Velocity Content",
      content: "We use AI to generate targeted articles that answer homeowner questions and drive ready-to-buy traffic.",
      details: "We analyze high-intent search queries like 'cost to paint 2000 sq ft house' or 'best exterior colors for resale'. Our AI agents then generate long-form, expert-level articles that solve these problems. These articles act as a 'Reverse Silo,' funneling trust and traffic directly to your quote form."
    },
    {
      step: "Play 04",
      title: "Edge Hosting",
      content: "Your site lives on a global Edge Network, loading instantly. Google rewards this speed with higher rankings.",
      details: "We don't use WordPress or shared servers. We build on Next.js and deploy to a global edge network. This means your website's code is physically closer to your customer's phone. Sub-second load times aren't just for 'vibe'—they are a core ranking signal that separates the professionals from the amateurs."
    }
  ]

  const cleanupContent = [
    { step: "Step 01", title: "The NAP Audit", content: "We start by running a comprehensive audit across hundreds of local directories, data aggregators, and maps (Yelp, YellowPages, Bing, Apple Maps, etc.). We hunt down every instance of your Name, Address, and Phone Number (NAP) to find exactly where the discrepancies are hiding.", details: "Software aggregators often fail to find hidden duplicates or outdated listings on legacy directories. Our manual audit uses 12 different search vectors to map out the 'broken internet' foundation before we begin the repair process." },
    { step: "Step 02", title: "Human Negotiation", content: "Most agencies use software to push data. We use humans to claim and permanently alter records. Once we fix a citation, it stays fixed forever.", details: "Automated tools rely on APIs that can be rejected or overwritten. Our team manually verifies every change, often corresponding with directory support directly. This creates a permanent, verified record that won't revert when a software subscription ends." },
    { step: "Step 03", title: "The Authority Sync", content: "Once the internet is clean, we sync this pristine data back to your Google profile. Trust spikes, and you rise in the rankings.", details: "Consistency is Google's primary verification signal. When 40+ high-authority sources all provide the exact same NAP data, Google's confidence in your business entity reaches 100%. This is the silent fuel behind Map Pack rankings." }
  ]

  const gbpContent = [
    { step: "Part 01", title: "Review Velocity", content: "We tie our AI reputation platform into your CRM to automate review requests for every location.", details: "Review velocity isn't just about total count—it's about frequency. Our system triggers requests immediately upon job completion, ensuring a steady stream of 5-star signals that Google uses to determine local relevance." },
    { step: "Part 02", title: "Location Activity", content: "We post weekly updates and geotagged photos for every additional location to prove you are active in that market.", details: "Google treats dead profiles as dead businesses. We syndicate photo updates and monthly 'Offers' to every location hub, creating the signals Google needs to push each branch into its local top 3." },
    { step: "Part 03", title: "Syndicated Authority", content: "We broadcast every new location's data to the top 40 local directories, ensuring consistency from day one.", details: "Every location needs its own unique citation footprint. We audit and build the specific NAP web required for each address, preventing data overlap and ensuring each city hub builds its own independent authority." }
  ]

  return (
    <main className="min-h-[100svh] bg-brand-ivory selection:bg-brand-mustard selection:text-brand-charcoal overflow-clip text-center sm:text-left">
      
      {/* MODAL SYSTEM INTEGRATION */}
      <UnifiedModal 
        isOpen={activeModalId === 'agentic-strategy'} 
        onClose={closeModal} 
        type="flashcard" 
        title="The Methodology Playbook"
      >
        <PlaybookModalContent cards={playbookCards} />
      </UnifiedModal>

      <UnifiedModal 
        isOpen={activeModalId === 'cleanup'} 
        onClose={closeModal} 
        type="flashcard" 
        title="The Manual Clean-Up"
      >
        <PlaybookModalContent cards={cleanupContent} />
      </UnifiedModal>

      <UnifiedModal 
        isOpen={activeModalId === 'gbp'} 
        onClose={closeModal} 
        type="flashcard" 
        title="Multi-Location Engine"
      >
        <PlaybookModalContent cards={gbpContent} />
      </UnifiedModal>

      {/* STICKY TOP BANNER */}
      <AnimatePresence>
        {showBanner && (
          <motion.div 
            initial={{ y: -50 }} animate={{ y: 0 }} exit={{ y: -50 }}
            className="fixed top-0 left-0 right-0 h-14 bg-brand-mustard flex items-center justify-center z-[100] px-12 border-b border-brand-charcoal/10"
          >
            <span className="text-brand-charcoal font-sora font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase text-center">
              FREE UP YOUR CALENDAR -- 5 PILOT SPOTS LEFT
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
        
        <div className="w-full max-w-[1440px] mx-auto relative z-10 text-left">
          <div className="flex flex-col items-start">
            <FadeIn delay={0.1} className="flex items-center gap-4 mb-4 sm:mb-6">
              <Image src="/HM-Logo.png" alt="Homeowner Marketers" width={240} height={80} priority className="h-12 sm:h-20 w-auto object-contain invert" />
              <div className="h-6 w-px bg-brand-charcoal/10 hidden sm:block" />
              <div className="text-xs sm:text-sm font-sora font-extrabold tracking-[0.3em] uppercase text-brand-charcoal/40 hidden sm:block">
                The Abundance Engine
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
            
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 w-full items-center mt-8 text-left">
              <FadeIn delay={0} className="col-span-2 lg:col-span-6 text-left">
                <p className="text-lg sm:text-xl lg:text-2xl text-brand-charcoal/70 leading-relaxed max-w-2xl font-medium mb-8 text-left">
                  Your website defines your reputation. We build you an asset that attracts high-value homeowners who appreciate your craft, so you can stop fighting for scraps and finally provide the life your team deserves.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Magnetic strength={10}>
                    <Link href="#configurator" className="group relative inline-flex items-center justify-center px-8 py-4 lg:px-10 lg:py-5 overflow-hidden font-sora font-extrabold text-brand-ivory bg-brand-charcoal rounded-none transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95 shadow-2xl text-base lg:text-lg uppercase tracking-widest text-center">
                      <span className="relative z-10 flex items-center gap-4">
                        Build Your Engine <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </Link>
                  </Magnetic>
                </div>
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
          <span className="shrink-0">90-Day Proof Phase</span> <span className="shrink-0 text-brand-ivory/20">•</span>
          <span className="shrink-0">Attract Higher-Paying Jobs</span> <span className="shrink-0 text-brand-ivory/20">•</span>
        </div>
        <div className="animate-marquee flex shrink-0 gap-12 text-xl font-sora font-extrabold uppercase tracking-widest items-center" aria-hidden="true">
          <span className="shrink-0">Built in 14 Days</span> <span className="shrink-0 text-brand-ivory/20">•</span>
          <span className="shrink-0">5 Spots Left</span> <span className="shrink-0 text-brand-ivory/20">•</span>
          <span className="shrink-0">90-Day Proof Phase</span> <span className="shrink-0 text-brand-ivory/20">•</span>
          <span className="shrink-0">Attract Higher-Paying Jobs</span> <span className="shrink-0 text-brand-ivory/20">•</span>
        </div>
      </section>

      {/* THE PROBLEM — STICKY SCROLL */}
      <section className="py-24 lg:py-40 px-6 sm:px-12 bg-white relative">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 lg:items-start text-left">
          <div className="lg:w-5/12 lg:sticky lg:top-40 h-fit text-left">
            <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6 text-left text-left">The Trap</FadeIn>
            <TextReveal 
              text="YOUR WEBSITE IS COSTING YOU MONEY." 
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase mb-8 text-left"
            />
            <FadeIn className="text-xl text-brand-charcoal/50 font-medium text-left">
              Right now, you're fighting for "scraps"—low-budget jobs where homeowners only care about the bottom line. It leaves zero margin for error, and zero margin to take care of your people.
            </FadeIn>
          </div>

          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-charcoal/5 border border-brand-charcoal/5">
            <ProblemCardsList />
          </div>
        </div>
      </section>

      {/* THE SOLUTION — STICKY STACKING CARDS */}
      <section className="pt-24 lg:pt-40 bg-brand-charcoal text-brand-ivory relative overflow-visible">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 mb-24 lg:mb-40 relative z-10 text-center">
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6 text-center">The Solution</FadeIn>
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

      {/* RADICAL TRANSPARENCY: THE LOGIC */}
      <section className="py-24 lg:py-40 px-6 sm:px-12 bg-brand-charcoal text-brand-ivory relative border-t border-brand-charcoal/5 overflow-hidden text-center">
        <div className="max-w-[1440px] mx-auto relative z-10 text-center">
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6 text-center text-center">Radical Transparency</FadeIn>
          <TextReveal 
            text="THEY KNOW WHAT WE DO. THEY JUST CANNOT KEEP UP." 
            className="text-4xl sm:text-6xl lg:text-7xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase mb-8 text-center" 
          />
          <FadeIn className="text-xl text-brand-ivory/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed text-center">
            Most SEO agencies hide behind "proprietary algorithms" because their work is slow and manual. We operate 6 months ahead using agentic AI development—deploying enterprise infrastructure in days, not months. 
          </FadeIn>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
            <button 
              onClick={() => openModal('agentic-strategy')}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-sora font-extrabold text-brand-charcoal bg-brand-mustard rounded-none transition-all hover:scale-[1.02] active:scale-95 shadow-xl text-base uppercase tracking-widest text-center"
            >
              Learn Our Strategy →
            </button>
            <Link 
              href="#configurator"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-sora font-extrabold text-brand-ivory border-2 border-brand-ivory/20 rounded-none transition-all hover:bg-brand-ivory hover:text-brand-charcoal text-base uppercase tracking-widest text-center"
            >
              Build Your Engine
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE COMPARISON */}
      <ComparisonTable />

      {/* TIERS — STICKY SCROLL */}
      <section id="tiers" className="py-24 lg:py-40 px-6 sm:px-12 bg-brand-ivory relative border-t border-brand-charcoal/5">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 lg:items-start text-left">
          <div className="lg:w-5/12 lg:sticky lg:top-40 h-fit text-left">
            <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6 text-left text-left">Pilot Packages</FadeIn>
            <TextReveal 
              text="CHOOSE YOUR ENGINE." 
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase mb-8 text-left" 
            />
            <FadeIn className="text-xl text-brand-charcoal/50 font-medium text-left">
              Your upfront cost covers a high-performance build plus 90 days of growth to prove the ROI. Scale your crew with confidence.
            </FadeIn>
          </div>

          <div className="lg:w-7/12 flex flex-col gap-12 text-left text-left">
            <FadeIn>
              <TierCard 
                name="Tier 01" title="Foundation Build"
                save="$2,250" original="$4,500" price="$2,250"
                buildFeatures={[
                  "Full A.E.O. (Answer Engine Optimization) structure",
                  "Instant Edge Hosting & Conversion Optimized Architecture",
                  "Up to 5 nested Service Pages built to rank",
                  "Multi-Step Contact Form to filter tire-kickers",
                  "Mobile-First Optimization & Local SEO Data Structure",
                  "Lightning fast 14-day delivery speed"
                ]}
                monthlyFeatures={[
                  "Fully optimized Google Business Profile (Automated Local Citations)",
                  "Audit Top 40 citations for NAP consistency",
                  "1 targeted monthly blog post with local geo-modifiers",
                  "Keyword Rank Tracking so you see exact progress"
                ]}
              />
            </FadeIn>

            <FadeIn>
              <TierCard 
                name="Tier 02" title="Expansion Build"
                save="$3,400" original="$6,800" price="$3,400" isPopular
                buildFeatures={[
                  "Everything in Foundation, PLUS:",
                  "4 location hubs targeting your main city and wealthy suburbs",
                  "Up to 20 total nested service pages (hyper-local targeting)",
                  "Competitor Gap Analysis (we target exactly what they're winning)",
                  "AI Chat Widget integration (Up to 100 conversations / mo)"
                ]}
                monthlyFeatures={[
                  "GBP Pro: 1 monthly Offer + 2 updates and 2 photo uploads",
                  "4 additional monthly blog posts targeting competitor traffic",
                  "Easy-win local link building (industry directories & associations)",
                  "Strategy call every 2 weeks to keep your team busy"
                ]}
              />
            </FadeIn>

            <FadeIn>
              <TierCard 
                name="Tier 03" title="Metro Build"
                save="$5,250" original="$10,500" price="$5,250"
                buildFeatures={[
                  "Everything in Expansion, PLUS:",
                  "10 location hubs (Strategic 3-stage deployment)",
                  "Up to 70 total nested service pages (Total metro coverage)",
                  "AI Chat Widget integration (Unlimited conversations)",
                  "Pre-qualifying automations and premium trust badges"
                ]}
                monthlyFeatures={[
                  "Premium Local Reputation signals & AI Automation",
                  "4 monthly how-to videos & 4 nested service FAQ pages",
                  "4 additional blog posts closing the competitor gap",
                  "1 high-DA backlink + 2 local business guest posts per month",
                  "Monthly growth strategy calls to scale your crew"
                ]}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <AddOnsAndBundles />

      <Guarantees />

      {/* THE CONFIGURATOR */}
      <Configurator />

      {/* FOOTER */}
      <footer className="py-24 px-6 sm:px-12 bg-white border-t border-brand-charcoal/5">
        <FadeIn className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 text-center sm:text-left">
          <div className="flex flex-col gap-6 w-full lg:w-auto items-center lg:items-start text-center sm:text-left">
            <Image src="/HM-Logo.png" alt="Homeowner Marketers" width={240} height={80} className="h-12 sm:h-16 w-auto object-contain invert opacity-80" />
            <p className="text-brand-charcoal/40 font-medium text-sm text-center sm:text-left text-center sm:text-left">&copy; 2026 Homeowner Marketers. Assets for painters who refuse to compete on price.</p>
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
            <Link href="#configurator" className="flex items-center justify-center w-full py-5 min-h-[48px] bg-brand-mustard text-brand-charcoal font-sora font-extrabold uppercase tracking-widest shadow-2xl active:scale-[0.98] transition-transform text-center text-center">
              Build Your Engine ↓
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

function TierCard({ name, title, save, original, price, buildFeatures, monthlyFeatures, isPopular }: any) {
  const { openModal } = useModals()
  return (
    <div className={`relative p-10 lg:p-12 border-2 ${isPopular ? 'bg-brand-charcoal text-brand-ivory border-brand-charcoal' : 'bg-white text-brand-charcoal border-brand-charcoal/5'} flex flex-col h-full group hover:-translate-y-2 transition-transform duration-500 text-left`}>
      {isPopular && (
        <div className="absolute -top-4 left-10 bg-brand-mustard text-brand-charcoal text-xs font-sora font-extrabold tracking-[0.2em] uppercase px-4 py-2 rounded-none shadow-xl">
          Most Scalable
        </div>
      )}

      <div className="mb-12 text-left">
        <div className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase opacity-40 mb-2 text-left text-left">{name}</div>
        <h3 className="text-3xl font-sora font-extrabold mb-10 uppercase tracking-tight text-left text-left">{title}</h3>

        <div className="flex flex-col gap-1 text-left text-left">
          <div className="flex items-baseline gap-3 text-left text-left">
            <span className="text-sm font-sora font-extrabold uppercase tracking-widest text-brand-mustard">SAVE {save}</span>
            <span className="text-xl font-sora font-extrabold line-through opacity-20">{original}</span>
          </div>
          <div className="text-5xl sm:text-6xl font-sora font-extrabold tracking-tighter-extreme text-left text-left">{price}</div>
          <div className={`text-xs font-bold uppercase tracking-widest mt-2 text-left text-left ${isPopular ? 'text-brand-ivory/40' : 'text-brand-charcoal/40'}`}>Initial Investment</div>
        </div>
      </div>

      <div className="space-y-12 flex-grow text-left text-left">
        <div>
          <div className={`text-xs font-sora font-extrabold uppercase tracking-[0.2em] mb-6 pb-2 border-b text-left text-left ${isPopular ? 'border-brand-ivory/10' : 'border-brand-charcoal/10'}`}>Build Asset (Owned)</div>
          <ul className="space-y-4 text-left text-left">
            {buildFeatures.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-4 text-sm font-medium leading-relaxed text-left text-left text-left">
                <span className="text-brand-mustard font-sora font-extrabold text-lg leading-none">/</span>
                <span className={isPopular ? 'text-brand-ivory/80' : 'text-brand-charcoal/80'}>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className={`text-xs font-sora font-extrabold uppercase tracking-[0.2em] mb-6 pb-2 border-b text-left text-left ${isPopular ? 'border-brand-ivory/10' : 'border-brand-charcoal/10'}`}>Pilot Engine (90 Days)</div>
          <ul className="space-y-4 text-left text-left">
            {monthlyFeatures.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-4 text-sm font-medium leading-relaxed text-left text-left text-left">
                <span className="text-brand-mustard font-sora font-extrabold text-lg leading-none">/</span>
                <span className={isPopular ? 'text-brand-ivory/80' : 'text-brand-charcoal/80'}>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 text-left text-left">
        <Link href="#configurator" className={`flex items-center justify-center w-full py-5 min-h-[48px] font-sora font-extrabold uppercase tracking-widest transition-all ${isPopular ? 'bg-brand-mustard text-brand-charcoal hover:bg-white' : 'bg-brand-charcoal text-brand-ivory hover:bg-brand-mustard hover:text-brand-charcoal text-center'}`}>
          Secure Territory
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
      if (window.innerWidth >= 768) {
        if (activeIndex !== null) setActiveIndex(null)
        return
      }
      const windowCenterY = window.innerHeight / 2
      let minDistance = Infinity
      let newActiveIndex = null
      cardRefs.current.forEach((el, index) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const elementCenterY = rect.top + rect.height / 2
        const distance = Math.abs(windowCenterY - elementCenterY)
        if (distance < minDistance && distance < window.innerHeight / 1.5) {
          minDistance = distance
          newActiveIndex = index
        }
      })
      setActiveIndex(newActiveIndex)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [activeIndex])

  const items = [
    { title: "The Price Shopper Loop", desc: "Your phone rings, but it's another person asking for your 'best price.' You're stuck with low-margin work that barely covers overhead.", icon: "x" },
    { title: "No Margin for People", desc: "When jobs are won on price, you can't afford healthcare, PTO, or competitive wages for your best workers. The talent leaves.", icon: "x" },
    { title: "The Agency Anchor", desc: "You're paying $1,500/mo for 'maintenance' and 'SEO' that doesn't actually fill your calendar with high-value jobs.", icon: "x" },
    { title: "Ghost-Town Web Presence", desc: "Your site is a digital brochure. It doesn't build trust, it doesn't pre-qualify, and it doesn't sell your quality.", icon: "x" },
    { title: "Inefficient Estimating", desc: "You spend your nights driving to 'estimate' jobs for people who were never going to pay your premium rates anyway.", icon: "x" },
    { title: "The Competition Trap", desc: "You look exactly like the guy working out of a pickup truck. There's no reason for a homeowner to pay you more.", icon: "x" }
  ]

  return (
    <>
      {items.map((item, i) => (
        <ProblemCard key={i} item={item} i={i} isActive={activeIndex === i} ref={(el) => { cardRefs.current[i] = el }} />
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
      className={`group p-8 sm:p-10 transition-colors duration-500 h-full cursor-pointer bg-brand-ivory text-brand-charcoal md:hover:bg-brand-charcoal md:hover:text-brand-ivory text-left text-left
        ${isActive ? 'max-md:bg-brand-charcoal max-md:text-brand-ivory' : ''}`}
    >
      <div className="flex items-start gap-5 mb-4 text-left text-left">
        <div className={`text-4xl font-sora font-extrabold leading-none transition-transform duration-500 text-brand-mustard md:group-hover:scale-110 ${isActive ? 'max-md:scale-110' : ''}`}>
          {item.icon}
        </div>
        <h4 className="text-xl sm:text-2xl font-sora font-extrabold uppercase tracking-tight leading-tight mt-1 text-left text-left">
          {item.title}
        </h4>
      </div>
      <p className={`leading-relaxed font-medium transition-colors duration-500 text-brand-charcoal/60 md:group-hover:text-brand-ivory/60 text-left text-left ${isActive ? 'max-md:text-brand-ivory/60' : ''}`}>{item.desc}</p>
    </motion.div>
  )
})
ProblemCard.displayName = 'ProblemCard'
