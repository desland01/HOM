'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, ScaleReveal } from '@/components/ui/animations'
import Link from 'next/link'

function Check({ className, strokeWidth = 3 }: { className?: string, strokeWidth?: number }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  )
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

const BUILDS = [
  { id: 'foundation', name: 'Foundation', price: 2250, growthPrice: 499, growthName: 'Local Authority', desc: '1 Primary City Hub + 5 Service Pages.' },
  { id: 'expansion', name: 'Expansion', price: 3400, growthPrice: 999, growthName: 'Market Scaler', desc: '4 Location Hubs + 20 Service Pages.', isPopular: true },
  { id: 'takeover', name: 'Metro Build', price: 5250, growthPrice: 1999, growthName: 'Elite Growth', desc: '10 Location Hubs + 70 Service Pages.' }
]

const ADD_ONS = [
  { id: 'cleanup', name: 'Human Citation Clean-Up', price: 699, desc: 'One-time manual audit & fix. Recommended if your current listings are a mess.' },
  { id: 'location', name: 'Additional Google Profile', price: 199, type: 'monthly', desc: 'For businesses with multiple GBP locations or those expanding into a new territory.' }
]

export function Configurator() {
  const [step, setStep] = useState(1)
  const [selection, setSelected] = useState<{
    build: string | null
    addons: string[]
  }>({
    build: 'expansion',
    addons: []
  })

  const nextStep = () => setStep(s => Math.min(s + 1, 3))
  const prevStep = () => setStep(s => Math.max(s - 1, 1))

  const selectedBuild = BUILDS.find(b => b.id === selection.build)
  
  const buildPrice = selectedBuild?.price || 0
  const monthlyAddonsPrice = ADD_ONS.filter(a => selection.addons.includes(a.id) && a.type === 'monthly').reduce((acc, curr) => acc + (curr.price || 0), 0)
  const oneTimeAddonsPrice = ADD_ONS.filter(a => selection.addons.includes(a.id) && !a.type).reduce((acc, curr) => acc + (curr.price || 0), 0)

  // Total 90-day investment is now just the Build Price (which includes 3 months of the growth plan) + any Add-on costs
  // Monthly add-ons are multiplied by 3 for the 90-day total
  const total90DayInvestment = buildPrice + oneTimeAddonsPrice + (monthlyAddonsPrice * 3)

  return (
    <section id="configurator" className="py-24 lg:py-40 bg-brand-charcoal text-brand-ivory relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">Step {step} of 3</FadeIn>
          <h2 className="text-4xl sm:text-6xl font-sora font-extrabold uppercase tracking-tighter-extreme mb-6">Build Your Engine</h2>
          <p className="text-brand-ivory/50 max-w-2xl text-lg text-center">Configure your 90-day pilot program. We build the asset that attracts abundance, you see the results, then you decide the future.</p>
        </div>

        <div className="min-h-[500px] flex flex-col">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-sora font-bold uppercase tracking-tight">1. Choose Your Build Asset</h3>
                  <p className="text-brand-ivory/40 mt-2">Price includes asset construction plus your first 90 days of active growth.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {BUILDS.map(b => (
                    <SelectionCard 
                      key={b.id} 
                      title={b.name} 
                      price={`$${b.price}`} 
                      desc={b.desc} 
                      note={`Includes 90 days of ${b.growthName}`}
                      selected={selection.build === b.id} 
                      isPopular={b.isPopular}
                      onClick={() => setSelected({ ...selection, build: b.id })} 
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-sora font-bold uppercase tracking-tight">2. The 90-Day Roadmap</h3>
                  <p className="text-brand-ivory/40 mt-2">Review your pilot program and add optional high-impact infrastructure.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-7 space-y-6">
                    <h4 className="text-xs font-sora font-extrabold uppercase tracking-widest text-brand-mustard">Optional Add-ons</h4>
                    <div className="space-y-4">
                      {ADD_ONS.map(a => (
                        <button 
                          key={a.id}
                          onClick={() => {
                            const newAddons = selection.addons.includes(a.id) 
                              ? selection.addons.filter(i => i !== a.id)
                              : [...selection.addons, a.id]
                            setSelected({ ...selection, addons: newAddons })
                          }}
                          className={`w-full flex items-center justify-between p-6 border-2 transition-all ${selection.addons.includes(a.id) ? 'border-brand-mustard bg-brand-mustard/10' : 'border-brand-ivory/10 hover:border-brand-ivory/30 bg-white/5'}`}
                        >
                          <div className="flex items-center gap-4 text-left">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selection.addons.includes(a.id) ? 'border-brand-mustard bg-brand-mustard' : 'border-brand-ivory/20'}`}>
                              {selection.addons.includes(a.id) && <Check className="w-4 h-4 text-brand-charcoal" />}
                            </div>
                            <div>
                              <div className="font-bold">{a.name}</div>
                              <div className="text-xs text-brand-ivory/40 uppercase tracking-widest">+{a.price}{a.type ? `/${a.type}` : ' (One-Time)'}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white text-brand-charcoal p-8 border-2 border-brand-charcoal shadow-[20px_20px_0px_rgba(201,162,39,1)]">
                    <h4 className="text-xs font-sora font-extrabold uppercase tracking-widest text-brand-charcoal/40 mb-8">Investment Summary</h4>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between font-bold">
                        <span>{selectedBuild?.name} Pilot</span>
                        <span>${buildPrice}</span>
                      </div>
                      <div className="text-[10px] text-brand-charcoal/40 uppercase font-bold italic -mt-2">
                        *Includes Build + 90 Days of {selectedBuild?.growthName}
                      </div>
                      {selection.addons.length > 0 && (
                        <div className="pt-4 border-t border-brand-charcoal/10 space-y-2">
                          <div className="text-xs font-extrabold uppercase text-brand-charcoal/40 mb-2">Add-ons</div>
                          {ADD_ONS.filter(a => selection.addons.includes(a.id)).map(a => (
                            <div key={a.id} className="flex justify-between text-sm font-medium">
                              <span>{a.name}</span>
                              <span>${a.type === 'monthly' ? a.price * 3 : a.price}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="pt-8 border-t-2 border-brand-charcoal space-y-1">
                      <div className="text-xs font-sora font-extrabold uppercase tracking-widest text-brand-mustard">Total 90-Day Investment</div>
                      <div className="text-5xl font-sora font-extrabold tracking-tighter-extreme">${total90DayInvestment}</div>
                      <p className="text-[10px] uppercase font-bold text-brand-charcoal/40 mt-2 leading-tight italic">
                        *Full investment for the 90-day proof period.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex flex-col items-center text-center py-12">
                <div className="w-20 h-20 bg-brand-mustard rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(201,162,39,0.4)] animate-pulse">
                  <Check className="w-10 h-10 text-brand-charcoal" strokeWidth={3} />
                </div>
                <h3 className="text-3xl sm:text-5xl font-sora font-extrabold uppercase tracking-tight mb-6 text-center">Engine Configured.</h3>
                <p className="text-xl text-brand-ivory/70 max-w-2xl leading-relaxed mb-12 text-center">
                  At the 10-week mark, we'll review your ROI together. You'll choose to continue for 6, 12, or 24 months, or we part as friends with you owning every asset we built.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
                  <Link 
                    href={`mailto:hello@homeownermarketers.com?subject=Pilot%20Application&body=Build:%20${selectedBuild?.name}%0AAddons:%20${selection.addons.join(',%20')}%0ATotal:%20$${total90DayInvestment}`}
                    className="flex-1 group relative inline-flex items-center justify-center px-10 py-6 overflow-hidden font-sora font-extrabold text-brand-charcoal bg-brand-mustard transition-all duration-300 ease-out hover:scale-[1.05] active:scale-95 shadow-xl text-lg uppercase tracking-widest text-center text-center"
                  >
                    <span className="relative z-10 flex items-center gap-4">
                      Lock In Slot <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Link>
                  <Link 
                    href="https://calendly.com/homeownermarketers" 
                    className="flex-1 group inline-flex items-center justify-center px-10 py-6 overflow-hidden font-sora font-extrabold text-brand-ivory border-2 border-brand-ivory transition-all duration-300 hover:bg-white hover:text-brand-charcoal text-lg uppercase tracking-widest text-center"
                  >
                    <span className="relative z-10 flex items-center gap-4">
                      Book Strategy Call <CalendarIcon className="w-6 h-6" />
                    </span>
                  </Link>
                </div>
                <p className="text-brand-ivory/30 text-xs mt-12 font-medium uppercase tracking-[0.2em] text-center text-center">
                  Btw... we built this entire configurator in 20 minutes. Are you getting in?
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          {step < 3 && (
            <div className="mt-16 flex items-center justify-between border-t border-brand-ivory/10 pt-12">
              <button 
                onClick={prevStep} 
                disabled={step === 1}
                className={`flex items-center gap-2 font-sora font-extrabold uppercase tracking-widest text-sm transition-all ${step === 1 ? 'opacity-0' : 'hover:text-brand-mustard'}`}
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              
              <div className="flex-1 flex justify-center gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`h-1 rounded-full transition-all duration-500 ${step === i ? 'w-8 bg-brand-mustard' : 'w-2 bg-brand-ivory/20'}`} />
                ))}
              </div>

              <button 
                onClick={nextStep}
                className="group flex items-center gap-4 px-8 py-4 bg-brand-ivory text-brand-charcoal font-sora font-extrabold uppercase tracking-widest text-sm hover:bg-brand-mustard transition-all"
              >
                Next Step <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>

        {/* UNSURE PATH */}
        {step < 3 && (
          <div className="mt-32 text-center border-t border-brand-ivory/5 pt-12">
            <p className="text-brand-ivory/40 mb-6 font-medium italic">Not sure which build size fits your current crew?</p>
            <Link 
              href="https://calendly.com/homeownermarketers" 
              className="inline-flex items-center gap-3 text-brand-mustard font-sora font-extrabold uppercase tracking-widest text-xs hover:text-white transition-colors text-center text-center"
            >
              <CalendarIcon className="w-4 h-4" /> Speak with an advisor directly
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

function SelectionCard({ title, price, desc, note, selected, isPopular, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`relative p-8 border-2 text-left transition-all duration-500 group
        ${selected ? 'border-brand-mustard bg-brand-mustard/5' : 'border-brand-ivory/10 hover:border-brand-ivory/30 bg-white/5'}`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-brand-mustard text-brand-charcoal text-[10px] font-sora font-extrabold uppercase tracking-widest">
          Recommended
        </div>
      )}
      <div className={`w-6 h-6 rounded-full border-2 mb-6 flex items-center justify-center transition-all ${selected ? 'border-brand-mustard' : 'border-brand-ivory/20 group-hover:border-brand-ivory/40'}`}>
        {selected && <div className="w-2.5 h-2.5 rounded-full bg-brand-mustard shadow-[0_0_10px_var(--brand-mustard)]" />}
      </div>
      <h4 className="text-lg font-sora font-extrabold uppercase mb-1">{title}</h4>
      <div className="text-2xl font-sora font-extrabold text-brand-mustard mb-2">{price}</div>
      <p className="text-[10px] font-sora font-extrabold uppercase tracking-widest text-brand-mustard/60 mb-4">{note}</p>
      <p className="text-sm text-brand-ivory/50 font-medium leading-relaxed">{desc}</p>
    </button>
  )
}
