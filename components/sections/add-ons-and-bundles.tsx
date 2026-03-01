'use client'

import { FadeIn, TextReveal, ScaleReveal } from '@/components/ui/animations'

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
    title: "Local Foundation",
    price: "$499",
    period: "/mo",
    features: ["Core Citation Builder for local dominance", "1 blog post per month targeting local geo-modifiers", "We track your rankings so you see the real ROI", "Quarterly game plan so you always know the next move"]
  },
  {
    title: "Market Dominator",
    price: "$999",
    period: "/mo",
    features: ["Pro Citation Builder: 1 monthly Offer + 2 updates and 2 photo uploads", "5 monthly articles targeting competitors' exact gaps", "Advanced local link building (directories & associations)", "Bi-weekly strategy calls to steal more market share"],
    isPopular: true
  },
  {
    title: "Total Takeover",
    price: "$1,999",
    period: "/mo",
    features: ["Premium AI Review Management & automated responses", "9 monthly articles + 4 how-to videos pushing competitors off page 1", "1 High-DA backlink + 3 local guest posts per month", "We deploy the full AI content engine while you focus on jobs"]
  }
]

const AI_TOOLS = [
  {
    title: "Missed Call Text Back",
    price: "$149",
    period: "/mo",
    desc: "Every missed call is a $5,000 job walking straight to your competitor. This automated tool texts the homeowner back instantly while you are on the ladder. You never lose a hot lead again."
  },
  {
    title: "AI Booking Assistant",
    price: "$299",
    period: "/mo",
    desc: "Your own AI booking agent that works 24/7 while you sleep. It answers questions via web chat-bot, qualifies the lead, and books the estimate right onto your calendar."
  }
]

const BUNDLES = [
  {
    title: "The Growth Stack",
    price: "$1,150",
    period: "/mo",
    originalPrice: "$1,347/mo",
    desc: "Your site stays fast, your Google rankings climb every month with our local citation engine, and every missed call gets caught automatically. This is the system that turns a good painting business into a booked-out one.",
    savings: "$197"
  },
  {
    title: "The Ultimate Arsenal",
    price: "$2,250",
    period: "/mo",
    originalPrice: "$2,646/mo",
    desc: "Everything in the Growth Stack plus a 9-article content engine and a 24/7 AI booking agent. Your competitors will not understand how you are everywhere at once. This is total market takeover.",
    savings: "$396"
  }
]

const AL_CARTE = [
  { name: "Citation Clean-Up", price: "$699", desc: "Done by a human. We don't just pay a data aggregator or leave this one to AI. If your citations are a mess, it takes a human touch. One-time fee, not necessary if you're just starting out." },
  { name: "Additional Service Page", price: "$250", desc: "One more page ranking on Google, pulling in leads you are not getting today." },
  { name: "Location Hub Page", price: "$350", desc: "Own the search results in a new city without opening a second office." },
  { name: "Additional Google Profile", price: "$199", desc: "For additional locations. Your primary Google listing is already included in your build plan." }
]

