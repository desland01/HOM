'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

type StepDetails = {
  title: string
  content: string
}

type TierDetails = {
  s1?: StepDetails
  s2?: StepDetails
  s3?: StepDetails
  t1?: string
  t2?: string
  t3?: string
}

export type FeatureDetail = {
  title: string
  description: string
  tiers: TierDetails
}

interface FeatureModalProps {
  isOpen: boolean
  onClose: () => void
  feature: FeatureDetail | null
}

export const FeatureModal = ({ isOpen, onClose, feature }: FeatureModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!feature) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 sm:px-6 py-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-sm cursor-pointer"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-brand-ivory rounded-none border-2 border-brand-charcoal shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            <div className="flex justify-between items-center p-6 sm:p-8 border-b border-brand-charcoal/10 bg-white">
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal pr-8">
                {feature.title}
              </h3>
              <button
                onClick={onClose}
                className="absolute right-4 top-4 sm:right-6 sm:top-6 w-12 h-12 flex items-center justify-center text-brand-charcoal text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 sm:p-8 overflow-y-auto">
              <p className="text-lg text-brand-charcoal/70 font-medium leading-relaxed mb-10">
                {feature.description}
              </p>
              
              <div className="space-y-4">
                <div className="text-xs font-sora font-extrabold tracking-[0.2em] uppercase text-brand-mustard mb-6">Tier Breakdown</div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-5 border border-brand-charcoal/10 bg-white rounded-sm">
                    <div className="text-xs font-sora font-extrabold uppercase tracking-widest text-brand-charcoal/40 mb-2">Tier 1: Local Authority</div>
                    <div className="font-medium text-brand-charcoal">{feature.tiers.t1}</div>
                  </div>
                  
                  <div className="p-5 border-2 border-brand-mustard bg-brand-mustard/5 rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-brand-mustard text-brand-charcoal text-[10px] font-sora font-bold uppercase tracking-widest px-2 py-1">Popular</div>
                    <div className="text-xs font-sora font-extrabold uppercase tracking-widest text-brand-mustard mb-2">Tier 2: Territory Dominator</div>
                    <div className="font-medium text-brand-charcoal">{feature.tiers.t2}</div>
                  </div>
                  
                  <div className="p-5 border border-brand-charcoal/10 bg-brand-charcoal text-brand-ivory rounded-sm">
                    <div className="text-xs font-sora font-extrabold uppercase tracking-widest text-brand-ivory/40 mb-2">Tier 3: Enterprise Takeover</div>
                    <div className="font-medium">{feature.tiers.t3}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}