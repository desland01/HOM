'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const revealVariant: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <main className="min-h-screen">
      {/* STICKY TOP BANNER */}
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 h-12 bg-brand-mustard flex items-center justify-center z-50 px-12 shadow-sm">
          <span className="text-brand-charcoal font-bold text-xs sm:text-sm tracking-widest uppercase text-center">
            PILOT OFFER: 50% OFF — Only 5 Spots Available
          </span>
          <button 
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-charcoal text-xl font-bold opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Close banner"
          >
            ×
          </button>
        </div>
      )}

      {/* HERO */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-24 px-6 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.img 
              variants={revealVariant}
              src="/HM-Logo.png" 
              alt="Homeowner Marketers" 
              className="h-16 sm:h-24 w-auto mb-10 object-contain invert" // Assumes logo is white originally; invert makes it blackish
            />
            
            <motion.div variants={revealVariant} className="mb-8 inline-block border-2 border-brand-mustard/30 bg-white px-8 py-6 rounded-2xl shadow-lg relative">
              <div className="text-5xl sm:text-6xl font-sora font-extrabold text-brand-mustard leading-none tracking-tight mb-2">50%</div>
              <div className="text-sm font-bold tracking-widest uppercase text-brand-charcoal">OFF UPFRONT INVESTMENT</div>
              <div className="text-sm text-brand-charcoal/60 mt-1">First 5 Pilot Partners Only</div>
            </motion.div>

            <motion.h1 variants={revealVariant} className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-brand-charcoal mb-6 tracking-tight uppercase max-w-4xl">
              Prove It First, Dominate Later
            </motion.h1>
            
            <motion.p variants={revealVariant} className="text-lg sm:text-xl text-brand-charcoal/70 max-w-3xl mx-auto mb-10 leading-relaxed">
              A Geo-Silo website and SEO engine built exclusively for painting companies. We build it in <strong className="text-brand-charcoal">14 days</strong>, prove it generates leads for <strong className="text-brand-charcoal">90 days</strong>, and you only commit when you've seen the results. <strong className="text-brand-mustard bg-brand-mustard/10 px-2 py-0.5 rounded">You don't pay a dime until your site is approved and live.</strong>
            </motion.p>

            <motion.div variants={revealVariant}>
              <Link href="#tiers" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sora font-bold text-white bg-brand-charcoal hover:bg-black transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl text-lg uppercase tracking-wider">
                Claim Your Pilot Spot <span>↓</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* THE PROBLEM */}
      <section className="py-20 sm:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="text-center mb-16"
          >
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-brand-mustard mb-4">The Problem</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-brand-charcoal mb-4">You've Been Burned Before</h2>
            <p className="text-lg text-brand-charcoal/60 max-w-2xl mx-auto">You don't need more hype. You need a system.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "12-Month Contracts", desc: "Locked in before a single lead. Agencies get paid whether you grow or not." },
              { title: "Cookie-Cutter Sites", desc: "Template websites that look like every other painter in your city. Google ignores them." },
              { title: "Vague Reporting", desc: "Monthly PDFs full of impressions and clicks. Zero clarity on actual booked jobs." },
              { title: "Slow Timelines", desc: "3-6 months before anything happens. Meanwhile you're still paying." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealVariant}
                className="bg-brand-ivory border border-black/5 rounded-2xl p-8 hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <h4 className="text-xl font-bold text-brand-charcoal mb-2">{item.title}</h4>
                <p className="text-brand-charcoal/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* THE SOLUTION */}
      <section className="py-20 sm:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="text-center mb-16"
          >
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-brand-mustard mb-4">The Solution</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-brand-charcoal mb-4">A System That Proves Itself</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Geo-Silo Architecture", desc: "City-specific location hubs with nested service pages. Google sees you as the local authority, not just another painter with a website." },
              { title: "90-Day Proof Period", desc: "Your upfront investment covers the complete build AND 3 full months of SEO management. Real leads, real data, real results before any commitment." },
              { title: "We Build First. You Pay When It's Live.", desc: "We build your entire site before you pay. You review it, request changes, and only pay once you love it and the site goes live." },
              { title: "Next.js on Vercel Edge", desc: "Sub-second load times, 90+ PageSpeed guaranteed. Your site runs on the same infrastructure as Fortune 500 companies." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealVariant}
                className="bg-white border border-black/5 rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-mustard/20 text-brand-mustard flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="text-xl font-bold text-brand-charcoal mb-2">{item.title}</h4>
                <p className="text-brand-charcoal/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* TIERS */}
      <section id="tiers" className="py-20 sm:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-brand-mustard mb-4">Pilot Packages</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-brand-charcoal mb-4">Choose Your Tier</h2>
            <p className="text-lg text-brand-charcoal/60 max-w-2xl mx-auto">Every tier ships in 14 days with a 90+ PageSpeed guarantee. Your upfront investment covers the full build plus 90 days of management.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} className="flex items-center justify-center gap-3 mb-16">
            <span className="text-sm font-bold text-brand-charcoal/50 uppercase tracking-widest">Only 5 pilot spots available</span>
            <div className="flex gap-1.5">
              {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-3 rounded-full bg-brand-mustard" />)}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* TIER 1 */}
            <TierCard 
              name="Tier 1" title="Local Authority" revenue="$250k - $500k painters"
              save="$2,250" original="$4,500" price="$2,250"
              buildFeatures={[
                "Custom Next.js web application",
                "1 primary target city location hub",
                "4 core service pages",
                "PaintingContractor JSON-LD schema",
                "Conversion architecture",
                "Lead funnel integration"
              ]}
              monthlyFeatures={[
                "GBP entity synchronization",
                "2x reverse-silo blog posts / mo",
                "DataForSEO keyword tracking",
                "Quarterly strategy call"
              ]}
              growthContracts={[
                { term: "6-month", price: "$850/mo" },
                { term: "12-month", price: "$750/mo" },
                { term: "24-month", price: "$650/mo" }
              ]}
            />

            {/* TIER 2 */}
            <TierCard 
              name="Tier 2" title="Territory Dominator" revenue="$500k - $1.5M painters"
              save="$3,400" original="$6,800" price="$3,400" isPopular
              buildFeatures={[
                "Everything in Local Authority, plus:",
                "3 secondary location hubs",
                "12 nested service pages",
                "Interactive project gallery",
                "Areas We Serve matrix"
              ]}
              monthlyFeatures={[
                "Everything in Local Authority, plus:",
                "4x reverse-silo blog posts / mo",
                "Weekly GBP optimization",
                "Review response management",
                "Bi-monthly strategy calls"
              ]}
              growthContracts={[
                { term: "6-month", price: "$1,400/mo" },
                { term: "12-month", price: "$1,250/mo" },
                { term: "24-month", price: "$1,100/mo" }
              ]}
            />

            {/* TIER 3 */}
            <TierCard 
              name="Tier 3" title="Enterprise Takeover" revenue="$1.5M+ painters"
              save="$5,250" original="$10,500" price="$5,250"
              buildFeatures={[
                "Everything in Territory Dominator, plus:",
                "6 location hubs (metro domination)",
                "Unlimited service pages",
                "Custom paint cost calculator",
                "Multi-step qualification funnels",
                "Full FAQ schema mapping"
              ]}
              monthlyFeatures={[
                "Everything in Territory Dominator, plus:",
                "8x reverse-silo blog posts / mo",
                "Automated review sequences",
                "Competitor gap analysis",
                "Dedicated Slack channel",
                "Monthly strategy calls"
              ]}
              growthContracts={[
                { term: "6-month", price: "$2,500/mo" },
                { term: "12-month", price: "$2,250/mo" },
                { term: "24-month", price: "$2,000/mo" }
              ]}
            />
          </div>
        </div>
      </section>

      <Divider />

      {/* HOW IT WORKS */}
      <section className="py-20 sm:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-20">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-brand-mustard mb-4">How It Works</div>
            <h2 className="text-3xl sm:text-5xl font-bold text-brand-charcoal mb-4">From Handshake to Leads in 104 Days</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-black/10 z-0"></div>
            
            {[
              { step: "1", time: "Week 1", title: "Plan", desc: "We audit your market, map your competitors, and design your Geo-Silo architecture." },
              { step: "2", time: "Days 8-14", title: "Build", desc: "Your custom Next.js site goes live with full schema, conversion architecture, and GBP sync." },
              { step: "3", time: "Days 15-104", title: "Prove", desc: "90 days of aggressive SEO: blog content, GBP optimization, keyword tracking. You see real leads." },
              { step: "4", time: "Month 4+", title: "Grow", desc: "Choose your growth contract and we scale your territory. Or walk away — your call." }
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariant} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand-charcoal text-white font-bold text-xl flex items-center justify-center mb-6 shadow-xl border-4 border-brand-ivory">
                  {item.step}
                </div>
                <div className="text-xs font-bold text-brand-mustard uppercase tracking-wider mb-2">{item.time}</div>
                <h4 className="text-xl font-bold text-brand-charcoal mb-2">{item.title}</h4>
                <p className="text-brand-charcoal/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* FINAL CTA */}
      <section className="py-24 sm:py-32 px-6 text-center bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-brand-mustard mb-8">Limited Availability</div>
            
            <div className="mb-10 inline-block">
              <div className="text-6xl sm:text-8xl font-sora font-extrabold text-brand-mustard leading-none tracking-tight mb-2">50% OFF</div>
              <div className="text-lg text-white/70 mt-4">Starting at just $2,250 (normally $4,500)</div>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold mb-6">5 Pilot Spots. First Come, First Served.</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-4">We're opening this program to just 5 painting companies who want to prove that a real SEO system works before committing long-term.</p>
            <p className="text-brand-mustard font-medium mb-12">Remember: you don't pay until your site is live and you love it.</p>
            
            <Link href="mailto:hello@homeownermarketers.com?subject=Pilot%20Partner%20Application" className="inline-flex items-center gap-2 px-10 py-5 rounded-full font-sora font-bold text-brand-charcoal bg-brand-mustard hover:bg-yellow-500 transition-all hover:-translate-y-1 shadow-xl text-lg uppercase tracking-wider">
              Claim Your Pilot Spot
            </Link>
            
            <div className="mt-12 text-sm text-white/50">
              Questions? Email us at <a href="mailto:hello@homeownermarketers.com" className="text-brand-mustard hover:text-white transition-colors">hello@homeownermarketers.com</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 text-center border-t border-black/10 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <img src="/HM-Logo.png" alt="Homeowner Marketers" className="h-10 mb-6 invert opacity-80" />
          <p className="text-brand-charcoal/80 mb-2"><strong>Built in 14 days. Proven in 90.</strong> You only commit when you've seen the results.</p>
          <p className="text-sm text-brand-charcoal/60 mb-6">Ready to get started? Email us and we will scope your project within 24 hours.</p>
          <p className="text-xs text-brand-charcoal/40">&copy; 2026 Homeowner Marketers. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function Divider() {
  return <hr className="border-0 h-px bg-black/5 mx-6 sm:mx-20" />
}

function TierCard({ name, title, revenue, save, original, price, buildFeatures, monthlyFeatures, growthContracts, isPopular }: any) {
  return (
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealVariant}
      className={`relative bg-brand-ivory border ${isPopular ? 'border-brand-mustard shadow-2xl scale-105 z-10' : 'border-black/10'} rounded-2xl p-8 flex flex-col h-full`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-mustard text-brand-charcoal text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <div className="inline-block bg-green-600 text-white text-xs font-extrabold px-3 py-1 rounded-full tracking-wider mb-4">SAVE {save}</div>
        <div className="text-xs font-bold text-brand-charcoal/50 tracking-widest uppercase mb-1">{name}</div>
        <h3 className="text-2xl font-bold text-brand-charcoal mb-1">{title}</h3>
        <div className="text-sm text-brand-charcoal/60 mb-6">{revenue}</div>
        
        <div className="text-xl font-bold text-brand-charcoal/40 line-through mb-1">{original}</div>
        <div className="text-5xl font-extrabold text-brand-charcoal tracking-tight mb-2">{price}</div>
        <div className="text-sm text-brand-charcoal/60">Pilot price — build + first 90 days</div>
        <div className="text-xs italic text-brand-mustard mt-1 font-medium">Due only after site approval</div>
      </div>

      <div className="space-y-6 flex-grow">
        <div>
          <div className="text-xs font-bold text-brand-charcoal uppercase tracking-widest border-b border-black/10 pb-2 mb-4">The Build (14 Days)</div>
          <ul className="space-y-3">
            {buildFeatures.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-brand-charcoal/80">
                <CheckIcon className="w-5 h-5 text-brand-mustard flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold text-brand-charcoal uppercase tracking-widest border-b border-black/10 pb-2 mb-4">Monthly Engine (90 Days)</div>
          <ul className="space-y-3">
            {monthlyFeatures.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-brand-charcoal/80">
                <CheckIcon className="w-5 h-5 text-brand-mustard flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-black/10">
        <div className="text-xs font-bold text-brand-charcoal/50 uppercase tracking-widest mb-4">Growth Contracts (Month 4+)</div>
        <ul className="space-y-2">
          {growthContracts.map((gc: any, i: number) => (
            <li key={i} className="flex justify-between items-center text-sm p-2 rounded bg-white/50 border border-black/5">
              <span className="text-brand-charcoal/60">{gc.term}</span>
              <span className="font-bold text-brand-charcoal">{gc.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  )
}
