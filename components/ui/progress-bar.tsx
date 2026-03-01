'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
  variant?: 'light' | 'dark'
}

export function ProgressBar({
  currentStep,
  totalSteps,
  variant = 'dark',
}: ProgressBarProps) {
  const isLight = variant === 'light'

  const getCircleClasses = (step: number): string => {
    const base =
      'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-sora font-extrabold'

    if (step < currentStep) {
      return `${base} bg-brand-mustard text-brand-charcoal`
    }

    if (step === currentStep) {
      return `${base} bg-brand-mustard text-brand-charcoal ring-4 ring-brand-mustard/30`
    }

    if (isLight) {
      return `${base} bg-brand-charcoal/10 text-brand-charcoal/30`
    }

    return `${base} bg-brand-ivory/10 text-brand-ivory/30`
  }

  const getLineClasses = (step: number): string => {
    if (step < currentStep) {
      return 'flex-1 h-0.5 bg-brand-mustard'
    }

    if (isLight) {
      return 'flex-1 h-0.5 bg-brand-charcoal/10'
    }

    return 'flex-1 h-0.5 bg-brand-ivory/10'
  }

  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1)

  return (
    <div className="w-full max-w-md mx-auto mb-12">
      <div className="flex items-center gap-0 w-full">
        {steps.map((step) => (
          <div key={step} className="flex items-center flex-1 last:flex-none">
            {step === currentStep ? (
              <motion.div
                className={getCircleClasses(step)}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {step}
              </motion.div>
            ) : (
              <div className={getCircleClasses(step)}>{step}</div>
            )}
            {step < totalSteps && <div className={getLineClasses(step)} />}
          </div>
        ))}
      </div>
    </div>
  )
}
