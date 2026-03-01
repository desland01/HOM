'use client'

import { useState } from 'react'
import { FadeIn, TextReveal, Parallax } from '@/components/ui/animations'
import { UnifiedModal } from '@/components/ui/modals'

const featureDetails: Record<string, any> = {
  "geo-silos": {
    title: "The Architecture of Abundance",
    description: "We build dedicated hubs for every city and service you offer. Instead of one generic site, you have a massive net catching high-value jobs across your entire region.",
    tiers: {
      t1: "1 city hub + 5 nested service pages. Perfect for securing your home base.",
      t2: "4 location hubs + 20 service pages. Capture wealthy surrounding suburbs.",
      t3: "10 city hubs + 70 service pages. Total metro coverage area."
    }
  },
  "aeo": {
    title: "A.E.O. — Answer Engine Optimization",
    description: "Google is changing. Homeowners now ask ChatGPT and Google AI for recommendations. If your site isn't structured for AI bots to read, you don't exist.",
    tiers: {
      t1: "Basic JSON-LD Schema markup for local business identification.",
      t2: "Extended Schema for services and FAQs plus AI bot crawl optimization.",
      t3: "Full A.E.O. suite including llms.txt integration and expert attribution signals."
    }
  },
  "reverse-silos": {
    title: "High-Velocity Content Engine",
    description: "Every article we publish answers a real question homeowners are typing into Google. We intercept them at the moment of intent and lead them directly to your calendar.",
    tiers: {
      t1: "1 targeted monthly blog post. Building authority.",
      t2: "5 total posts per month. High-velocity growth mode.",
      t3: "9 total posts per month + 4 how-to videos & FAQ pages. Absolute authority."
    }
  },
  "gbp-management": {
    title: "Map Pack Prominence",
    description: "We keep your Google Business Profile optimized and active. Pure ranking signals through photo updates, offers, and citation syndication.",
    tiers: {
      t1: "Core citation builder + GBP optimization. Basic NAP consistency.",
      t2: "Pro citation engine. 1 monthly Offer + 2 updates and 2 photos/mo.",
      t3: "Premium citation syndication + maximum profile activity signals."
    }
  },
  "page-speed": {
    title: "Sub-Second Edge Hosting",
    description: "A slow site bleeds money. Every second of delay drops conversion by 20%. We build on Next.js and host on a global Edge Network.",
    tiers: {
      t1: "Instant Edge Hosting with full Conversion Rate Optimized Architecture.",
      t2: "Instant Edge Hosting with full Conversion Rate Optimized Architecture.",
      t3: "Instant Edge Hosting with full Conversion Rate Optimized Architecture."
    }
  },
  "reports": {
    title: "Abundance Tracking & Intelligence",
    description: "No more vague PDFs. You see exactly where you rank, how many people found you, and what we are doing next.",
    tiers: {
      t1: "Keyword Rank Tracking. You see where you rank for every keyword.",
      t2: "Adds Competitor Gap Analysis. We spot trends and serve the market faster.",
      t3: "Full competitive intelligence plus monthly growth strategy calls."
    }
  },
  "ai-web-apps": {
    title: "Pre-Qualified Estimating",
    description: "Stop wasting nights driving to estimates for price shoppers. Our multi-step forms and AI chat bots qualify every lead before they reach your inbox.",
    tiers: {
      t1: "Multi-Step Contact Form. Filters budget shoppers instantly.",
      t2: "AI Chat Widget (100 convos/mo). Captures after-hours leads automatically.",
      t3: "AI Chat Widget (UNLIMITED). Fully autonomous pre-qualification and booking."
    }
  },
  "backlinks": {
    title: "Authority Link Building",
    description: "Google trusts websites that other authoritative websites link to. We do the hard work of getting real, local businesses to point to you.",
    tiers: {
      t1: "Natural foundation building through directory citations.",
      t2: "Easy-win local link building sourcing industry-specific directories.",
      t3: "1 new high-DA backlink + 2 local guest posts per month."
    }
  }
}

