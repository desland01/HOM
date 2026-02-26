'use client'

import { useState } from 'react'
import { FadeIn, TextReveal, Parallax } from '@/components/ui/animations'
import { FeatureModal, FeatureDetail } from '@/components/ui/feature-modal'

const featureDetails: Record<string, FeatureDetail> = {
  "geo-silos": {
    title: "Geo-Silo Architecture",
    description: "A Location-First URL architecture designed to dominate local search. Instead of generic service pages, we nest specific services directly under the location they serve (e.g., /sarasota/exterior-painting). This establishes high topical authority and allows scalable expansion into new municipalities.",
    tiers: {
      t1: "1 Primary Target City Hub + 4 Core Service Pages.",
      t2: "Adds 3 Secondary Location Hubs (for high-net-worth suburbs) + 12 Nested Service Pages.",
      t3: "Adds 6 Location Hubs for complete metro domination + Unlimited Nested Service Pages."
    }
  },
  "reverse-silos": {
    title: "Reverse-Silo Content Strategy",
    description: "A strategic content system using highly optimized blog posts targeting situational and scenario-based long-tail keywords. Link equity is concentrated upward to support your primary and secondary location service pages.",
    tiers: {
      t1: "2 highly-optimized reverse-silo posts per month.",
      t2: "4 highly-optimized reverse-silo posts per month.",
      t3: "8 highly-optimized reverse-silo posts per month."
    }
  },
  "page-speed": {
    title: "90+ PageSpeed & Edge Hosting",
    description: "Sub-second load times are critical for conversions and SEO. Your site is built on Next.js and deployed to Vercel's global edge network—the same infrastructure used by Fortune 500 companies. We guarantee a 90+ score on Google PageSpeed Insights.",
    tiers: {
      t1: "Next.js Edge Deployment & 90+ Score Guaranteed.",
      t2: "Next.js Edge Deployment & 90+ Score Guaranteed.",
      t3: "Next.js Edge Deployment & 90+ Score Guaranteed."
    }
  },
  "gbp-management": {
    title: "Google Business Profile Engine",
    description: "Direct synchronization between your website's location data and your Google Business Profile. We maintain consistent NAP data and drive proactive local signals to push you into the Google Map Pack.",
    tiers: {
      t1: "Monthly GBP entity synchronization + ongoing management.",
      t2: "Weekly GBP optimization with geo-tagged photos and review response management.",
      t3: "Adds Automated Review Generation Sequences to continuously capture positive signals."
    }
  },
  "reports": {
    title: "Advanced Reporting & Strategy",
    description: "We use enterprise-grade tools like DataForSEO for precise, localized keyword tracking. No vague PDFs—just pure data on where you rank and what we are doing to grow your territory.",
    tiers: {
      t1: "DataForSEO keyword tracking + Quarterly strategy calls.",
      t2: "DataForSEO keyword tracking + Bi-monthly strategy calls.",
      t3: "DataForSEO tracking + Direct competitor gap analysis + Monthly strategy calls + Dedicated Slack channel."
    }
  },
  "ai-web-apps": {
    title: "Interactive Conversion Tools",
    description: "We replace static contact forms with dynamic, multi-step qualification funnels and custom calculators. This filters out tire-kickers, increases conversion rates, and captures rich lead data before they ever talk to your sales team.",
    tiers: {
      t1: "Standard lead funnel integration (Quote forms to Email/CRM).",
      t2: "Adds an Interactive Project Gallery (Filterable & location-tagged).",
      t3: "Custom React-based Paint Cost Calculator + Multi-step logic-based qualification funnels."
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
              text="SIDE BY SIDE." 
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase mb-8"
            />
          </div>
          <Parallax offset={20}>
            <FadeIn className="text-xl text-brand-charcoal/50 max-w-sm mb-4 lg:text-right font-medium">
              See exactly what each tier includes so you can pick with confidence. Click the info icons for a deep dive.
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
              <TableRow title="Custom Next.js Application" t1={check} t2={check} t3={check} isPop />
              <TableRow title="Interactive Project Gallery" t1={xmark} t2={check} t3={check} isPop />
              <TableRow title="Interlinking Matrix" t1={xmark} t2={check} t3={check} isPop />
              <TableRow title="Paint Cost Calculator" t1={xmark} t2={xmark} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['ai-web-apps'])} />
              <TableRow title="Multi-Step Funnels" t1={xmark} t2={xmark} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['ai-web-apps'])} />
              <TableRow title="FAQ Schema Mapping" t1={xmark} t2={xmark} t3={check} isPop />
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
              <TableRow title="Vercel Edge Hosting" t1={check} t2={check} t3={check} isPop onInfo={() => setSelectedFeature(featureDetails['page-speed'])} />
              <TableRow title="JSON-LD Schema" t1="Basic" t2="Advanced" t3="Full Suite" isPop />
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
