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

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
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
            className={`relative w-full max-w-6xl bg-brand-ivory border-2 border-brand-charcoal shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]`}
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
            <div className={`flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-brand-mustard p-6 sm:p-8 lg:p-12`}>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export interface FlashCardData {
  step: string
  title: string
  content: string
  details: string
}

export function PlaybookModalContent({ cards }: { cards: FlashCardData[] }) {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    if (activeCardIndex === null) return
    setDirection(newDirection)
    setActiveCardIndex((prev) => {
      if (prev === null) return null
      return (prev + newDirection + cards.length) % cards.length
    })
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  }

  return (
    <div className="relative">
      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => {
              setDirection(0)
              setActiveCardIndex(i)
            }}
            className="group p-8 bg-white border border-brand-charcoal/10 relative cursor-pointer hover:border-brand-mustard transition-all duration-500 shadow-lg hover:shadow-2xl"
          >
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-[10px] font-sora font-extrabold tracking-widest uppercase px-3 py-1.5 shadow-xl group-hover:bg-brand-mustard group-hover:text-brand-charcoal transition-colors">
              {card.step}
            </div>
            <h4 className="text-xl sm:text-2xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-4">
              {card.title}
            </h4>
            <p className="text-brand-charcoal/70 font-medium line-clamp-3">
              {card.content}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-sora font-extrabold uppercase tracking-widest text-brand-mustard group-hover:text-brand-charcoal transition-colors">
              Deep Dive <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Expanded View */}
      <AnimatePresence>
        {activeCardIndex !== null && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-8 lg:p-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCardIndex(null)}
              className="absolute inset-0 bg-brand-charcoal/95 backdrop-blur-xl cursor-pointer"
            />

            <div className="relative w-full max-w-4xl h-fit max-h-full pointer-events-none">
              {/* Desktop Nav */}
              <button 
                onClick={(e) => { e.stopPropagation(); paginate(-1); }}
                className="absolute -left-16 lg:-left-24 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center text-brand-ivory hover:text-brand-mustard transition-colors pointer-events-auto hidden sm:flex"
              >
                <ChevronLeft className="w-10 h-10 lg:w-12 lg:h-12" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); paginate(1); }}
                className="absolute -right-16 lg:-right-24 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center text-brand-ivory hover:text-brand-mustard transition-colors pointer-events-auto hidden sm:flex"
              >
                <ChevronRight className="w-10 h-10 lg:w-12 lg:h-12" />
              </button>

              {/* Close Button */}
              <button 
                onClick={() => setActiveCardIndex(null)}
                className="absolute -top-12 right-0 text-brand-ivory/50 hover:text-white transition-colors flex items-center gap-2 text-xs font-sora font-extrabold uppercase tracking-[0.2em] pointer-events-auto"
              >
                Close <CloseIcon className="w-6 h-6" />
              </button>

              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeCardIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full bg-brand-ivory border-2 border-brand-charcoal p-8 sm:p-12 lg:p-16 shadow-2xl pointer-events-auto overflow-y-auto"
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                      <div className="text-brand-mustard font-sora font-extrabold tracking-[0.4em] uppercase text-xs sm:text-sm">
                        {cards[activeCardIndex].step}
                      </div>
                      <h4 className="text-3xl sm:text-5xl lg:text-6xl font-sora font-extrabold uppercase tracking-tighter-extreme text-brand-charcoal leading-[0.9]">
                        {cards[activeCardIndex].title}
                      </h4>
                    </div>

                    <div className="space-y-8">
                      <p className="text-xl sm:text-2xl lg:text-3xl text-brand-charcoal font-bold leading-tight">
                        {cards[activeCardIndex].content}
                      </p>
                      
                      <div className="h-px w-full bg-brand-charcoal/10" />
                      
                      <div className="prose prose-lg sm:prose-xl text-brand-charcoal/70 font-medium leading-relaxed max-w-none">
                        <p className="text-xs font-sora font-extrabold uppercase tracking-widest text-brand-charcoal/40 mb-4 italic">The Manual Detail:</p>
                        {cards[activeCardIndex].details}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between sm:hidden">
                      <button onClick={() => paginate(-1)} className="flex items-center gap-2 text-xs font-sora font-extrabold uppercase tracking-widest text-brand-charcoal">
                        <ChevronLeft className="w-4 h-4" /> Prev
                      </button>
                      <button onClick={() => paginate(1)} className="flex items-center gap-2 text-xs font-sora font-extrabold uppercase tracking-widest text-brand-charcoal">
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}
