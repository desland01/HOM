'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { FeatureModal, FeatureDetail } from '@/components/ui/feature-modal'

const featureDetails: Record<string, FeatureDetail> = {
  "geo-silos": {
    title: "Your City, Your Territory",
    description: "When a homeowner in your area searches for a painter, your name should be the first one they see. We build your site so both Google and the new AI search engines treat you as the go-to authority in every neighborhood you serve.",
    tiers: {
      t1: "Locks down your primary city. Your core services rank in the one market that matters most to your bottom line right now.",
      t2: "Expands into 3 surrounding suburbs where high-value homeowners live. You show up in every search across your real service area.",
      t3: "Full metro takeover. Every city, every suburb, every neighborhood in your region points back to you. Your competitors fight over scraps."
    }
  },
  "proof-engine": {
    title: "Built Fast, Proven In 90 Days",
    description: "Your site goes live in 14 days. Then we run the engine hard for 90 days to prove it works. If the phone does not ring, we hand you your old site back and part as friends. Zero risk.",
    tiers: {
      t1: "Foundational growth engine. 2 fresh content pieces per month, monthly Google profile updates, and full lead tracking so you see exactly where calls come from.",
      t2: "Aggressive growth mode. 4 content pieces per month, weekly Google profile optimization, and active review management to build your reputation fast.",
      t3: "Total market saturation. 8 content pieces per month, automated review outreach, and competitor gap reports showing you exactly where to take their leads."
    }
  },
  "ai-web-apps": {
    title: "Premium Leads Only",
    description: "Your website should act as a bouncer. Instead of a generic contact form that attracts every bargain hunter, we build smart tools that qualify homeowners before they ever hit your inbox. You only talk to people ready to pay for quality.",
    tiers: {
      t1: "Smart quote request forms that route qualified leads straight to your email or CRM. No more junk submissions clogging your inbox.",
      t2: "Adds a filterable project showcase so homeowners see your best work by type and location. They sell themselves before they even call you.",
      t3: "Adds an interactive cost estimator and multi-step qualification flow. Price shoppers drop off. Serious buyers fill out every field."
    }
  },
  "page-speed": {
    title: "Loads Before They Blink",
    description: "Homeowners bounce in 3 seconds if your site is slow. Every second of delay costs you real leads. Your site will load instantly on any phone, any connection, every single time.",
    tiers: {
      t1: "Premium hosting on the fastest infrastructure available. Your site scores 90+ on speed tests and loads in under 2 seconds on any device.",
      t2: "Adds advanced image compression, smart browser caching, and lazy loading so your gallery pages with 50+ photos still load instantly.",
      t3: "Adds real-time performance monitoring, custom network fine-tuning, and monthly speed audits. Your site stays the fastest painter site in your market, permanently."
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
      title: "Own Your City",
      description: "Google is not the only search engine anymore. ChatGPT, Google AI, and Siri are all recommending painters now. Your site will be built so every single one of them sends homeowners to you first.",
      color: "bg-brand-charcoal",
      textColor: "text-brand-ivory",
      number: "01",
      featureKey: "geo-silos"
    },
    {
      title: "Live In 14 Days",
      description: "Your custom site launches in 2 weeks, not 2 months. Then we run it hard for 90 days to prove it works. You see real leads before most agencies finish their first draft.",
      color: "bg-brand-mustard",
      textColor: "text-brand-charcoal",
      number: "02",
      featureKey: "proof-engine"
    },
    {
      title: "Repel Price Shoppers",
      description: "Your site should scare off the cheapest-bid crowd and attract homeowners who value quality. Smart forms and tools qualify every lead before they ever reach your phone.",
      color: "bg-white",
      textColor: "text-brand-charcoal",
      number: "03",
      featureKey: "ai-web-apps"
    },
    {
      title: "Instant Load Speed",
      description: "3 seconds. That is how long a homeowner waits before they leave a slow site and call your competitor. Your site loads instantly on any phone, every time. Zero leads lost to lag.",
      color: "bg-brand-charcoal",
      textColor: "text-brand-ivory",
      number: "04",
      featureKey: "page-speed"
    }
  ]

  return (
    <div ref={containerRef} className="relative bg-transparent" style={{ height: `${features.length * 100}vh` }}>
      <FeatureModal 
        isOpen={!!selectedFeature} 
        onClose={() => setSelectedFeature(null)} 
        feature={selectedFeature} 
      />

      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {features.map((feature, i) => (
          <Card 
            key={i} 
            i={i} 
            {...feature} 
            progress={scrollYProgress} 
            total={features.length}
            onOpenModal={() => setSelectedFeature(featureDetails[feature.featureKey])}
          />
        ))}
      </div>
    </div>
  )
}

