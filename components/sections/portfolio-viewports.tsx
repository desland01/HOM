'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeIn, TextReveal, ScaleReveal } from '@/components/ui/animations'

const websites = [
  {
    name: "Grove Street Painting",
    url: "grovestreetpainting.com",
    src: "https://grovestreetpainting.com"
  },
  {
    name: "Shape of Paint",
    url: "shape-of-paint.vercel.app",
    src: "https://shape-of-paint.vercel.app/"
  }
]

export function PortfolioViewports() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Optional horizontal scroll effect for larger screens
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section className="py-24 lg:py-40 px-6 sm:px-12 bg-brand-charcoal text-brand-ivory relative overflow-hidden border-t border-brand-ivory/10">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--brand-mustard)_0%,_transparent_40%)] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="mb-20 lg:mb-32 text-center lg:text-left">
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">
            Proven Results
          </FadeIn>
          <TextReveal 
            text="SEE THE DIFFERENCE." 
            className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase mb-8"
          />
          <FadeIn className="text-xl text-brand-ivory/50 font-medium max-w-2xl">
            We do not build digital brochures. We build high-performance conversion engines. Scroll through some of the premium sites we have built for painters.
          </FadeIn>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto"
        >
          {websites.map((site, index) => (
            <ScaleReveal key={index} delay={index * 0.1} className="flex flex-col">
              <div className="text-sm font-sora font-extrabold uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="text-brand-mustard text-lg leading-none">/</span>
                {site.name}
              </div>
              
              {/* Browser Viewport Window */}
              <motion.div 
                className="w-full h-[500px] lg:h-[600px] bg-[#121212] rounded-xl border-2 border-brand-ivory/10 overflow-hidden flex flex-col shadow-2xl relative group"
                whileHover={{ y: -10, borderColor: "rgba(201,162,39,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Browser Header */}
                <div className="h-12 bg-[#1A1A1A] flex items-center px-4 gap-4 border-b border-brand-ivory/10 shrink-0">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-black/30 px-6 py-1.5 rounded-md text-[10px] sm:text-xs font-sora font-medium text-brand-ivory/40 tracking-widest truncate max-w-full border border-white/5 group-hover:text-brand-ivory/80 transition-colors">
                      {site.url}
                    </div>
                  </div>
                  <div className="w-[52px]"></div> {/* Spacer to balance dots */}
                </div>
                
                {/* Scrollable Iframe Area */}
                <div className="flex-1 bg-white relative w-full overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] z-10" />
                  <iframe 
                    src={site.src} 
                    className="w-full h-full border-none" 
                    title={site.name}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  
                  {/* Overlay prompt to scroll */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-brand-charcoal text-brand-mustard px-4 py-2 rounded-full text-[10px] font-sora font-extrabold uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 flex items-center gap-2 border border-brand-mustard/20">
                    <span className="animate-bounce">↓</span> Scroll Site
                  </div>
                </div>
              </motion.div>
            </ScaleReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
