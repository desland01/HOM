'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const revealVariant: any = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function Home() {
  const [showBanner, setShowBanner] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-brand-ivory selection:bg-brand-mustard selection:text-brand-charcoal overflow-x-hidden">
      {/* STICKY TOP BANNER */}
      <AnimatePresence>
        {showBanner && (
          <motion.div 
            initial={{ y: -50 }} animate={{ y: 0 }} exit={{ y: -50 }}
            className="fixed top-0 left-0 right-0 h-14 bg-brand-mustard flex items-center justify-center z-[100] px-12 border-b border-brand-charcoal/10"
          >
            <span className="text-brand-charcoal font-sora font-extrabold text-[10px] sm:text-xs tracking-[0.2em] uppercase text-center">
              PILOT OFFER: 50% OFF — Only 5 Spots Available
            </span>
            <button 
              onClick={() => setShowBanner(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-brand-charcoal text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity"
              aria-label="Close banner"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERSIZED HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 px-6 sm:px-12 flex flex-col items-start overflow-hidden border-b border-brand-charcoal/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--brand-mustard)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] pointer-events-none" />
        
        <div className="w-full max-w-[1440px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-start">
            <motion.div variants={revealVariant} className="flex items-center gap-4 mb-12 sm:mb-16">
              <img 
                src="/HM-Logo.png" 
                alt="Homeowner Marketers" 
                className="h-8 sm:h-12 w-auto object-contain invert"
              />
              <div className="h-6 w-px bg-brand-charcoal/10 hidden sm:block" />
              <div className="text-[10px] sm:text-xs font-sora font-extrabold tracking-[0.3em] uppercase text-brand-charcoal/40 hidden sm:block">
                Geo-Silo SEO Engine
              </div>
            </motion.div>
            
            <motion.div variants={revealVariant} className="flex flex-col items-start gap-2 mb-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-mustard/30 bg-brand-mustard/5 text-brand-mustard text-[10px] sm:text-xs font-sora font-extrabold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-mustard opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-mustard"></span>
                </span>
                Exclusive Pilot Partnership
              </div>
            </motion.div>

            <motion.h1 variants={revealVariant} className="text-6xl sm:text-8xl md:text-9xl lg:text-10xl font-sora font-extrabold text-brand-charcoal leading-[0.85] tracking-tighter-extreme mb-12 uppercase max-w-[15ch] text-left">
              Prove It <br />
              <span className="text-brand-mustard">First.</span> <br />
              Dominate <br />
              Later.
            </motion.h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-end">
              <motion.div variants={revealVariant} className="lg:col-span-6">
                <p className="text-xl sm:text-2xl text-brand-charcoal/70 leading-relaxed max-w-2xl font-medium mb-10">
                  A Geo-Silo SEO engine built exclusively for painters. We build it in <span className="text-brand-charcoal font-extrabold">14 days</span>, prove it for <span className="text-brand-charcoal font-extrabold">90 days</span>, and you only commit when you see the leads.
                </p>
                <Link href="#tiers" className="group relative inline-flex items-center justify-center px-10 py-6 overflow-hidden font-sora font-extrabold text-brand-ivory bg-brand-charcoal rounded-none transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95 shadow-2xl w-full sm:w-auto text-xl uppercase tracking-widest">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-charcoal via-brand-charcoal to-brand-mustard opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative z-10 flex items-center gap-4">
                    Claim Your Spot <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </span>
                </Link>
              </motion.div>
              
              <motion.div variants={revealVariant} className="lg:col-span-6 flex justify-start lg:justify-end">
                <div className="relative group">
                  <div className="absolute inset-0 bg-brand-mustard translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                  <div className="relative flex flex-col items-center justify-center bg-brand-mustard text-brand-charcoal px-8 py-6 sm:px-12 sm:py-10 border-2 border-brand-charcoal rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300">
                    <div className="text-6xl sm:text-8xl font-sora font-extrabold leading-none tracking-tighter-extreme">50% OFF</div>
                    <div className="h-px w-full bg-brand-charcoal/20 my-4 sm:my-6"></div>
                    <div className="text-sm sm:text-lg font-sora font-extrabold tracking-[0.2em] uppercase">Pilot Investment</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM — MACHINED GRID */}
      <section className="py-24 lg:py-40 px-6 sm:px-12 bg-white relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
              className="max-w-3xl"
            >
              <div className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">The Problem</div>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase">
                You've Been <br /> Burned <span className="text-brand-charcoal/20">Before.</span>
              </h2>
            </motion.div>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
              className="text-xl text-brand-charcoal/50 max-w-sm mb-4 lg:text-right"
            >
              Standard agencies sell you hope. We sell you a high-performance system that actually works.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-brand-charcoal/5">
            {[
              { title: "12-Month Contracts", desc: "Locked in before a single lead. Agencies get paid whether you grow or not.", icon: "×" },
              { title: "Cookie-Cutter Sites", desc: "Template websites that look like every other painter in your city. Google ignores them.", icon: "×" },
              { title: "Vague Reporting", desc: "Monthly PDFs full of impressions and clicks. Zero clarity on actual booked jobs.", icon: "×" },
              { title: "Slow Timelines", desc: "3-6 months before anything happens. Meanwhile you're still paying.", icon: "×" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
                className="group p-10 border-brand-charcoal/5 border-b md:border-r lg:last:border-r-0 hover:bg-brand-charcoal transition-colors duration-500"
              >
                <div className="text-4xl font-sora font-extrabold text-brand-mustard mb-12 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                <h4 className="text-2xl font-sora font-extrabold text-brand-charcoal group-hover:text-brand-ivory mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-brand-charcoal/60 group-hover:text-brand-ivory/60 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SOLUTION — OVERSIZED IMPACT */}
      <section className="py-24 lg:py-40 px-6 sm:px-12 bg-brand-charcoal text-brand-ivory relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 mb-32">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}>
              <div className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">The Solution</div>
              <h2 className="text-5xl sm:text-7xl lg:text-9xl font-sora font-extrabold leading-[0.85] tracking-tighter-extreme uppercase">
                A System <br /> That <span className="text-brand-mustard">Proves</span> <br /> Itself.
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-brand-ivory/10 border border-brand-ivory/10">
            {[
              { title: "Geo-Silo Architecture", desc: "City-specific location hubs with nested service pages. Google sees you as the local authority, not just another painter with a website.", col: "lg:col-span-6" },
              { title: "90-Day Proof Period", desc: "Your upfront investment covers the complete build AND 3 full months of SEO management. Real leads, real data before any commitment.", col: "lg:col-span-6" },
              { title: "We Build First. You Pay Live.", desc: "We build your entire site before you pay. You review it, request changes, and only pay once you love it and the site goes live.", col: "lg:col-span-8" },
              { title: "Next.js Edge Speed", desc: "Sub-second load times, 90+ PageSpeed guaranteed. Your site runs on the same infrastructure as Fortune 500s.", col: "lg:col-span-4" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
                className={`${item.col} bg-brand-charcoal p-12 lg:p-16 hover:bg-brand-mustard/5 transition-colors duration-500`}
              >
                <div className="w-12 h-px bg-brand-mustard mb-8" />
                <h4 className="text-3xl font-sora font-extrabold mb-6 uppercase tracking-tight">{item.title}</h4>
                <p className="text-brand-ivory/60 text-lg leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS — HIGH CONTRAST */}
      <section id="tiers" className="py-24 lg:py-40 px-6 sm:px-12 bg-brand-ivory">
        <div className="max-w-[1440px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-24">
            <div className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6 text-center">Pilot Packages</div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase text-center mb-12">
              Choose Your <br /> Territory.
            </h2>
            <p className="text-xl text-brand-charcoal/50 max-w-2xl mx-auto text-center font-medium">
              Every tier ships in 14 days with a 90+ PageSpeed guarantee. Your upfront investment covers the full build plus 90 days of management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
            <TierCard 
              name="Tier 01" title="Local Authority" revenue="$250k - $500k painters"
              save="$2,250" original="$4,500" price="$2,250"
              buildFeatures={[
                "Custom Next.js web application",
                "1 primary target city location hub",
                "4 core service pages",
                "PaintingContractor JSON-LD schema",
                "Lead funnel integration"
              ]}
              monthlyFeatures={[
                "GBP entity synchronization",
                "2x reverse-silo blog posts / mo",
                "DataForSEO tracking",
                "Quarterly strategy call"
              ]}
            />

            <TierCard 
              name="Tier 02" title="Territory Dominator" revenue="$500k - $1.5M painters"
              save="$3,400" original="$6,800" price="$3,400" isPopular
              buildFeatures={[
                "3 secondary location hubs",
                "12 nested service pages",
                "Interactive project gallery",
                "Areas We Serve matrix"
              ]}
              monthlyFeatures={[
                "4x reverse-silo blog posts / mo",
                "Weekly GBP optimization",
                "Review response management",
                "Bi-monthly strategy calls"
              ]}
            />

            <TierCard 
              name="Tier 03" title="Enterprise Takeover" revenue="$1.5M+ painters"
              save="$5,250" original="$10,500" price="$5,250"
              buildFeatures={[
                "6 location hubs (metro domination)",
                "Unlimited service pages",
                "Custom paint cost calculator",
                "Multi-step qualification funnels",
                "Full FAQ schema mapping"
              ]}
              monthlyFeatures={[
                "8x reverse-silo blog posts / mo",
                "Automated review sequences",
                "Competitor gap analysis",
                "Dedicated Slack channel",
                "Monthly strategy calls"
              ]}
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA — OVERSIZED */}
      <section className="py-32 lg:py-64 px-6 sm:px-12 text-left bg-brand-mustard text-brand-charcoal relative overflow-hidden">
        <div className="absolute bottom-0 right-0 text-[30rem] font-sora font-extrabold leading-none opacity-[0.03] select-none translate-y-1/2 translate-x-1/4 pointer-events-none">
          50%
        </div>
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-charcoal/50 mb-12">Limited Availability</div>
            
            <h2 className="text-6xl sm:text-8xl lg:text-11xl font-sora font-extrabold leading-[0.8] tracking-tighter-extreme uppercase mb-16 max-w-[10ch]">
              Claim <br /> Your <br /> Spot.
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-6">
                <p className="text-2xl sm:text-3xl font-sora font-extrabold uppercase mb-12 leading-tight">
                  Only 5 spots available. <br />
                  <span className="opacity-50 text-brand-charcoal/70 font-medium normal-case text-xl block mt-4">We build your site first. You don't pay until it's live.</span>
                </p>
                <Link href="mailto:hello@homeownermarketers.com?subject=Pilot%20Partner%20Application" className="group relative inline-flex items-center justify-center px-10 py-6 overflow-hidden font-sora font-extrabold text-brand-ivory bg-brand-charcoal rounded-none transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95 shadow-2xl w-full sm:w-auto text-xl uppercase tracking-widest">
                  <span className="relative z-10 flex items-center gap-4">
                    Send Application <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </span>
                </Link>
              </div>
              <div className="lg:col-span-6 lg:text-right">
                <div className="text-sm font-sora font-extrabold tracking-widest uppercase mb-4 opacity-50">Questions?</div>
                <a href="mailto:hello@homeownermarketers.com" className="text-2xl sm:text-4xl font-sora font-extrabold hover:underline transition-all">hello@homeownermarketers.com</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 px-6 sm:px-12 bg-white border-t border-brand-charcoal/5">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div className="flex flex-col gap-6">
            <img src="/HM-Logo.png" alt="Homeowner Marketers" className="h-8 object-contain invert opacity-80 self-start" />
            <p className="text-brand-charcoal/40 font-medium text-sm">&copy; 2026 Homeowner Marketers. Built for high-performance painters.</p>
          </div>
          <div className="flex flex-wrap gap-8 text-xs font-sora font-extrabold uppercase tracking-[0.2em] text-brand-charcoal/60">
            <a href="#" className="hover:text-brand-mustard transition-colors">Strategy</a>
            <a href="#" className="hover:text-brand-mustard transition-colors">Geo-Silo</a>
            <a href="#" className="hover:text-brand-mustard transition-colors">Pricing</a>
            <a href="#" className="hover:text-brand-mustard transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* MOBILE CRO: FIXED BOTTOM CTA */}
      <AnimatePresence>
        {scrolled && (
          <motion.div 
            initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 z-50 lg:hidden"
          >
            <Link href="#tiers" className="flex items-center justify-center w-full py-5 bg-brand-charcoal text-brand-ivory font-sora font-extrabold uppercase tracking-widest shadow-2xl active:scale-[0.98] transition-transform">
              Claim Your Spot ↓
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

function TierCard({ name, title, revenue, save, original, price, buildFeatures, monthlyFeatures, isPopular }: any) {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant}
      className={`relative p-10 lg:p-12 border-2 ${isPopular ? 'bg-brand-charcoal text-brand-ivory border-brand-charcoal' : 'bg-white text-brand-charcoal border-brand-charcoal/5'} flex flex-col h-full group hover:-translate-y-2 transition-transform duration-500`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-10 bg-brand-mustard text-brand-charcoal text-[10px] font-sora font-extrabold tracking-[0.2em] uppercase px-4 py-2 rounded-none shadow-xl">
          Most Popular
        </div>
      )}

      <div className="mb-12">
        <div className="text-[10px] font-sora font-extrabold tracking-[0.4em] uppercase opacity-40 mb-2">{name}</div>
        <h3 className="text-3xl font-sora font-extrabold mb-4 uppercase tracking-tight">{title}</h3>
        <div className={`text-sm font-medium ${isPopular ? 'text-brand-ivory/50' : 'text-brand-charcoal/50'} mb-10`}>{revenue}</div>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-3">
            <span className={`text-sm font-sora font-extrabold uppercase tracking-widest ${isPopular ? 'text-brand-mustard' : 'text-brand-mustard'}`}>SAVE {save}</span>
            <span className={`text-xl font-sora font-extrabold line-through opacity-20`}>{original}</span>
          </div>
          <div className="text-6xl font-sora font-extrabold tracking-tighter-extreme">{price}</div>
          <div className={`text-xs font-bold uppercase tracking-widest mt-2 ${isPopular ? 'text-brand-ivory/40' : 'text-brand-charcoal/40'}`}>Upfront Investment</div>
        </div>
      </div>

      <div className="space-y-12 flex-grow">
        <div>
          <div className={`text-[10px] font-sora font-extrabold uppercase tracking-[0.2em] mb-6 pb-2 border-b ${isPopular ? 'border-brand-ivory/10' : 'border-brand-charcoal/10'}`}>14-Day Build</div>
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
          <div className={`text-[10px] font-sora font-extrabold uppercase tracking-[0.2em] mb-6 pb-2 border-b ${isPopular ? 'border-brand-ivory/10' : 'border-brand-charcoal/10'}`}>90-Day Engine</div>
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
        <Link href="#tiers" className={`flex items-center justify-center w-full py-5 font-sora font-extrabold uppercase tracking-widest transition-all ${isPopular ? 'bg-brand-mustard text-brand-charcoal hover:bg-white' : 'bg-brand-charcoal text-brand-ivory hover:bg-brand-mustard hover:text-brand-charcoal'}`}>
          Select Tier
        </Link>
      </div>
    </motion.div>
  )
}

