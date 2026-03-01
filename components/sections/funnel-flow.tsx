'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { FadeIn, TextReveal, Magnetic } from '@/components/ui/animations'
import { FunnelStep } from '@/components/ui/funnel-step'
import { ProgressBar } from '@/components/ui/progress-bar'
import { SelectionCard } from '@/components/ui/selection-card'

type FunnelStepNumber = 1 | 2 | 3 | 4
type GrowthGoal = 'fill' | 'dominate' | 'takeover'

interface FunnelState {
  step: FunnelStepNumber | 'complete'
  territory: string
  growthGoal: GrowthGoal | null
  selectedTier: 1 | 2 | 3 | null
  contact: { name: string; email: string; phone: string; message: string }
}

const GOAL_TO_TIER: Record<GrowthGoal, 1 | 2 | 3> = {
  fill: 1,
  dominate: 2,
  takeover: 3,
}

const TIER_DATA = [
  {
    tier: 1 as const,
    label: 'TIER 01',
    title: 'Local Foundation',
    price: '$2,250',
    features: [
      '5 service pages',
      'Google Business setup',
      '1 monthly blog post',
      '90-day rank tracking',
    ],
  },
  {
    tier: 2 as const,
    label: 'TIER 02',
    title: 'Territory Expansion',
    price: '$3,400',
    features: [
      '4 location hubs',
      'Competitor gap analysis',
      'AI chat widget',
      'Bi-weekly strategy calls',
    ],
  },
  {
    tier: 3 as const,
    label: 'TIER 03',
    title: 'Enterprise Takeover',
    price: '$5,250',
    features: [
      '10 location hubs',
      'Unlimited AI chat',
      'Video + FAQ content',
      'Monthly war-room calls',
    ],
  },
]

