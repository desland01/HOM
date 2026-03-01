'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const IMAGES = [
  "/desktop-hero.png",
  "/verify-desktop-hero-v2.png",
  "/verify-desktop-portfolio.png",
  "/desktop-full-page.png"
]

export function ThreeFlashPreview() {
  const [index, setIndex] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    // Start sequence after a tiny delay so it feels intentional
    const startTimer = setTimeout(() => setIsStarted(true), 500)
    return () => clearTimeout(startTimer)
  }, [])

  useEffect(() => {
    if (!isStarted || isFinished) return

    if (index < IMAGES.length - 1) {
      const timer = setTimeout(() => setIndex(i => i + 1), 250) // Flash fast
      return () => clearTimeout(timer)
    } else {
      // Hold the last image slightly longer before fading out
      const timer = setTimeout(() => setIsFinished(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [index, isStarted, isFinished])

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[40vh] sm:h-[60vh] lg:h-[70vh] rounded-xl overflow-hidden mb-16 border border-brand-ivory/10 shadow-2xl bg-brand-charcoal/50">
      <AnimatePresence mode="popLayout">
        {!isFinished && isStarted && (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image 
                src={IMAGES[index]} 
                alt="Premium painting website preview"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-brand-charcoal/20" />
            </div>
          </motion.div>
        )}
        {isFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-brand-charcoal"
          >
            <div className="relative w-full h-full opacity-10 blur-sm scale-110">
              <Image 
                src={IMAGES[IMAGES.length - 1]} 
                alt="Premium painting website preview"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-transparent" />
            
            <div className="absolute bottom-12 left-0 right-0 flex justify-center">
              <div className="px-6 py-2 bg-brand-mustard/10 border border-brand-mustard/30 rounded-full text-brand-mustard font-sora font-extrabold uppercase tracking-widest text-xs">
                Premium Infrastructure
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isStarted && (
         <div className="absolute inset-0 flex items-center justify-center bg-brand-charcoal">
            <div className="w-8 h-8 border-2 border-brand-mustard border-t-transparent rounded-full animate-spin opacity-50" />
         </div>
      )}
    </div>
  )
}
