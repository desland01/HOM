'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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
  "proof-engine": {
    title: "90-Day Proof Engine & Management",
    description: "We don't do 12-month lock-ins. Your initial investment covers the entire build and 90 days of aggressive SEO management. We prove the system works, and you only sign a growth contract once you've seen the leads.",
    tiers: {
      t1: "2 blog posts/mo + Monthly GBP sync + DataForSEO tracking.",
      t2: "4 blog posts/mo + Weekly GBP optimization + Review responses.",
      t3: "8 blog posts/mo + Automated review sequences + Competitor gap analysis."
    }
  },
  "ai-web-apps": {
    title: "Interactive Conversion Architecture",
    description: "We replace static contact forms with dynamic, multi-step qualification funnels and custom calculators. This filters out tire-kickers, increases conversion rates, and captures rich lead data before they ever talk to your sales team.",
    tiers: {
      t1: "Standard lead funnel integration (Quote forms to Email/CRM).",
      t2: "Adds an Interactive Project Gallery (Filterable & location-tagged).",
      t3: "Custom React-based Paint Cost Calculator + Multi-step logic-based qualification funnels."
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
  }
}

export const StickyFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const features = [
    {
      title: "The Local Loophole",
      description: "Everyone says you need a shiny homepage. They're wrong. We build a 'Geo-Silo' net across your entire city. We don't just rank where your office is—we rank everywhere the money is.",
      color: "bg-brand-charcoal",
      textColor: "text-brand-ivory",
      number: "01",
      featureKey: "geo-silos"
    },
    {
      title: "12-Month Contracts Are A Scam",
      description: "Agencies get paid whether you grow or not. We do the opposite. We build it in 14 days, run the engine for 90 days, and you only sign a long-term deal after you've seen the leads.",
      color: "bg-brand-mustard",
      textColor: "text-brand-charcoal",
      number: "02",
      featureKey: "proof-engine"
    },
    {
      title: "Stop Paying For Tire-Kickers",
      description: "Traffic is a vanity metric. Booked jobs put cash in the bank. Our multi-step qualification funnels filter out the price-shoppers and deliver high-intent homeowners straight to your inbox.",
      color: "bg-white",
      textColor: "text-brand-charcoal",
      number: "03",
      featureKey: "ai-web-apps"
    },
    {
      title: "The 1-Second Rule",
      description: "If your site takes 3 seconds to load, you've already lost the job. We deploy your site on the same edge network Fortune 500 companies use. Sub-second load times. Guaranteed.",
      color: "bg-brand-charcoal",
      textColor: "text-brand-ivory",
      number: "04",
      featureKey: "page-speed"
    }
  ]

  return (
    <div ref={containerRef} className="relative pb-[10vh]">
      <FeatureModal 
        isOpen={!!selectedFeature} 
        onClose={() => setSelectedFeature(null)} 
        feature={selectedFeature} 
      />

      {features.map((feature, i) => {
        const targetScale = 1 - (features.length - i) * 0.05
        
        return (
          <Card 
            key={i} 
            i={i} 
            {...feature} 
            progress={scrollYProgress} 
            range={[i * 0.25, 1]} 
            targetScale={targetScale}
            onOpenModal={() => setSelectedFeature(featureDetails[feature.featureKey])}
          />
        )
      })}
    </div>
  )
}

const Card = ({ i, title, description, color, textColor, number, progress, range, targetScale, onOpenModal }: any) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  })

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={containerRef} className="h-[100dvh] flex items-center justify-center sticky top-0 px-6 sm:px-12">
      <motion.div 
        style={{ scale, top: `calc(-10vh + ${i * 25}px)` }} 
        className={`relative flex flex-col items-start p-10 lg:p-20 rounded-3xl origin-top w-full max-w-[1000px] border border-black/10 shadow-2xl overflow-hidden ${color} ${textColor}`}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-12 w-full">
          <div className="lg:w-2/3 flex flex-col items-start">
            <div className={`text-sm font-sora font-extrabold tracking-[0.2em] mb-8 ${textColor === 'text-brand-ivory' ? 'text-brand-mustard' : 'text-brand-charcoal/50'}`}>Feature {number}</div>
            <h3 className="text-4xl sm:text-6xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase mb-6">{title}</h3>
            <p className={`text-lg sm:text-2xl font-medium leading-relaxed mb-10 ${textColor === 'text-brand-ivory' ? 'text-brand-ivory/70' : 'text-brand-charcoal/70'}`}>
              {description}
            </p>
            <button 
              onClick={onOpenModal}
              className={`mt-auto px-6 py-3 font-sora font-extrabold text-sm uppercase tracking-widest border-2 rounded-full transition-colors ${
                textColor === 'text-brand-ivory' 
                  ? 'border-brand-mustard text-brand-mustard hover:bg-brand-mustard hover:text-brand-charcoal' 
                  : 'border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-mustard'
              }`}
            >
              See Tier Details +
            </button>
          </div>
          <div className="lg:w-1/3 flex justify-end">
            <div className={`text-[12rem] leading-none font-sora font-extrabold opacity-10 tracking-tighter-extreme`}>
              {number}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