export const ComparisonTable = () => {
  const [selectedFeature, setSelectedFeature] = useState<any | null>(null)

  const check = (
    <div className="mx-auto w-6 h-6 rounded-full bg-brand-mustard/20 flex items-center justify-center">
      <svg className="w-3.5 h-3.5 text-brand-mustard" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )

  const xmark = (
    <div className="mx-auto w-6 h-6 flex items-center justify-center opacity-20">
      <div className="w-4 h-[2px] bg-brand-charcoal rotate-45 relative">
        <div className="w-4 h-[2px] bg-brand-charcoal -rotate-90 absolute top-0 left-0"></div>
      </div>
    </div>
  )

  return (
    <section className="py-24 lg:py-40 px-6 sm:px-12 bg-white relative">
      <UnifiedModal 
        isOpen={!!selectedFeature} 
        onClose={() => setSelectedFeature(null)} 
        type="tier" 
        title={selectedFeature?.title || ''}
      >
        <div className="p-2 sm:p-4">
          <p className="text-xl text-brand-charcoal/70 mb-12 leading-relaxed">{selectedFeature?.description}</p>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-brand-ivory border border-brand-charcoal/10">
              <h4 className="text-xs font-sora font-extrabold uppercase text-brand-mustard mb-4">Foundation Tier</h4>
              <p className="text-brand-charcoal font-medium">{selectedFeature?.tiers.t1}</p>
            </div>
            <div className="p-6 bg-brand-mustard/5 border-2 border-brand-mustard">
              <h4 className="text-xs font-sora font-extrabold uppercase text-brand-mustard mb-4">Expansion Tier</h4>
              <p className="text-brand-charcoal font-medium">{selectedFeature?.tiers.t2}</p>
            </div>
            <div className="p-6 bg-brand-charcoal text-brand-ivory">
              <h4 className="text-xs font-sora font-extrabold uppercase text-brand-ivory/40 mb-4">Metro Tier</h4>
              <p className="font-medium">{selectedFeature?.tiers.t3}</p>
            </div>
          </div>
        </div>
      </UnifiedModal>

      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">Technical Breakdown</FadeIn>
            <TextReveal
              text="THE ENGINE SPECS."
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase mb-8"
            />
          </div>
          <Parallax offset={20}>
            <FadeIn className="text-xl text-brand-charcoal/50 max-w-sm mb-4 lg:text-right font-medium">
              Every deliverable. Zero guesswork. Tap the info icons to see how we build for abundance.
            </FadeIn>
          </Parallax>
        </div>

        <FadeIn delay={0.2} className="w-full relative">
          <div className="overflow-x-auto pb-8">
            <table className="w-full min-w-[900px] border-collapse border border-brand-charcoal/10 font-medium">
            <thead>
              <tr className="bg-brand-ivory border-b border-brand-charcoal/10 text-left text-sm uppercase tracking-[0.1em] font-sora font-extrabold text-brand-charcoal/50">
                <th className="p-6 lg:p-8 min-w-[320px]">Feature</th>
                <th className="p-6 lg:p-8 text-center text-brand-charcoal w-1/4">Foundation</th>
                <th className="p-6 lg:p-8 text-center text-brand-mustard bg-brand-mustard/5 w-1/4">Expansion</th>
                <th className="p-6 lg:p-8 text-center text-brand-charcoal w-1/4">Metro</th>
              </tr>
            </thead>
            <tbody className="text-brand-charcoal/80">
              
              {/* THE BUILD */}
              <tr className="bg-brand-charcoal text-brand-ivory text-xs font-sora font-extrabold tracking-[0.3em] uppercase">
                <td colSpan={4} className="p-4 lg:px-8">The Build Asset (Owned Forever)</td>
              </tr>
              
              <TableRow title="Location Hubs" t1="1" t2="4" t3="10" isPop onInfo={() => setSelectedFeature(featureDetails['geo-silos'])} />
              <TableRow title="Nested Service Pages" t1="5" t2="20" t3="70" isPop onInfo={() => setSelectedFeature(featureDetails['geo-silos'])} />
              <TableRow title="Multi-Step Contact Form" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['ai-web-apps'])} />
              <TableRow title="Instant Edge Hosting" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['page-speed'])} />
              <TableRow title="Local SEO Data Structure" t1={check} t2={check} t3={check} isPop />
              <TableRow title="AI Chat Widget Integration" t1={xmark} t2="100 / Mo" t3="Unlimited" isPop onInfo={() => setSelectedFeature(featureDetails['ai-web-apps'])} />
              <TableRow title="Delivery Timeline" t1="14 Days" t2="14 Days" t3="14 Days" isPop borderBottom />

              {/* MONTHLY ENGINE */}
              <tr className="bg-brand-charcoal text-brand-ivory text-xs font-sora font-extrabold tracking-[0.3em] uppercase">
                <td colSpan={4} className="p-4 lg:px-8">90-Day Growth Pilot (Included)</td>
              </tr>

              <TableRow title="A.E.O. Optimization" t1="Basic" t2="Advanced" t3="Full Suite" isPop onInfo={() => setSelectedFeature(featureDetails['aeo'])} />
              <TableRow title="GBP Sync & Top 40 Citations" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['gbp-management'])} />
              <TableRow title="Blog Posts / Month" t1="1" t2="5" t3="9" isPop onInfo={() => setSelectedFeature(featureDetails['reverse-silos'])} />
              <TableRow title="Keyword Rank Tracking" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['reports'])} />
              <TableRow title="GBP Photo & Offer Updates" t1="Monthly" t2="2 Updates + 2 Photos / Mo" t3="Premium Auto" isPop onInfo={() => setSelectedFeature(featureDetails['gbp-management'])} />
              <TableRow title="Competitor Gap Analysis" t1={xmark} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['reports'])} />
              <TableRow title="Easy-Win Local Link Building" t1={xmark} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['backlinks'])} />
              <TableRow title="How-To Videos & FAQ Pages" t1={xmark} t2={xmark} t3="4 / Month" isPop onInfo={() => setSelectedFeature(featureDetails['reverse-silos'])} />
              <TableRow title="High DA Backlinks" t1={xmark} t2={xmark} t3="1 / Month" isPop onInfo={() => setSelectedFeature(featureDetails['backlinks'])} />
              <TableRow title="Local Guest Post Backlinks" t1={xmark} t2={xmark} t3="2 / Month" isPop onInfo={() => setSelectedFeature(featureDetails['backlinks'])} borderBottom />

            </tbody>
            </table>
          </div>
          <div className="absolute right-0 top-0 bottom-8 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none lg:hidden" aria-hidden="true" />
        </FadeIn>
      </div>
    </section>
  )
}

