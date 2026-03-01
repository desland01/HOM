'use client'

import { motion } from 'framer-motion'

export function FunnelStep({
  children,
  direction,
}: {
  children: React.ReactNode
  direction: 'forward' | 'back'
}) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: direction === 'forward' ? 60 : -60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction === 'forward' ? -60 : 60 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}
