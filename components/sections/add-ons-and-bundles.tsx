'use client'

import { FadeIn, TextReveal, ScaleReveal } from '@/components/ui/animations'

const MAINTENANCE_PLANS = [
  {
    title: "Essential Care",
    price: "$99",
    period: "/mo",
    features: ["Daily Automated Backups", "24/7 Uptime Monitoring", "Core & Plugin Updates", "1 hr/mo Content Updates"]
  },
  {
    title: "Performance Care",
    price: "$199",
    period: "/mo",
    features: ["Everything in Essential", "Monthly Speed Audits", "Priority Email Support", "3 hrs/mo Content Updates"],
    isPopular: true
  }
]

const SEO_PLANS = [
  {
    title: "Local Foundation",
    price: "$499",
    period: "/mo",
    features: ["2 Local Blog Posts/mo", "GBP Post Synchronization", "Basic Keyword Tracking", "Quarterly Strategy Report"]
  },
  {
    title: "Market Dominator",
    price: "$999",
    period: "/mo",
    features: ["4 Authority Articles/mo", "Weekly GBP Optimization", "Advanced Rank Tracking", "Monthly Strategy Call"],
    isPopular: true
  },
  {
    title: "Enterprise Takeover",
    price: "$1,999",
    period: "/mo",
    features: ["Max impact: 50 pages indexed at once", "Impact fades without Ultimate Arsenal", "Automated Review Sequences", "Competitor Gap Analysis"]
  }
]

const AI_TOOLS = [
  {
    title: "Missed Call Text Back",
    price: "$149",
    period: "/mo",
    desc: "Never lose a lead. AI instantly texts back anyone who calls while you're on the job, securing the lead before they call the next painter."
  },
  {
    title: "AI Booking Assistant",
    price: "$299",
    period: "/mo",
    desc: "A custom-trained AI chatbot that qualifies leads, answers pricing questions, and books estimates 24/7 directly on your site."
  }
]

const BUNDLES = [
  {
    title: "The Growth Stack",
    price: "$1,150",
    period: "/mo",
    originalPrice: "$1,347/mo",
    desc: "Performance Care + Market Dominator SEO + Missed Call Text Back. Everything you need to scale your lead flow consistently.",
    savings: "$197"
  },
  {
    title: "The Ultimate Arsenal",
    price: "$2,250",
    period: "/mo",
    originalPrice: "$2,646/mo",
    desc: "Performance Care + Enterprise Takeover SEO + AI Booking Assistant + Missed Call Text Back. Total market domination.",
    savings: "$396"
  }
]

const AL_CARTE = [
  { name: "Custom Logo Design", price: "$499", desc: "Professional, high-contrast branding." },
  { name: "Additional Service Page", price: "$250", desc: "1,000+ words, SEO optimized." },
  { name: "Location Hub Page", price: "$350", desc: "Geo-targeted for a specific city." },
  { name: "Google Business Profile Setup", price: "$199", desc: "Full optimization and entity creation." }
]

