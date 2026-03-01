'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface SelectionCardProps {
  title: string
  description: string
  icon?: string
  selected: boolean
  onSelect: () => void
}

export function SelectionCard({
  title,
  description,
  icon,
  selected,
  onSelect,
}: SelectionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileTap={{ scale: 0.98 }}
      className={`w-full text-left p-6 sm:p-8 border-2 transition-all duration-300 cursor-pointer flex items-start gap-4 ${
        selected
          ? 'border-brand-mustard bg-brand-mustard/5'
          : 'border-brand-charcoal/10 bg-white hover:border-brand-charcoal/20'
      }`}
      aria-pressed={selected}
    >
      {icon && (
        <span
          className="text-3xl leading-none flex-shrink-0"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-lg sm:text-xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal">
          {title}
        </span>
        <span className="text-sm sm:text-base text-brand-charcoal/60 font-medium mt-1 leading-relaxed">
          {description}
        </span>
      </div>
      <div className="flex-shrink-0 self-center">
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key="checked"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-6 h-6 rounded-full bg-brand-mustard flex items-center justify-center"
            >
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="unchecked"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="w-6 h-6 rounded-full border-2 border-brand-charcoal/20"
            />
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  )
}