interface TableRowProps {
  title: string
  t1: React.ReactNode
  t2: React.ReactNode
  t3: React.ReactNode
  isPop?: boolean
  borderBottom?: boolean
  onInfo?: () => void
}

const TableRow = ({ title, t1, t2, t3, isPop, borderBottom = true, onInfo }: TableRowProps) => (
  <tr className={`hover:bg-brand-charcoal/[0.04] transition-colors ${borderBottom ? 'border-b border-brand-charcoal/5' : ''}`}>
    <td className="p-5 lg:p-6 pl-6 lg:pl-8 text-base flex items-center gap-3">
      {title}
      {onInfo && (
        <button
          onClick={onInfo}
          className="w-12 h-12 -m-3.5 rounded-full flex items-center justify-center flex-shrink-0 group"
          title="Learn more"
          aria-label="Learn more"
        >
          <span className="w-5 h-5 rounded-full border border-brand-charcoal/30 flex items-center justify-center text-[10px] font-bold text-brand-charcoal/50 group-hover:bg-brand-mustard group-hover:text-brand-charcoal group-hover:border-brand-mustard transition-colors">
            i
          </span>
        </button>
      )}
    </td>
    <td className="p-5 lg:p-6 text-center text-base">{t1}</td>
    <td className={`p-5 lg:p-6 text-center text-base ${isPop ? 'bg-brand-mustard/[0.02] font-semibold' : ''}`}>{t2}</td>
    <td className="p-5 lg:p-6 text-center text-base">{t3}</td>
  </tr>
)