export function FunnelFlow() {
  const [state, setState] = useState<FunnelState>({
    step: 1,
    territory: '',
    growthGoal: null,
    selectedTier: null,
    contact: { name: '', email: '', phone: '', message: '' },
  })

  const [direction, setDirection] = useState<'forward' | 'back'>('forward')

  const goForward = useCallback(() => {
    setDirection('forward')
    setState((prev) => {
      if (prev.step === 'complete') return prev
      if (prev.step === 4) return { ...prev, step: 'complete' as const }
      return { ...prev, step: ((prev.step + 1) as FunnelStepNumber) }
    })
  }, [])

  const goBack = useCallback(() => {
    setDirection('back')
    setState((prev) => {
      if (prev.step === 'complete' || prev.step === 1) return prev
      return { ...prev, step: ((prev.step - 1) as FunnelStepNumber) }
    })
  }, [])

  const handleTerritoryChange = useCallback((value: string) => {
    setState((prev) => ({ ...prev, territory: value }))
  }, [])

  const handleGoalSelect = useCallback((goal: GrowthGoal) => {
    setState((prev) => ({ ...prev, growthGoal: goal }))
  }, [])

  const handleTierSelect = useCallback((tier: 1 | 2 | 3) => {
    setState((prev) => ({ ...prev, selectedTier: tier }))
    setDirection('forward')
    setState((prev) => {
      if (prev.step === 'complete') return prev
      return { ...prev, step: ((prev.step as number + 1) as FunnelStepNumber) }
    })
  }, [])

  const handleContactChange = useCallback(
    (field: keyof FunnelState['contact'], value: string) => {
      setState((prev) => ({
        ...prev,
        contact: { ...prev.contact, [field]: value },
      }))
    },
    []
  )

  const handleSubmit = useCallback(() => {
    if (
      !state.contact.name.trim() ||
      !state.contact.email.trim() ||
      !state.contact.phone.trim()
    ) {
      return
    }

    // eslint-disable-next-line no-console
    console.log('Funnel submission:', {
      territory: state.territory,
      growthGoal: state.growthGoal,
      selectedTier: state.selectedTier,
      contact: state.contact,
    })

    goForward()
  }, [state, goForward])

  const isStep = (s: FunnelStepNumber | 'complete'): s is FunnelStepNumber => {
    return typeof s === 'number'
  }

  const recommendedTier = state.growthGoal
    ? GOAL_TO_TIER[state.growthGoal]
    : null

  const progressVariant =
    state.step === 1 || state.step === 4 ? 'dark' : 'light'

  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Progress Bar */}
      {isStep(state.step) && (
        <div
          className={`pt-8 px-6 ${
            state.step === 1 || state.step === 4
              ? 'bg-brand-charcoal'
              : 'bg-brand-ivory'
          }`}
        >
          <ProgressBar
            currentStep={state.step}
            totalSteps={4}
            variant={progressVariant}
          />
        </div>
      )}

      {/* Steps */}
      <AnimatePresence mode="wait">
        {/* Step 1: Where Do You Paint? */}
        {state.step === 1 && (
          <FunnelStep key="step-1" direction={direction}>
            <div className="bg-brand-charcoal text-brand-ivory flex flex-col items-center justify-center min-h-[80vh] px-6">
              <FadeIn>
                <p className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6 text-center">
                  STEP 1 OF 4
                </p>
              </FadeIn>

              <TextReveal
                text="WHERE DO YOU PAINT?"
                className="text-3xl sm:text-5xl lg:text-6xl mb-12 font-sora font-extrabold tracking-tighter-extreme uppercase justify-center text-center"
              />

              <input
                type="text"
                value={state.territory}
                onChange={(e) => handleTerritoryChange(e.target.value)}
                placeholder="City or zip code"
                aria-label="Your service territory -- city or zip code"
                className="w-full max-w-md bg-transparent border-b-2 border-brand-ivory/30 focus:border-brand-mustard text-2xl sm:text-3xl font-sora font-bold text-center py-4 outline-none transition-colors placeholder:text-brand-ivory/30"
              />

              <p className="text-sm text-brand-ivory/40 mt-4 text-center">
                We accept one company per area.
              </p>

              <AnimatePresence>
                {state.territory.trim().length >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 w-full sm:w-auto flex justify-center"
                  >
                    <Magnetic>
                      <button
                        type="button"
                        onClick={goForward}
                        className="bg-brand-mustard text-brand-charcoal font-sora font-extrabold uppercase tracking-widest px-10 py-5 min-h-[48px] w-full sm:w-auto cursor-pointer"
                      >
                        CHECK AVAILABILITY
                      </button>
                    </Magnetic>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FunnelStep>
        )}

        {/* Step 2: Growth Goal */}
        {state.step === 2 && (
          <FunnelStep key="step-2" direction={direction}>
            <div className="bg-brand-ivory text-brand-charcoal flex flex-col items-center justify-center min-h-[80vh] px-6 py-12">
              <FadeIn>
                <p className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6 text-center">
                  STEP 2 OF 4
                </p>
              </FadeIn>

              <TextReveal
                text="WHAT DOES GROWTH LOOK LIKE FOR YOU?"
                className="text-3xl sm:text-4xl lg:text-5xl mb-12 font-sora font-extrabold tracking-tighter-extreme uppercase justify-center text-center"
              />

              <div className="flex flex-col gap-4 w-full max-w-lg">
                <SelectionCard
                  title="Fill My Calendar"
                  description="You want a steady stream of quality estimates. Consistent work, better clients, less chasing."
                  icon="📅"
                  selected={state.growthGoal === 'fill'}
                  onSelect={() => handleGoalSelect('fill')}
                />
                <SelectionCard
                  title="Dominate My Market"
                  description="You want to be the first name people find. More visibility, more calls, higher-ticket jobs."
                  icon="🎯"
                  selected={state.growthGoal === 'dominate'}
                  onSelect={() => handleGoalSelect('dominate')}
                />
                <SelectionCard
                  title="Full Metro Takeover"
                  description="You want every zip code in your metro covered. Multiple crews, maximum territory, total market control."
                  icon="🚀"
                  selected={state.growthGoal === 'takeover'}
                  onSelect={() => handleGoalSelect('takeover')}
                />
              </div>

              <AnimatePresence>
                {state.growthGoal && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="mt-8 flex flex-col items-center"
                  >
                    <Magnetic>
                      <button
                        type="button"
                        onClick={goForward}
                        className="bg-brand-mustard text-brand-charcoal font-sora font-extrabold uppercase tracking-widest px-10 py-5 min-h-[48px] cursor-pointer"
                      >
                        CONTINUE
                      </button>
                    </Magnetic>
                    <button
                      type="button"
                      onClick={goBack}
                      className="text-sm text-brand-charcoal/40 hover:text-brand-charcoal cursor-pointer mt-4 min-h-[48px] flex items-center transition-colors"
                    >
                      &larr; Back
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FunnelStep>
        )}

        {/* Step 3: Plan Selection */}
        {state.step === 3 && (
          <FunnelStep key="step-3" direction={direction}>
            <div className="bg-brand-ivory text-brand-charcoal flex flex-col items-center min-h-[80vh] px-6 py-12">
              <FadeIn>
                <p className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6 text-center">
                  STEP 3 OF 4
                </p>
              </FadeIn>

              <TextReveal
                text="HERE IS YOUR PLAN."
                className="text-3xl sm:text-4xl lg:text-5xl mb-4 font-sora font-extrabold tracking-tighter-extreme uppercase justify-center text-center"
              />

              <FadeIn delay={0.2}>
                <p className="text-brand-charcoal/50 mb-12 text-center text-base sm:text-lg">
                  Based on your goal, we recommend starting here.
                </p>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
                {TIER_DATA.map((tier) => {
                  const isRecommended = tier.tier === recommendedTier

                  return (
                    <FadeIn
                      key={tier.tier}
                      delay={0.1 * tier.tier}
                      className="relative"
                    >
                      <div
                        className={`relative p-8 border-2 transition-all ${
                          isRecommended
                            ? 'border-brand-mustard bg-brand-mustard/5'
                            : 'border-brand-charcoal/10 bg-white'
                        }`}
                      >
                        {isRecommended && (
                          <span className="absolute -top-3 left-8 bg-brand-mustard text-brand-charcoal text-xs font-sora font-extrabold tracking-widest uppercase px-3 py-1">
                            Recommended for you
                          </span>
                        )}

                        <p className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-charcoal/40">
                          {tier.label}
                        </p>

                        <h3 className="text-xl sm:text-2xl font-sora font-extrabold uppercase tracking-tight mb-4 mt-2">
                          {tier.title}
                        </h3>

                        <p className="text-3xl sm:text-4xl font-sora font-extrabold tracking-tighter-extreme mb-6">
                          {tier.price}
                        </p>

                        <ul className="space-y-3 mb-8">
                          {tier.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3 text-sm sm:text-base text-brand-charcoal/70"
                            >
                              <span
                                className="text-brand-mustard font-bold text-lg leading-none flex-shrink-0"
                                aria-hidden="true"
                              >
                                /
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <button
                          type="button"
                          onClick={() => handleTierSelect(tier.tier)}
                          className={`w-full py-4 min-h-[48px] font-sora font-extrabold uppercase tracking-widest text-center cursor-pointer transition-colors ${
                            isRecommended
                              ? 'bg-brand-charcoal text-brand-ivory hover:bg-brand-mustard hover:text-brand-charcoal'
                              : 'bg-brand-charcoal/5 text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-ivory'
                          }`}
                          aria-label={`Select ${tier.title} plan at ${tier.price}`}
                        >
                          SELECT THIS PLAN
                        </button>
                      </div>
                    </FadeIn>
                  )
                })}
              </div>

              <button
                type="button"
                onClick={goBack}
                className="text-sm text-brand-charcoal/40 hover:text-brand-charcoal cursor-pointer mt-8 min-h-[48px] flex items-center transition-colors"
              >
                &larr; Back
              </button>
            </div>
          </FunnelStep>
        )}

        {/* Step 4: Contact / Lock In */}
        {state.step === 4 && (
          <FunnelStep key="step-4" direction={direction}>
            <div className="bg-brand-charcoal text-brand-ivory flex flex-col items-center justify-center min-h-[80vh] px-6 py-12">
              <FadeIn>
                <p className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6 text-center">
                  STEP 4 OF 4
                </p>
              </FadeIn>

              <TextReveal
                text={`${state.territory.trim() || 'Your area'} is still open. Claim your exclusive position.`}
                className="text-2xl sm:text-3xl lg:text-4xl font-sora font-extrabold mb-12 justify-center text-center"
              />

              <div className="flex flex-col gap-4 w-full max-w-md">
                <input
                  type="text"
                  value={state.contact.name}
                  onChange={(e) => handleContactChange('name', e.target.value)}
                  placeholder="Your name"
                  aria-label="Your name"
                  className="bg-transparent border-b-2 border-brand-ivory/20 focus:border-brand-mustard py-4 text-lg font-medium outline-none placeholder-brand-ivory/30 transition-colors"
                />
                <input
                  type="email"
                  value={state.contact.email}
                  onChange={(e) => handleContactChange('email', e.target.value)}
                  placeholder="Email address"
                  aria-label="Email address"
                  className="bg-transparent border-b-2 border-brand-ivory/20 focus:border-brand-mustard py-4 text-lg font-medium outline-none placeholder-brand-ivory/30 transition-colors"
                />
                <input
                  type="tel"
                  value={state.contact.phone}
                  onChange={(e) => handleContactChange('phone', e.target.value)}
                  placeholder="Phone number"
                  aria-label="Phone number"
                  className="bg-transparent border-b-2 border-brand-ivory/20 focus:border-brand-mustard py-4 text-lg font-medium outline-none placeholder-brand-ivory/30 transition-colors"
                />
                <textarea
                  value={state.contact.message}
                  onChange={(e) =>
                    handleContactChange('message', e.target.value)
                  }
                  placeholder="Anything else we should know? (Optional)"
                  aria-label="Additional message (optional)"
                  className="bg-transparent border-b-2 border-brand-ivory/20 focus:border-brand-mustard py-4 text-lg font-medium outline-none placeholder-brand-ivory/30 transition-colors resize-none h-24"
                />
              </div>

              <div className="mt-8 w-full max-w-md">
                <Magnetic>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-brand-mustard text-brand-charcoal w-full py-5 min-h-[48px] font-sora font-extrabold uppercase tracking-widest cursor-pointer"
                  >
                    CLAIM MY TERRITORY
                  </button>
                </Magnetic>
              </div>

              <p className="text-sm text-brand-ivory/30 mt-4 text-center">
                No commitment. No credit card.
              </p>

              <button
                type="button"
                onClick={goBack}
                className="text-sm text-brand-ivory/40 hover:text-brand-ivory cursor-pointer mt-4 min-h-[48px] flex items-center transition-colors"
              >
                &larr; Back
              </button>
            </div>
          </FunnelStep>
        )}

        {/* Completion State */}
        {state.step === 'complete' && (
          <FunnelStep key="step-complete" direction={direction}>
            <div className="bg-brand-mustard text-brand-charcoal flex flex-col items-center justify-center min-h-[100dvh] px-6 text-center">
              <FadeIn>
                <p className="text-6xl mb-8" aria-hidden="true">
                  &#10003;
                </p>
              </FadeIn>

              <TextReveal
                text="YOU ARE IN."
                className="text-4xl sm:text-6xl lg:text-7xl mb-8 font-sora font-extrabold tracking-tighter-extreme uppercase justify-center"
              />

              <FadeIn delay={0.3}>
                <p className="text-xl sm:text-2xl font-medium mb-4">
                  Your territory hold for {state.territory.trim() || 'your area'}{' '}
                  has been submitted.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <p className="text-lg text-brand-charcoal/60 mb-12">
                  Our crew will reach out within 24 hours to lock in your
                  exclusive position.
                </p>
              </FadeIn>

              <FadeIn delay={0.7}>
                <p className="text-2xl font-sora font-extrabold mb-12">
                  Welcome to the 6-month head start.
                </p>
              </FadeIn>

              <FadeIn delay={0.9}>
                <Link
                  href="/"
                  className="text-sm font-medium text-brand-charcoal/50 hover:text-brand-charcoal transition-colors"
                >
                  &larr; Back to Homepage
                </Link>
              </FadeIn>
            </div>
          </FunnelStep>
        )}
      </AnimatePresence>
    </div>
  )
}
