'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

type ModalType = 'tier' | 'flashcard'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  type: ModalType
  title: string
  children: React.ReactNode
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export function UnifiedModal({ isOpen, onClose, type, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 lg:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-charcoal/90 backdrop-blur-md cursor-pointer"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative w-full max-w-5xl bg-brand-ivory border-2 border-brand-charcoal shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]
              ${type === 'flashcard' ? 'lg:max-w-4xl' : ''}`}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 sm:p-8 border-b border-brand-charcoal/10 bg-white">
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal pr-8">
                {title}
              </h3>
              <button 
                onClick={onClose} 
                className="group w-12 h-12 flex items-center justify-center text-brand-charcoal transition-transform hover:rotate-90"
              >
                <CloseIcon className="w-8 h-8" />
              </button>
            </div>

            {/* Content Wrapper */}
            <div className="flex-grow overflow-y-auto p-6 sm:p-8 lg:p-12 scrollbar-thin scrollbar-thumb-brand-mustard">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

interface FlashCardProps {
  step: string
  title: string
  content: string
  index: number
}

export function FlashCard({ step, title, content, index }: FlashCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 15, x: 20 }}
      animate={{ opacity: 1, rotateY: 0, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500 shadow-lg hover:shadow-2xl perspective-1000"
    >
      <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-xs font-sora font-extrabold tracking-widest uppercase px-4 py-2">
        {step}
      </div>
      <h4 className="text-xl sm:text-2xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">
        {title}
      </h4>
      <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
        <p>{content}</p>
      </div>
    </motion.div>
  )
}