interface CardProps {
  i: number
  title: string
  description: string
  color: string
  textColor: string
  number: string
  progress: MotionValue<number>
  total: number
  onOpenModal: () => void
}

const Card = ({ i, title, description, color, textColor, number, progress, total, onOpenModal }: CardProps) => {
  const entranceStart = i === 0 ? 0 : (i - 1) / (total - 1)
  const entranceEnd = i === 0 ? 0 : i / (total - 1)

  // Move the wrapper up from 120% to 0% to slide the card in.
  const y = useTransform(
    progress,
    [entranceStart, entranceEnd],
    [i === 0 ? '0%' : '120%', '0%']
  )

  // Shrink the inner card as subsequent cards slide over it
  const targetScale = 1 - (total - i - 1) * 0.05
  const scale = useTransform(
    progress,
    [entranceEnd, 1],
    [1, targetScale]
  )

  return (
    <motion.div 
      style={{ 
        y, 
        willChange: "transform",
        zIndex: i 
      }} 
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-12 pointer-events-none"
    >
      <motion.div 
        style={{ 
          scale,
          willChange: "transform",
          // Calculate stagger offset for visual stacking
          top: `${i * 1.5}vh` 
        }}
        className={`relative flex flex-col p-6 sm:p-10 lg:p-20 rounded-3xl origin-top w-full max-w-[1000px] max-h-[90dvh] border border-black/10 shadow-2xl overflow-hidden pointer-events-auto ${color} ${textColor}`}
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full h-full overflow-y-auto">
          <div className="lg:w-2/3 flex flex-col items-start w-full h-full">
            <div className={`text-base sm:text-sm font-sora font-extrabold tracking-[0.3em] sm:tracking-[0.2em] mb-4 sm:mb-8 shrink-0 ${textColor === 'text-brand-ivory' ? 'text-brand-mustard' : 'text-brand-charcoal/50'}`}>Feature {number}</div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-extrabold leading-[1.1] sm:leading-[0.9] tracking-tighter-extreme uppercase mb-4 sm:mb-8 shrink-0">{title}</h3>
            <p className={`text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium mb-6 sm:mb-10 shrink-0 ${textColor === 'text-brand-ivory' ? 'text-brand-ivory/70' : 'text-brand-charcoal/70'}`}>
              {description}
            </p>
            
            <div className="flex-grow min-h-4"></div>

            <button
              onClick={onOpenModal}
              aria-label={`See tier details for ${title}`}
              className={`relative shrink-0 mt-auto w-full sm:w-auto px-6 py-4 min-h-[48px] lg:px-8 lg:py-4 lg:min-h-[56px] font-sora font-extrabold text-sm lg:text-base uppercase tracking-widest border-2 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 group ${
                textColor === 'text-brand-ivory'
                  ? 'border-brand-mustard text-brand-mustard hover:bg-brand-mustard hover:text-brand-charcoal'
                  : 'border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-mustard'
              }`}
            >
              {/* Soft, pulsing ember glow emitting from the border */}
              <span className={`absolute inset-[-2px] rounded-full border-2 animate-ember ${textColor === 'text-brand-ivory' ? 'border-brand-mustard' : 'border-brand-charcoal'}`}></span>
              {/* Inner subtle continuous glow on hover to intensify the ember tight to the border */}
              <span className={`absolute inset-[-2px] rounded-full border-2 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 scale-105 ${textColor === 'text-brand-ivory' ? 'border-brand-mustard' : 'border-brand-charcoal'}`}></span>
              
              <span className="relative z-10">See Tier Details +</span>
            </button>
          </div>
          <div className="hidden sm:flex lg:w-1/3 justify-end shrink-0">
            <div className={`text-[6rem] sm:text-[8rem] lg:text-[12rem] leading-none font-sora font-extrabold opacity-10 tracking-tighter-extreme`}>
              {number}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
