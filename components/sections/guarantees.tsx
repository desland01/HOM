'use client'

import { FadeIn, TextReveal, Parallax, ScaleReveal } from '@/components/ui/animations'

export const Guarantees = () => {
  const guarantees = [
    {
      title: "90+ PageSpeed",
      desc: "Every page scores 90+ on Google PageSpeed Insights. Mobile and desktop. If not, we fix it free.",
    },
    {
      title: "Risk-Free 90 Days",
      desc: "Your upfront investment covers the build AND 90 days of management. If you're not thrilled, walk away.",
    },
    {
      title: "Walk-Away Clause",
      desc: "Not satisfied after the proof period? We reconnect your old site, handle redirects, and you owe nothing more.",
    },
    {
      title: "14-Day Delivery",
      desc: "Your site goes live within 14 days of kickoff. If we miss it, you get 20% off.",
    },
    {
      title: "Pay Upon Approval",
      desc: "We build your entire site before you pay. You review it, request changes, and only pay once you're 100% satisfied.",
    }
  ]

  return (
    <section className="py-24 lg:py-40 px-6 sm:px-12 bg-brand-charcoal text-brand-ivory relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--brand-mustard)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">Our Promises</FadeIn>
            <TextReveal 
              text="GUARANTEES THAT MEAN SOMETHING." 
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase mb-8"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {guarantees.map((item, i) => (
            <ScaleReveal 
              key={i} 
              delay={i * 0.1}
              className={`p-10 border border-brand-ivory/10 hover:bg-brand-ivory/5 transition-colors duration-500 flex flex-col ${i === 4 ? 'lg:col-span-2' : ''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-mustard/10 text-brand-mustard flex items-center justify-center mb-8 border border-brand-mustard/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-xs font-sora font-extrabold tracking-[0.2em] uppercase text-brand-mustard mb-3">All Tiers</div>
              <h4 className="text-2xl font-sora font-extrabold mb-4 uppercase tracking-tight">{item.title}</h4>
              <p className="text-brand-ivory/60 leading-relaxed font-medium mt-auto">{item.desc}</p>
            </ScaleReveal>
          ))}
        </div>
      </div>
    </section>
  )
}