export function AddOnsAndBundles() {
  return (
    <section className="py-24 lg:py-40 bg-brand-ivory relative text-brand-charcoal border-t border-brand-charcoal/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 lg:mb-32">
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">Add More Firepower</FadeIn>
          <TextReveal
            text="STACK THE DECK."
            className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase mb-8"
          />
          <FadeIn className="text-xl text-brand-charcoal/60 font-medium max-w-2xl">
            Your site is the foundation. These tools turn it into a lead machine that works while you are on the job.
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Maintenance & SEO */}
          <div className="lg:col-span-7 space-y-20 lg:space-y-32">
            
            {/* 1. Maintenance Care Plans */}
            <div>
              <FadeIn className="flex items-center gap-4 mb-10 border-b border-brand-charcoal/10 pb-6">
                <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight">Keep It Running<br/><span className="text-brand-charcoal/40">Maintenance Plans</span></h3>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {MAINTENANCE_PLANS.map((plan, i) => (
                  <ScaleReveal key={i} delay={i * 0.1} className={`p-8 border-2 ${plan.isPopular ? 'border-brand-charcoal bg-white' : 'border-brand-charcoal/5 bg-white/50 hover:border-brand-charcoal/20'} relative flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
                    {plan.isPopular && <div className="absolute -top-3 right-6 bg-brand-mustard text-brand-charcoal text-xs font-sora font-extrabold tracking-widest uppercase px-3 py-1.5">Recommended</div>}
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
                <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight">Get Found First<br/><span className="text-brand-charcoal/40">SEO Growth Plans</span></h3>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {SEO_PLANS.map((plan, i) => (
                  <ScaleReveal key={i} delay={i * 0.1} className={`p-8 border-2 ${plan.isPopular ? 'border-brand-charcoal bg-white' : 'border-brand-charcoal/5 bg-white/50 hover:border-brand-charcoal/20'} relative flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
                    {plan.isPopular && <div className="absolute -top-3 right-6 bg-brand-mustard text-brand-charcoal text-xs font-sora font-extrabold tracking-widest uppercase px-3 py-1.5">Recommended</div>}
                    <div className="text-sm font-sora font-extrabold tracking-widest uppercase text-brand-charcoal/40 mb-2 h-10">{plan.title}</div>
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

            {/* 5. A La Carte */}
            <div>
              <FadeIn className="flex items-center gap-4 mb-10 border-b border-brand-charcoal/10 pb-6">
                <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight">Pick What You Need<br/><span className="text-brand-charcoal/40">One-Time Add-Ons</span></h3>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AL_CARTE.map((item, i) => (
                  <ScaleReveal key={i} delay={i * 0.05} className="p-6 bg-white border border-brand-charcoal/5 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-charcoal/20">
                    <div className="flex justify-between items-start mb-2">
                      <div className="font-sora font-extrabold uppercase tracking-tight text-sm pr-4">{item.name}</div>
                      <div className="font-sora font-extrabold text-brand-mustard">{item.price}</div>
                    </div>
                    <div className="text-sm font-medium text-brand-charcoal/70">{item.desc}</div>
                  </ScaleReveal>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: AI & Bundles (Sticky) */}
          <div className="lg:col-span-5 relative">
            <div className="space-y-16 lg:h-full">
              
              {/* 3. AI Tools */}
              <div>
                <FadeIn className="flex items-center gap-4 mb-8">
                  <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight">Never Miss A Lead<br/><span className="text-brand-charcoal/40">AI Automation</span></h3>
                </FadeIn>
                <div className="flex flex-col gap-4">
                  {AI_TOOLS.map((tool, i) => (
                    <FadeIn key={i} delay={i * 0.1} className="p-8 bg-brand-charcoal text-brand-ivory border border-brand-charcoal flex flex-col group hover:border-brand-mustard transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <div className="flex justify-between items-end mb-4">
                        <div className="text-base sm:text-lg font-sora font-extrabold tracking-wider sm:tracking-widest uppercase text-brand-mustard">{tool.title}</div>
                        <div className="text-right"><span className="text-3xl font-sora font-extrabold tracking-tighter">{tool.price}</span><span className="text-brand-ivory/40 text-sm font-bold">{tool.period}</span></div>
                      </div>
                      <p className="text-brand-ivory/60 text-sm font-medium leading-relaxed">{tool.desc}</p>
                    </FadeIn>
                  ))}
                </div>
              </div>

              {/* 4. Save with Bundles */}
              <div className="bg-brand-mustard p-8 sm:p-10 border-2 border-brand-charcoal relative lg:sticky lg:top-24 z-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(201,162,39,0.3)] group">
                <div className="absolute -top-4 right-4 bg-brand-charcoal text-brand-ivory text-xs font-sora font-extrabold tracking-widest uppercase px-4 py-2 rotate-3 shadow-xl transition-transform duration-300 group-hover:rotate-6">
                  Best Value
                </div>
                <FadeIn className="mb-8">
                  <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-2">Bundle And Save</h3>
                  <p className="text-sm font-sora font-bold tracking-widest uppercase text-brand-charcoal/60">Smart Painters Pick These</p>
                </FadeIn>
                
                <div className="flex flex-col gap-6">
                  {BUNDLES.map((bundle, i) => (
                    <ScaleReveal key={i} delay={i * 0.1} className="p-6 bg-white border-2 border-brand-charcoal transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-mustard">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="text-sm font-sora font-extrabold tracking-widest uppercase text-brand-charcoal">{bundle.title}</div>
                          <div className="text-xs font-bold uppercase tracking-widest text-emerald-600 mt-1">Save {bundle.savings}/mo</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-sora font-bold line-through text-brand-charcoal/50">{bundle.originalPrice}</div>
                          <div><span className="text-2xl font-sora font-extrabold tracking-tighter">{bundle.price}</span><span className="text-brand-charcoal/40 text-xs font-bold">{bundle.period}</span></div>
                        </div>
                      </div>
                      <p className="text-brand-charcoal/70 text-sm font-medium leading-relaxed mt-4 border-t border-brand-charcoal/10 pt-4">{bundle.desc}</p>
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
