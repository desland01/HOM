'use client'

import { useState } from 'react'
import { FadeIn, TextReveal, Parallax } from '@/components/ui/animations'
import { FeatureModal, FeatureDetail } from '@/components/ui/feature-modal'

const featureDetails: Record<string, FeatureDetail> = {
  "geo-silos": {
    title: "Own Your City on Google",
    description: "Most painters have one generic website that tries to rank everywhere and ends up ranking nowhere. We build dedicated pages for every city and service you offer so Google knows exactly where you work and what you do. More pages means more chances to show up when homeowners search.",
    tiers: {
      t1: "Your home city locked down. 1 city hub + 4 service pages so you own the search results where you already work.",
      t2: "Expands into 3 wealthy surrounding suburbs with 12 dedicated service pages. You start pulling jobs from the high-value neighborhoods next door.",
      t3: "Full metro domination. 6 city hubs with unlimited service pages. Your competitors cannot show up without seeing your name first."
    }
  },
  "reverse-silos": {
    title: "Blog Content That Brings in Leads",
    description: "Every blog post we write answers a real question homeowners are typing into Google right now. Things like 'how much does it cost to paint a house in [your city]' or 'best exterior paint colors for resale.' Each post points readers straight back to your service pages so they call you, not your competitor.",
    tiers: {
      t1: "2 posts per month. Builds your foundation so Google starts seeing you as the local painting authority.",
      t2: "4 posts per month. Aggressive growth mode. You start ranking for 'painters near me' and long-tail searches that bring ready-to-buy homeowners.",
      t3: "8 posts per month. Market saturation. Your content pushes competitors off page 1 and makes you the obvious choice in your entire metro."
    }
  },
  "page-speed": {
    title: "A Website That Loads Instantly",
    description: "Homeowners bounce in 3 seconds if your site is slow. Every lost visitor is a lost estimate. We build your site on the fastest hosting available and guarantee a 90+ speed score so you never lose a lead to a loading spinner.",
    tiers: {
      t1: "Premium hosting, optimized images, and a guaranteed 90+ speed score. Your site loads fast on every device.",
      t2: "Everything in Tier 1 plus advanced caching, automatic image compression, and priority support if your scores ever dip.",
      t3: "Everything in Tier 2 plus real-time performance monitoring, automatic optimization, and a dedicated speed engineer on call for your site."
    }
  },
  "gbp-management": {
    title: "Get Into the Google Map Pack",
    description: "When homeowners search 'painters near me,' Google shows a map with 3 businesses. That is the Map Pack, and it gets more clicks than anything else on the page. We keep your Google Business Profile optimized, active, and loaded with reviews so you stay in those top 3 spots.",
    tiers: {
      t1: "Monthly updates keep your listing accurate and active. Your business info stays consistent everywhere Google looks.",
      t2: "Weekly optimization with fresh photos and review responses. Builds momentum so Google sees you as the most engaged painter in your area.",
      t3: "Automated review generation creates a flywheel of 5-star signals. More reviews means more trust, more clicks, and more estimates booked."
    }
  },
  "reports": {
    title: "Know Exactly Where You Rank",
    description: "No more vague PDFs or 'trust us, it is working.' You see the real numbers: where you rank, how many people found you, and what we are doing next. Complete transparency so you always know your money is working.",
    tiers: {
      t1: "You see where you rank for every keyword. Quarterly strategy calls to review progress and plan the next push.",
      t2: "Deeper data with bi-monthly calls. We spot trends faster and pivot your strategy before your competitors even notice.",
      t3: "Full competitive intelligence plus monthly war-room calls. You get a dedicated communication channel so nothing slows us down."
    }
  },
  "ai-web-apps": {
    title: "Turn Visitors Into Booked Estimates",
    description: "A basic contact form loses most of your visitors. We build smart tools that keep homeowners engaged, filter out the tire-kickers, and capture the details you need before they ever pick up the phone. Better leads, less wasted time.",
    tiers: {
      t1: "Smart quote request forms that capture quality leads and route them straight to your inbox or CRM.",
      t2: "Adds a visual project gallery that shows off your best work. Homeowners see your quality before they call, so they show up pre-sold.",
      t3: "Custom cost calculator plus multi-step qualification that pre-sells your premium pricing. Tire-kickers drop off. Serious buyers book."
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

        <FadeIn delay={0.2} className="w-full overflow-x-auto pb-8">
          <table className="w-full min-w-[900px] border-collapse border border-brand-charcoal/10 font-medium">
            <thead>
              <tr className="bg-brand-ivory border-b border-brand-charcoal/10 text-left text-sm uppercase tracking-[0.1em] font-sora font-extrabold text-brand-charcoal/50">
                <th className="p-6 lg:p-8 min-w-[320px]">Feature</th>
                <th className="p-6 lg:p-8 text-center text-brand-charcoal w-1/4">Local Authority</th>
                <th className="p-6 lg:p-8 text-center text-brand-mustard bg-brand-mustard/5 w-1/4">Territory Dominator</th>
                <th className="p-6 lg:p-8 text-center text-brand-charcoal w-1/4">Enterprise Takeover</th>
              </tr>
            </thead>
            <tbody className="text-brand-charcoal/80">
              
              {/* THE BUILD */}
              <tr className="bg-brand-charcoal text-brand-ivory text-xs font-sora font-extrabold tracking-[0.3em] uppercase">
                <td colSpan={4} className="p-4 lg:px-8">The Build</td>
              </tr>
              
              <TableRow title="Primary City Hub" t1="1" t2="1" t3="1" isPop onInfo={() => setSelectedFeature(featureDetails['geo-silos'])} />
              <TableRow title="Secondary Location Hubs" t1={xmark} t2="3" t3="6" isPop onInfo={() => setSelectedFeature(featureDetails['geo-silos'])} />
              <TableRow title="Core Service Pages" t1="4" t2="4" t3="Unlimited" isPop onInfo={() => setSelectedFeature(featureDetails['geo-silos'])} />
              <TableRow title="Nested Service Pages" t1={xmark} t2="12" t3="Unlimited" isPop onInfo={() => setSelectedFeature(featureDetails['geo-silos'])} />
              <TableRow title="Custom High-Performance Site" t1={check} t2={check} t3={check} isPop />
              <TableRow title="Interactive Project Gallery" t1={xmark} t2={check} t3={check} isPop />
              <TableRow title="Interlinking Matrix" t1={xmark} t2={check} t3={check} isPop />
              <TableRow title="Paint Cost Calculator" t1={xmark} t2={xmark} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['ai-web-apps'])} />
              <TableRow title="Multi-Step Funnels" t1={xmark} t2={xmark} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['ai-web-apps'])} />
              <TableRow title="Advanced Trust Signals" t1={xmark} t2={xmark} t3={check} isPop />
              <TableRow title="Delivery Timeline" t1="14 Days" t2="14 Days" t3="14 Days" isPop borderBottom />

              {/* MONTHLY ENGINE */}
              <tr className="bg-brand-charcoal text-brand-ivory text-xs font-sora font-extrabold tracking-[0.3em] uppercase">
                <td colSpan={4} className="p-4 lg:px-8">Monthly Engine</td>
              </tr>

              <TableRow title="GBP Sync + Management" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['gbp-management'])} />
              <TableRow title="Blog Posts / Month" t1="2" t2="4" t3="8" isPop onInfo={() => setSelectedFeature(featureDetails['reverse-silos'])} />
              <TableRow title="Weekly GBP Optimization" t1={xmark} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['gbp-management'])} />
              <TableRow title="Review Response Management" t1={xmark} t2={check} t3={check} isPop />
              <TableRow title="Automated Review Sequences" t1={xmark} t2={xmark} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['gbp-management'])} />
              <TableRow title="Competitor Gap Analysis" t1={xmark} t2={xmark} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['reports'])} />
              <TableRow title="DataForSEO Tracking" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['reports'])} />
              <TableRow title="Strategy Calls" t1="Quarterly" t2="Bi-Monthly" t3="Monthly" isPop onInfo={() => setSelectedFeature(featureDetails['reports'])} />
              <TableRow title="Dedicated Slack Channel" t1={xmark} t2={xmark} t3={check} isPop borderBottom />

              {/* TECHNICAL */}
              <tr className="bg-brand-charcoal text-brand-ivory text-xs font-sora font-extrabold tracking-[0.3em] uppercase">
                <td colSpan={4} className="p-4 lg:px-8">Technical</td>
              </tr>
              
              <TableRow title="90+ PageSpeed Guarantee" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['page-speed'])} />
              <TableRow title="Instant Edge Hosting" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['page-speed'])} />
              <TableRow title="Local SEO Data Structure" t1="Basic" t2="Advanced" t3="Full Suite" isPop />
              <TableRow title="Conversion Architecture" t1={check} t2={check} t3={check} isPop borderBottom={false} />

            </tbody>
          </table>
        </FadeIn>
      </div>
    </section>
  )
}

const TableRow = ({ title, t1, t2, t3, isPop, borderBottom = true, onInfo }: any) => (
  <tr className={`hover:bg-brand-charcoal/[0.02] transition-colors ${borderBottom ? 'border-b border-brand-charcoal/5' : ''}`}>
    <td className="p-5 lg:p-6 pl-6 lg:pl-8 text-[15px] flex items-center gap-3">
      {title}
      {onInfo && (
        <button 
          onClick={onInfo}
          className="w-5 h-5 rounded-full border border-brand-charcoal/30 flex items-center justify-center text-[10px] font-bold text-brand-charcoal/50 hover:bg-brand-mustard hover:text-brand-charcoal hover:border-brand-mustard transition-colors flex-shrink-0"
          title="Learn more"
        >
          i
        </button>
      )}
    </td>
    <td className="p-5 lg:p-6 text-center text-[15px]">{t1}</td>
    <td className={`p-5 lg:p-6 text-center text-[15px] ${isPop ? 'bg-brand-mustard/[0.02] font-semibold' : ''}`}>{t2}</td>
    <td className="p-5 lg:p-6 text-center text-[15px]">{t3}</td>
  </tr>
)
