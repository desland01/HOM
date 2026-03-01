'use client'

import { useState } from 'react'
import { FadeIn, TextReveal, Parallax } from '@/components/ui/animations'
import { FeatureModal, FeatureDetail } from '@/components/ui/feature-modal'

const featureDetails: Record<string, FeatureDetail> = {
  "geo-silos": {
    title: "Own Your City on Google",
    description: "Most painters have one generic website that tries to rank everywhere and ends up ranking nowhere. We build dedicated hubs for every city and service you offer so Google knows exactly where you work.",
    tiers: {
      t1: "Your home city locked down. 1 city hub + up to 5 nested service pages so you own the search results where you already work.",
      t2: "Expands into 3 wealthy surrounding suburbs with 5 nested service pages per hub. You start pulling jobs from the high-value neighborhoods next door.",
      t3: "Full metro domination. 10 city hubs with up to 7 service pages each. Your competitors cannot show up without seeing your name first."
    }
  },
  "reverse-silos": {
    title: "Blog Content That Brings in Leads",
    description: "Every blog post we write answers a real question homeowners are typing into Google right now. Things like 'how much does it cost to paint a house in [your city]'.",
    tiers: {
      t1: "1 post per month. Builds your foundation so Google starts seeing you as the local painting authority.",
      t2: "5 total posts per month. Aggressive growth mode targeting competitors' gaps and long-tail searches that bring ready-to-buy homeowners.",
      t3: "9 total posts per month + 4 how-to videos & 4 FAQ pages. Market saturation. Your content pushes competitors off page 1."
    }
  },
  "page-speed": {
    title: "A Website That Loads Instantly",
    description: "Homeowners bounce in 3 seconds if your site is slow. Every lost visitor is a lost estimate. We build your site on the fastest hosting available.",
    tiers: {
      t1: "Instant Edge Hosting with full Conversion Rate Optimized Architecture. Guaranteed speed.",
      t2: "Instant Edge Hosting with full Conversion Rate Optimized Architecture. Guaranteed speed.",
      t3: "Instant Edge Hosting with full Conversion Rate Optimized Architecture. Guaranteed speed."
    }
  },
  "gbp-management": {
    title: "Get Into the Google Map Pack",
    description: "When homeowners search 'painters near me,' Google shows a map with 3 businesses. We keep your Google Business Profile optimized, active, and loaded with reviews.",
    tiers: {
      t1: "Essential local citation engine. GBP optimization and Top 40 citations audited for NAP consistency.",
      t2: "Advanced local citation engine. 1 monthly Offer + 2 updates and 2 photo uploads a month.",
      t3: "Automated reputation engine. Premium review management and web chat-bot creates a flywheel of 5-star signals."
    }
  },
  "reports": {
    title: "Know Exactly Where You Rank",
    description: "No more vague PDFs or 'trust us, it is working.' You see the real numbers: where you rank, how many people found you, and what we are doing next.",
    tiers: {
      t1: "Keyword Rank Tracking. You see where you rank for every keyword.",
      t2: "Adds Competitor Gap Analysis. We spot trends faster and pivot your strategy to steal their traffic.",
      t3: "Full competitive intelligence plus monthly war-room strategy calls to scale your territory."
    }
  },
  "ai-web-apps": {
    title: "Turn Visitors Into Booked Estimates",
    description: "A basic contact form loses most of your visitors. We build smart tools that keep homeowners engaged, filter out the tire-kickers, and capture details.",
    tiers: {
      t1: "Multi-Step Contact Form that filters out budget shoppers and routes quality leads to your inbox.",
      t2: "Multi-Step Contact Form plus AI Chat Widget integration (up to 100 conversations / month) to capture after-hours leads.",
      t3: "AI Chat Widget integration directly into website and CRM with UNLIMITED conversations. Trained to warm up prospects and book them onto your calendar instantly."
    }
  },
  "backlinks": {
    title: "Authority Link Building",
    description: "Google trusts websites that other authoritative websites link to. We do the hard work of getting real, local businesses to point to you.",
    tiers: {
      t1: "Natural foundation building through directory citations.",
      t2: "Easy-win local link building sourcing industry-specific directories and associations.",
      t3: "1 new high-DA backlink + 2 local backlinks through guest posts. We reach out to non-competing businesses in your area to build real local trust."
    }
  }
}

