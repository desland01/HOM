'use client'

import { FadeIn, TextReveal, ScaleReveal } from '@/components/ui/animations'
import Link from 'next/link'

const MAINTENANCE_PLANS = [
  {
    title: "Essential Care",
    price: "$99",
    period: "/mo",
    features: ["Instant Edge Hosting so your site never goes down", "Nightly backups so you never lose a single page", "Security patches applied without you lifting a finger", "1 hour of manual content updates every month"]
  },
  {
    title: "Performance Care",
    price: "$199",
    period: "/mo",
    features: ["Everything in Essential, plus guaranteed speed checks", "Priority support when you need something changed yesterday", "Comprehensive Citation Clean-Up to fix messy NAP data", "3 hours of manual content updates to keep your site sharp"],
    isPopular: true
  }
]

const SEO_PLANS = [
  {
    title: "Local Authority",
    price: "$499",
    period: "/mo",
    features: ["Core Citation Builder for local authority", "1 blog post per month targeting local geo-modifiers", "We track your rankings so you see the real ROI", "Quarterly game plan so you always know the next move"]
  },
  {
    title: "Market Scaler",
    price: "$999",
    period: "/mo",
    features: ["Pro Citation Builder: 1 monthly Offer + 2 updates and 2 photo uploads", "5 monthly articles targeting competitors' exact gaps", "Advanced local link building (directories & associations)", "Bi-weekly strategy calls to steal more market share"],
    isPopular: true
  },
  {
    title: "Elite Growth",
    price: "$1,999",
    period: "/mo",
    features: ["A.E.O. Power Pack: Full Answer Engine Optimization", "9 monthly articles + 4 how-to videos for total authority", "1 High-DA backlink + 2 local guest posts per month", "We deploy the full AI content engine while you focus on jobs"]
  }
]

const AL_CARTE = [
  { name: "Citation Clean-Up", price: "$699", desc: "Done by a human. We don't just pay a data aggregator or leave this one to AI. If your citations are a mess, it takes a human touch. One-time fee, not necessary if you're just starting out.", link: "/services/citation-cleanup" },
  { name: "Additional Google Profile", price: "$199/mo", desc: "For businesses with multiple GBP locations or those expanding into a new territory. Your primary Google listing is already included in your build plan.", link: "/services/gbp-management" }
]

export function AddOnsAndBundles() {
  return (
    <section className="py-24 lg:py-40 bg-brand-ivory relative text-brand-charcoal border-t border-brand-charcoal/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 relative z-10 text-left">
        
        {/* Header */}
        <div className="mb-20 lg:mb-32 text-left">
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6 text-left">Add More Firepower</FadeIn>
          <TextReveal
            text="STACK THE DECK."
            className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase mb-8 text-left"
          />
          <FadeIn className="text-xl text-brand-charcoal/60 font-medium max-w-2xl text-left">
            Your site is the foundation. These tools turn it into an engine that works while you are on the job.
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Maintenance & SEO */}
          <div className="lg:col-span-8 space-y-20 lg:space-y-32">
            
            {/* 1. Maintenance Care Plans */}
            <div>
              <FadeIn className="flex items-center gap-4 mb-10 border-b border-brand-charcoal/10 pb-6 text-left">
                <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight text-left">Keep It Running<br/><span className="text-brand-charcoal/40">Maintenance Plans</span></h3>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {MAINTENANCE_PLANS.map((plan, i) => (
                  <ScaleReveal key={i} delay={i * 0.1} className={`p-8 border-2 ${plan.isPopular ? 'border-brand-charcoal bg-white' : 'border-brand-charcoal/5 bg-white/50 hover:border-brand-charcoal/20'} relative flex flex-col transition-all duration-300 hover:shadow-xl text-left`}>
                    {plan.isPopular && <div className="absolute -top-3 right-6 bg-brand-mustard text-brand-charcoal text-xs font-sora font-extrabold tracking-widest uppercase px-3 py-1.5">Recommended</div>}
                    <div className="text-sm font-sora font-extrabold tracking-widest uppercase text-brand-charcoal/40 mb-2 text-left">{plan.title}</div>
                    <div className="mb-8 text-left"><span className="text-4xl font-sora font-extrabold tracking-tighter">{plan.price}</span><span className="text-brand-charcoal/40 font-bold">{plan.period}</span></div>
                    <ul className="space-y-3 flex-grow text-left">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm font-medium text-left">
                          <span className="text-brand-mustard font-sora font-extrabold leading-none mt-0.5">/</span>
                          <span className="text-brand-charcoal/80">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </ScaleReveal>
                ))}
              </div>
            </div>

            {/* 2. SEO + Content Growth Plans */}
            <div>
              <FadeIn className="flex items-center gap-4 mb-10 border-b border-brand-charcoal/10 pb-6 text-left">
                <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight text-left">Get Found First<br/><span className="text-brand-charcoal/40">SEO Growth Plans</span></h3>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {SEO_PLANS.map((plan, i) => (
                  <ScaleReveal key={i} delay={i * 0.1} className={`p-8 border-2 ${plan.isPopular ? 'border-brand-charcoal bg-white' : 'border-brand-charcoal/5 bg-white/50 hover:border-brand-charcoal/20'} relative flex flex-col transition-all duration-300 hover:shadow-xl text-left`}>
                    {plan.isPopular && <div className="absolute -top-3 right-6 bg-brand-mustard text-brand-charcoal text-xs font-sora font-extrabold tracking-widest uppercase px-3 py-1.5">Recommended</div>}
                    <div className="text-sm font-sora font-extrabold tracking-widest uppercase text-brand-charcoal/40 mb-2 h-10 text-left">{plan.title}</div>
                    <div className="mb-8 text-left"><span className="text-4xl font-sora font-extrabold tracking-tighter">{plan.price}</span><span className="text-brand-charcoal/40 font-bold">{plan.period}</span></div>
                    <ul className="space-y-3 flex-grow text-left">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm font-medium text-left">
                          <span className="text-brand-mustard font-sora font-extrabold leading-none mt-0.5">/</span>
                          <span className="text-brand-charcoal/80">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </ScaleReveal>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: A La Carte */}
          <div className="lg:col-span-4 relative">
            <div>
              <FadeIn className="flex items-center gap-4 mb-10 border-b border-brand-charcoal/10 pb-6 text-left">
                <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight text-left">Infrastructure<br/><span className="text-brand-charcoal/40">Add-Ons</span></h3>
              </FadeIn>
              <div className="flex flex-col gap-4">
                {AL_CARTE.map((item, i) => (
                  <ScaleReveal key={i} delay={i * 0.05} className="p-8 bg-white border-2 border-brand-charcoal/5 flex flex-col transition-all duration-300 hover:shadow-xl hover:border-brand-mustard text-left">
                    <div className="flex justify-between items-start mb-4 text-left">
                      <div className="font-sora font-extrabold uppercase tracking-tight text-sm pr-4 text-left">{item.name}</div>
                      <div className="font-sora font-extrabold text-brand-mustard text-left">{item.price}</div>
                    </div>
                    <div className="text-sm font-medium text-brand-charcoal/70 mb-6 text-left">{item.desc}</div>
                    {item.link && (
                      <div className="mt-auto text-left">
                        <Link href={item.link} className="text-xs font-sora font-extrabold uppercase tracking-widest text-brand-mustard hover:text-brand-charcoal transition-colors underline underline-offset-4 decoration-brand-charcoal/20 hover:decoration-brand-mustard text-left">
                          Learn more →
                        </Link>
                      </div>
                    )}
                  </ScaleReveal>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