export function AddOnsAndBundles() {
  return (
    <section className="py-24 lg:py-40 bg-brand-ivory relative text-brand-charcoal border-t border-brand-charcoal/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 lg:mb-32">
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">Growth & Operations</FadeIn>
          <TextReveal 
            text="SCALE YOUR ARSENAL." 
            className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase mb-8" 
          />
          <FadeIn className="text-xl text-brand-charcoal/50 font-medium max-w-2xl">
            From essential maintenance to automated lead generation. Add the tools you need to dominate your market.
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Maintenance & SEO */}
          <div className="lg:col-span-7 space-y-20 lg:space-y-32">
            
            {/* 1. Maintenance Care Plans */}
            <div>
              <FadeIn className="flex items-center gap-4 mb-10 border-b border-brand-charcoal/10 pb-6">
                <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight">Website Maintenance<br/><span className="text-brand-charcoal/40">Care Plans</span></h3>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {MAINTENANCE_PLANS.map((plan, i) => (
                  <ScaleReveal key={i} delay={i * 0.1} className={`p-8 border-2 ${plan.isPopular ? 'border-brand-charcoal bg-white' : 'border-brand-charcoal/5 bg-white/50'} relative flex flex-col`}>
                    {plan.isPopular && <div className="absolute -top-3 right-6 bg-brand-mustard text-brand-charcoal text-[10px] font-sora font-extrabold tracking-widest uppercase px-3 py-1">Recommended</div>}
                    <div className="text-sm font-sora font-extrabold tracking-widest uppercase text-brand-charcoal/40 mb-2">{plan.title}</div>
                    <div className="mb-8"><span className="text-4xl font-sora font-extrabold tracking-tighter">{plan.price}</span><span className="text-brand-charcoal/40 font-bold">{plan.period}</span></div>
                    <ul className="space-y-3 flex-grow">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm font-medium">
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
              <FadeIn className="flex items-center gap-4 mb-10 border-b border-brand-charcoal/10 pb-6">
                <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight">SEO + Content<br/><span className="text-brand-charcoal/40">Growth Plans</span></h3>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {SEO_PLANS.map((plan, i) => (
                  <ScaleReveal key={i} delay={i * 0.1} className={`p-8 border-2 ${plan.isPopular ? 'border-brand-charcoal bg-white' : 'border-brand-charcoal/5 bg-white/50'} relative flex flex-col`}>
                    {plan.isPopular && <div className="absolute -top-3 right-6 bg-brand-mustard text-brand-charcoal text-[10px] font-sora font-extrabold tracking-widest uppercase px-3 py-1">Recommended</div>}
                    <div className="text-sm font-sora font-extrabold tracking-widest uppercase text-brand-charcoal/40 mb-2 h-10">{plan.title}</div>
                    <div className="mb-8"><span className="text-4xl font-sora font-extrabold tracking-tighter">{plan.price}</span><span className="text-brand-charcoal/40 font-bold">{plan.period}</span></div>
                    <ul className="space-y-3 flex-grow">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3 text-xs font-medium">
                          <span className="text-brand-mustard font-sora font-extrabold leading-none mt-0.5">/</span>
                          <span className="text-brand-charcoal/80">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </ScaleReveal>
                ))}
              </div>
            </div>

            {/* 5. A La Carte */}
            <div>
              <FadeIn className="flex items-center gap-4 mb-10 border-b border-brand-charcoal/10 pb-6">
                <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight">A La Carte<br/><span className="text-brand-charcoal/40">Add-On Services</span></h3>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AL_CARTE.map((item, i) => (
                  <ScaleReveal key={i} delay={i * 0.05} className="p-6 bg-white border border-brand-charcoal/5 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-sora font-extrabold uppercase tracking-tight text-sm pr-4">{item.name}</div>
                      <div className="font-sora font-extrabold text-brand-mustard">{item.price}</div>
                    </div>
                    <div className="text-xs font-medium text-brand-charcoal/60">{item.desc}</div>
                  </ScaleReveal>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: AI & Bundles (Sticky) */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-40 space-y-16">
              
              {/* 3. AI Tools */}
              <div>
                <FadeIn className="flex items-center gap-4 mb-8">
                  <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight">AI Automation<br/><span className="text-brand-charcoal/40">Lead Generation</span></h3>
                </FadeIn>
                <div className="flex flex-col gap-4">
                  {AI_TOOLS.map((tool, i) => (
                    <FadeIn key={i} delay={i * 0.1} className="p-8 bg-brand-charcoal text-brand-ivory border border-brand-charcoal flex flex-col group hover:border-brand-mustard transition-colors">
                      <div className="flex justify-between items-end mb-4">
                        <div className="text-lg font-sora font-extrabold tracking-widest uppercase text-brand-mustard">{tool.title}</div>
                        <div className="text-right"><span className="text-3xl font-sora font-extrabold tracking-tighter">{tool.price}</span><span className="text-brand-ivory/40 text-sm font-bold">{tool.period}</span></div>
                      </div>
                      <p className="text-brand-ivory/60 text-sm font-medium leading-relaxed">{tool.desc}</p>
                    </FadeIn>
                  ))}
                </div>
              </div>

              {/* 4. Save with Bundles */}
              <div className="bg-brand-mustard p-8 sm:p-10 border-2 border-brand-charcoal relative">
                <div className="absolute -top-4 -right-4 bg-brand-charcoal text-brand-ivory text-xs font-sora font-extrabold tracking-widest uppercase px-4 py-2 rotate-3 shadow-xl">
                  Best Value
                </div>
                <FadeIn className="mb-8">
                  <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-2">Save With Bundles</h3>
                  <p className="text-sm font-sora font-bold tracking-widest uppercase text-brand-charcoal/60">Recommended Packages</p>
                </FadeIn>
                
                <div className="flex flex-col gap-6">
                  {BUNDLES.map((bundle, i) => (
                    <ScaleReveal key={i} delay={i * 0.1} className="p-6 bg-white border-2 border-brand-charcoal">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="text-sm font-sora font-extrabold tracking-widest uppercase text-brand-charcoal">{bundle.title}</div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mt-1">Save {bundle.savings}/mo</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-sora font-bold line-through text-brand-charcoal/30">{bundle.originalPrice}</div>
                          <div><span className="text-2xl font-sora font-extrabold tracking-tighter">{bundle.price}</span><span className="text-brand-charcoal/40 text-xs font-bold">{bundle.period}</span></div>
                        </div>
                      </div>
                      <p className="text-brand-charcoal/70 text-xs font-medium leading-relaxed mt-4 border-t border-brand-charcoal/10 pt-4">{bundle.desc}</p>
                    </ScaleReveal>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