export const ComparisonTable = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(null)

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
      <FeatureModal 
        isOpen={!!selectedFeature} 
        onClose={() => setSelectedFeature(null)} 
        feature={selectedFeature} 
      />

      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">Feature Comparison</FadeIn>
            <TextReveal
              text="NO SURPRISES."
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase mb-8"
            />
          </div>
          <Parallax offset={20}>
            <FadeIn className="text-xl text-brand-charcoal/50 max-w-sm mb-4 lg:text-right font-medium">
              Every feature. Every tier. Zero guesswork. Tap the info icons to see exactly what you get.
            </FadeIn>
          </Parallax>
        </div>

        <FadeIn delay={0.2} className="w-full relative">
          <div className="overflow-x-auto pb-8">
            <table className="w-full min-w-[900px] border-collapse border border-brand-charcoal/10 font-medium">
            <thead>
              <tr className="bg-brand-ivory border-b border-brand-charcoal/10 text-left text-sm uppercase tracking-[0.1em] font-sora font-extrabold text-brand-charcoal/50">
                <th className="p-6 lg:p-8 min-w-[320px]">Feature</th>
                <th className="p-6 lg:p-8 text-center text-brand-charcoal w-1/4">Local Foundation</th>
                <th className="p-6 lg:p-8 text-center text-brand-mustard bg-brand-mustard/5 w-1/4">Territory Expansion</th>
                <th className="p-6 lg:p-8 text-center text-brand-charcoal w-1/4">Enterprise Takeover</th>
              </tr>
            </thead>
            <tbody className="text-brand-charcoal/80">
              
              {/* THE BUILD */}
              <tr className="bg-brand-charcoal text-brand-ivory text-xs font-sora font-extrabold tracking-[0.3em] uppercase">
                <td colSpan={4} className="p-4 lg:px-8">The Initial Build</td>
              </tr>
              
              <TableRow title="Location Hubs" t1="1" t2="4" t3="10" isPop onInfo={() => setSelectedFeature(featureDetails['geo-silos'])} />
              <TableRow title="Nested Service Pages (Per Hub)" t1="Up to 5" t2="Up to 5" t3="Up to 7" isPop onInfo={() => setSelectedFeature(featureDetails['geo-silos'])} />
              <TableRow title="Multi-Step Contact Form" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['ai-web-apps'])} />
              <TableRow title="Instant Edge Hosting" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['page-speed'])} />
              <TableRow title="Local SEO Data Structure" t1={check} t2={check} t3={check} isPop />
              <TableRow title="AI Chat Widget Integration" t1={xmark} t2="100 / Mo" t3="Unlimited" isPop onInfo={() => setSelectedFeature(featureDetails['ai-web-apps'])} />
              <TableRow title="Delivery Timeline" t1="14 Days" t2="14 Days" t3="14 Days" isPop borderBottom />

              {/* MONTHLY ENGINE */}
              <tr className="bg-brand-charcoal text-brand-ivory text-xs font-sora font-extrabold tracking-[0.3em] uppercase">
                <td colSpan={4} className="p-4 lg:px-8">Monthly Growth Engine</td>
              </tr>

              <TableRow title="GBP Sync & Top 40 Citations" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['gbp-management'])} />
              <TableRow title="Blog Posts / Month" t1="1" t2="5" t3="9" isPop onInfo={() => setSelectedFeature(featureDetails['reverse-silos'])} />
              <TableRow title="Keyword Rank Tracking" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['reports'])} />
              <TableRow title="GBP Photo & Offer Updates" t1="Monthly" t2="2 Updates + 2 Photos / Mo" t3="Premium Auto" isPop onInfo={() => setSelectedFeature(featureDetails['gbp-management'])} />
              <TableRow title="Competitor Gap Analysis" t1={xmark} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['reports'])} />
              <TableRow title="Easy-Win Local Link Building" t1={xmark} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['backlinks'])} />
              <TableRow title="How-To Videos & FAQ Pages" t1={xmark} t2={xmark} t3="4 / Month" isPop />
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
