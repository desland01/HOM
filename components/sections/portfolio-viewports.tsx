'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
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
          <FadeIn className="text-xl text-brand-ivory/50 font-medium max-w-2xl leading-relaxed text-left">
            We do not build digital brochures. We build high-performance conversion engines. Scroll through some of the premium sites we have built for painters.
          </FadeIn>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full"
        >
          {websites.map((site, index) => (
            <ScaleReveal key={index} delay={index * 0.1} className="flex flex-col">
              <a 
                href={site.src} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-sora font-extrabold uppercase tracking-widest mb-4 flex items-center gap-3 w-fit group/link hover:text-brand-mustard transition-colors py-3"
              >
                <span className="text-brand-mustard text-lg leading-none group-hover/link:translate-x-1 transition-transform">/</span>
                {site.name}
                <span className="opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all">↗</span>
              </a>
              
              {/* Browser Viewport Window */}
              <motion.div 
                className="w-full aspect-video bg-[#121212] rounded-xl border-2 border-brand-ivory/10 overflow-hidden flex flex-col shadow-2xl relative group"
                whileHover={{ y: -10, borderColor: "rgba(201,162,39,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Scrollable Iframe Area */}
                <div className="flex-1 bg-white relative w-full overflow-hidden group/iframe">
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] z-10" />
                  <iframe 
                    src={site.src} 
                    className="absolute top-0 left-0 border-none origin-top-left"
                    style={{ width: '300%', height: '300%', transform: 'scale(0.333333)' }}
                    title={site.name}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  
                  {/* Overlay prompt to scroll */}
                  <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-brand-charcoal text-brand-mustard px-4 py-2 rounded-full text-xs font-sora font-extrabold uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 flex items-center gap-2 border border-brand-mustard/20">
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
