'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

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
            <div className={`flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-brand-mustard ${type === 'flashcard' ? 'p-0' : 'p-6 sm:p-8 lg:p-12'}`}>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

interface FlashCardData {
  step: string
  title: string
  content: string
  details: string
}

interface FlashCardCarouselProps {
  cards: FlashCardData[]
}

export function FlashCardCarousel({ cards }: FlashCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + cards.length) % cards.length)
    setIsExpanded(false)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      rotateY: direction < 0 ? 15 : -15,
    })
  }

  return (
    <div className="relative w-full h-[600px] flex flex-col bg-brand-charcoal/5 group/carousel">
      {/* Navigation - desktop overlays */}
      <div className="absolute inset-y-0 left-0 w-20 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity">
        <button 
          onClick={() => paginate(-1)}
          className="w-12 h-12 bg-white border-2 border-brand-charcoal flex items-center justify-center hover:bg-brand-mustard transition-colors pointer-events-auto shadow-xl"
        >
          <ChevronLeft className="w-6 h-6 text-brand-charcoal" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 w-20 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity">
        <button 
          onClick={() => paginate(1)}
          className="w-12 h-12 bg-white border-2 border-brand-charcoal flex items-center justify-center hover:bg-brand-mustard transition-colors pointer-events-auto shadow-xl"
        >
          <ChevronRight className="w-6 h-6 text-brand-charcoal" />
        </button>
      </div>

      <div className="relative flex-grow flex items-center justify-center overflow-hidden p-8 sm:p-12 lg:p-20">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full max-w-2xl h-full flex items-center justify-center perspective-1000"
          >
            <div 
              onClick={() => setIsExpanded(!isExpanded)}
              className={`w-full bg-white border-2 border-brand-charcoal p-8 sm:p-12 shadow-2xl cursor-pointer relative transition-all duration-500 flex flex-col
                ${isExpanded ? 'h-full' : 'h-[400px] overflow-hidden'}`}
            >
              <div className="absolute top-0 right-12 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-xs font-sora font-extrabold tracking-widest uppercase px-6 py-3 shadow-xl">
                {cards[currentIndex].step}
              </div>

              <h4 className="text-2xl sm:text-4xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-8 mt-4 leading-none">
                {cards[currentIndex].title}
              </h4>

              <div className="prose prose-lg text-brand-charcoal/80 font-medium space-y-6 flex-grow">
                <p className="text-xl sm:text-2xl text-brand-charcoal leading-tight">
                  {cards[currentIndex].content}
                </p>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden border-t border-brand-charcoal/10 pt-8"
                    >
                      <p className="text-lg leading-relaxed text-brand-charcoal/60 italic mb-4">Under the hood:</p>
                      <p className="text-lg leading-relaxed">
                        {cards[currentIndex].details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-sora font-extrabold uppercase tracking-[0.2em] text-brand-mustard">
                  {currentIndex + 1} / {cards.length}
                </span>
                <button className="text-sm font-sora font-extrabold uppercase tracking-widest text-brand-charcoal hover:text-brand-mustard transition-colors flex items-center gap-2">
                  {isExpanded ? 'Collapse' : 'Learn Exactly How It Works'} 
                  <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>↓</motion.span>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots - mobile navigation */}
      <div className="p-8 flex justify-center gap-3">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1)
              setCurrentIndex(i)
              setIsExpanded(false)
            }}
            className={`h-1.5 transition-all duration-500 rounded-full
              ${currentIndex === i ? 'w-12 bg-brand-mustard' : 'w-3 bg-brand-charcoal/20 hover:bg-brand-charcoal/40'}`}
          />
        ))}
      </div>
    </div>
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
      whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
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
