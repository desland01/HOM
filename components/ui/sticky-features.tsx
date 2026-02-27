'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FeatureModal, FeatureDetail } from '@/components/ui/feature-modal'

const featureDetails: Record<string, FeatureDetail> = {
  "geo-silos": {
    title: "Next-Gen AI SEO",
    description: "We build a location-first architecture that doesn't just rank you on traditional Google maps, but structures your data so AI search engines (like ChatGPT) recognize you as the definitive local authority.",
    tiers: {
      t1: "1 Primary Target City Hub + 4 Core Service Pages.",
      t2: "Adds 3 Secondary Location Hubs (for high-net-worth suburbs) + 12 Nested Service Pages.",
      t3: "Adds 6 Location Hubs for complete metro domination + Unlimited Nested Service Pages."
    }
  },
  "proof-engine": {
    title: "14-Day Build & 90-Day Proof",
    description: "You are paying for speed and precision. Your initial investment covers the entire build and 90 days of aggressive management. We prove the system works, and then transition you into a 12-month growth plan.",
    tiers: {
      t1: "2 blog posts/mo + Monthly GBP sync + DataForSEO tracking.",
      t2: "4 blog posts/mo + Weekly GBP optimization + Review responses.",
      t3: "8 blog posts/mo + Automated review sequences + Competitor gap analysis."
    }
  },
  "ai-web-apps": {
    title: "Filter The Tire-Kickers",
    description: "We replace standard, boring contact forms with interactive funnels and calculators. This positions you as a premium contractor, filters out the lowest-bid shoppers, and hands you qualified leads.",
    tiers: {
      t1: "Standard lead funnel integration (Quote forms to Email/CRM).",
      t2: "Adds an Interactive Project Gallery (Filterable & location-tagged).",
      t3: "Custom Interactive Paint Cost Calculator + Multi-step logic-based qualification funnels."
    }
  },
  "page-speed": {
    title: "Lightning-Fast Load Times",
    description: "Homeowners have zero patience. If your site is slow, they leave. We build your site on the fastest enterprise infrastructure available, ensuring your site loads instantly on any phone.",
    tiers: {
      t1: "Instant Edge Deployment & 90+ Score Guaranteed.",
      t2: "Instant Edge Deployment & 90+ Score Guaranteed.",
      t3: "Instant Edge Deployment & 90+ Score Guaranteed."
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
      title: "Next-Gen SEO",
      description: "We don't just optimize for standard Google searches. We build the infrastructure so that massive new AI search engines (like ChatGPT and Google AI) actually recommend your painting business over the competition.",
      color: "bg-brand-charcoal",
      textColor: "text-brand-ivory",
      number: "01",
      featureKey: "geo-silos"
    },
    {
      title: "Speed Out Of The Gate",
      description: "You are paying for immediate momentum. We use cutting-edge AI tools to build your system in 14 days, run the engine for 90 days, and then lock in a recurring 12-month plan to dominate your local market.",
      color: "bg-brand-mustard",
      textColor: "text-brand-charcoal",
      number: "02",
      featureKey: "proof-engine"
    },
    {
      title: "Filter The Tire-Kickers",
      description: "Stop haggling. Your website should act as a filter. We build custom calculators and interactive funnels that attract homeowners willing to pay for top-tier work, and immediately weed out the price-shoppers.",
      color: "bg-white",
      textColor: "text-brand-charcoal",
      number: "03",
      featureKey: "ai-web-apps"
    },
    {
      title: "Lightning-Fast Loads",
      description: "A slow site kills leads. Homeowners bounce in 3 seconds if it doesn't load instantly. We build your site on the fastest infrastructure available so you capture every single click.",
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
