'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const StickyFeatures = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const features = [
    {
      title: "Geo-Silo Dominance",
      description: "We don't just build a website. We build a city-wide net. Dedicated hubs for every target city and nested service pages mean you rank everywhere, not just where your office is.",
      color: "bg-brand-charcoal",
      textColor: "text-brand-ivory",
      number: "01"
    },
    {
      title: "90-Day Proof Engine",
      description: "Most agencies lock you in for 12 months before you see a lead. We build the site in 14 days and run the SEO engine for 90 days. You only commit to a growth contract when the leads are flowing.",
      color: "bg-brand-mustard",
      textColor: "text-brand-charcoal",
      number: "02"
    },
    {
      title: "Conversion Architecture",
      description: "Traffic is vanity. Booked jobs are sanity. Our multi-step qualification funnels filter out the tire-kickers and deliver high-intent homeowners directly to your inbox.",
      color: "bg-white",
      textColor: "text-brand-charcoal",
      number: "03"
    },
    {
      title: "Vercel Edge Speed",
      description: "A slow site kills rankings and conversions. Your platform runs on Next.js edge networks, guaranteeing sub-second load times and 90+ Core Web Vital scores.",
      color: "bg-brand-charcoal",
      textColor: "text-brand-ivory",
      number: "04"
    }
  ]

  return (
    <div ref={containerRef} className="relative pb-[10vh]">
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
          />
        )
      })}
    </div>
  )
}

const Card = ({ i, title, description, color, textColor, number, progress, range, targetScale }: any) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={containerRef} className="h-[100dvh] flex items-center justify-center sticky top-0 px-6 sm:px-12">
      <motion.div 
        style={{ scale, top: `calc(-10vh + ${i * 25}px)` }} 
        className={`relative flex flex-col items-start p-10 lg:p-20 rounded-3xl origin-top w-full max-w-[1000px] border border-black/10 shadow-2xl overflow-hidden ${color} ${textColor}`}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-12 w-full">
          <div className="lg:w-2/3">
            <div className={`text-sm font-sora font-extrabold tracking-[0.2em] mb-8 ${textColor === 'text-brand-ivory' ? 'text-brand-mustard' : 'text-brand-charcoal/50'}`}>Feature {number}</div>
            <h3 className="text-4xl sm:text-6xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase mb-6">{title}</h3>
            <p className={`text-lg sm:text-2xl font-medium leading-relaxed ${textColor === 'text-brand-ivory' ? 'text-brand-ivory/70' : 'text-brand-charcoal/70'}`}>
              {description}
            </p>
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