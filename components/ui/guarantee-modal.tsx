'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FeatureDetail } from './feature-modal'

interface GuaranteeModalProps {
  isOpen: boolean
  onClose: () => void
  feature: FeatureDetail | null
}

export const GuaranteeModal = ({ isOpen, onClose, feature }: GuaranteeModalProps) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setCurrentPage(0)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!feature) return null

  const pages = [
    {
      step: 1,
      title: feature.tiers.s1?.title || "Tier 1: Local Authority",
      content: feature.tiers.s1?.content || feature.tiers.t1,
      theme: "bg-white border-brand-charcoal/10 text-brand-charcoal",
      tag: feature.tiers.s1 ? "Step 1" : null,
      cornerColor: "border-b-brand-charcoal/10 border-r-[#f5f5f5]" 
    },
    {
      step: 2,
      title: feature.tiers.s2?.title || "Tier 2: Territory Dominator",
      content: feature.tiers.s2?.content || feature.tiers.t2,
      theme: "bg-brand-mustard/10 border-brand-mustard text-brand-charcoal",
      tag: feature.tiers.s2 ? "Step 2" : "Popular",
      cornerColor: "border-b-brand-mustard/20 border-r-[#f0e4b8]"
    },
    {
      step: 3,
      title: feature.tiers.s3?.title || "Tier 3: Enterprise Takeover",
      content: feature.tiers.s3?.content || feature.tiers.t3,
      theme: "bg-brand-charcoal border-brand-charcoal text-brand-ivory",
      tag: feature.tiers.s3 ? "Step 3" : "Maximum Scale",
      cornerColor: "border-b-brand-ivory/20 border-r-[#2a2a2a]"
    }
  ]

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentPage((prev) => {
      let next = prev + newDirection
      if (next < 0) next = 0
      if (next >= pages.length) next = pages.length - 1
      return next
    })
  }

  const variants = {
    enter: (direction: number) => {
      return {
        rotateY: direction > 0 ? 90 : -90,
        opacity: 0,
        x: direction > 0 ? 50 : -50,
      }
    },
    center: {
      zIndex: 1,
      rotateY: 0,
      opacity: 1,
      x: 0,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        rotateY: direction < 0 ? 90 : -90,
        opacity: 0,
        x: direction < 0 ? -50 : 50,
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 sm:px-6 py-12 perspective-[2000px]">
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
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-brand-ivory rounded-none border-2 border-brand-charcoal shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85dvh] sm:max-h-[90dvh]"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 sm:p-8 border-b border-brand-charcoal/10 bg-white shrink-0">
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal pr-8">
                {feature.title}
              </h3>
              <button 
                onClick={onClose}
                className="absolute right-4 top-4 sm:right-6 sm:top-6 md:top-8 w-12 h-12 flex items-center justify-center text-brand-charcoal text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 sm:p-8 flex-grow flex flex-col min-h-[450px]">
              <p className="text-lg text-brand-charcoal/70 font-medium leading-relaxed mb-8 shrink-0">
                {feature.description}
              </p>
              
              <div className="flex-grow relative flex flex-col">
                <div className="flex items-center justify-between mb-4 shrink-0">
                  <div className="text-xs font-sora font-extrabold tracking-[0.2em] uppercase text-brand-mustard">Tier Breakdown</div>
                  <div className="flex gap-2">
                    {pages.map((_, idx) => (
                      <div key={idx} className={`w-2 h-2 rounded-full transition-colors ${idx === currentPage ? 'bg-brand-mustard' : 'bg-brand-charcoal/20'}`} />
                    ))}
                  </div>
                </div>

                <div className="relative flex-grow h-full min-h-[250px] [perspective:1000px] select-none">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentPage}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                        rotateY: { duration: 0.4 }
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        if (swipe < -10000 || offset.x < -50) {
                          if (currentPage < pages.length - 1) paginate(1);
                        } else if (swipe > 10000 || offset.x > 50) {
                          if (currentPage > 0) paginate(-1);
                        }
                      }}
                      className={`absolute inset-0 w-full h-full p-8 sm:p-10 border-2 ${pages[currentPage].theme} rounded-sm flex flex-col justify-center cursor-grab active:cursor-grabbing origin-center shadow-lg overflow-hidden`}
                    >
                      {pages[currentPage].tag && (
                        <div className="absolute top-0 right-0 bg-brand-mustard text-brand-charcoal text-xs font-sora font-bold uppercase tracking-widest px-3 py-1">
                          {pages[currentPage].tag}
                        </div>
                      )}
                      
                      <div className={`text-xs font-sora font-extrabold uppercase tracking-widest mb-4 opacity-50`}>
                        Step {currentPage + 1} of 3
                      </div>
                      <div className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight mb-4">
                        {pages[currentPage].title}
                      </div>
                      <div className="text-lg font-medium leading-relaxed opacity-90">
                        {pages[currentPage].content}
                      </div>

                      {/* Page Turn Corner Clue (Desktop Only) */}
                      {currentPage < pages.length - 1 && (
                        <div 
                          className="hidden sm:block absolute bottom-0 right-0 w-16 h-16 cursor-pointer group z-20"
                          onClick={(e) => {
                            e.stopPropagation()
                            paginate(1)
                          }}
                          title="Click to flip page"
                        >
                          {/* The folded corner itself */}
                          <motion.div 
                            className={`absolute bottom-0 right-0 w-0 h-0 border-solid border-t-[40px] border-l-[40px] border-t-transparent border-l-transparent border-b-[40px] border-r-[40px] ${pages[currentPage].cornerColor} drop-shadow-[-4px_-4px_4px_rgba(0,0,0,0.1)] transition-all origin-bottom-right`}
                            animate={{ 
                              borderBottomWidth: ["40px", "45px", "40px"],
                              borderRightWidth: ["40px", "45px", "40px"]
                            }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            whileHover={{ scale: 1.15 }}
                          />
                        </div>
                      )}

                      {/* Mobile Swipe Hint */}
                      {currentPage < pages.length - 1 && (
                        <div className="absolute bottom-4 right-4 sm:hidden text-xs font-sora font-extrabold tracking-widest opacity-40 flex items-center gap-2">
                          Swipe <span className="text-lg">→</span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex justify-between items-center mt-6 shrink-0">
                  <button 
                    onClick={() => paginate(-1)}
                    disabled={currentPage === 0}
                    className="text-sm font-sora font-extrabold uppercase tracking-widest text-brand-charcoal/50 hover:text-brand-charcoal disabled:opacity-20 transition-colors px-4 py-3 min-h-[48px] flex items-center"
                  >
                    ← Prev
                  </button>
                  <button 
                    onClick={() => {
                      if (currentPage < pages.length - 1) {
                        paginate(1)
                      } else {
                        onClose()
                      }
                    }}
                    className="text-sm font-sora font-extrabold uppercase tracking-widest text-brand-mustard hover:text-brand-charcoal transition-colors px-6 py-3 min-h-[48px] flex items-center border-2 border-transparent hover:border-brand-mustard rounded-full"
                  >
                    {currentPage === pages.length - 1 ? 'Finish' : 'Next →'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}