'use client'

import { FadeIn, TextReveal, ScaleReveal } from '@/components/ui/animations'
import Link from 'next/link'
import Image from 'next/image'

export default function GetStartedFunnel() {
  return (
    <main className="min-h-[100svh] bg-brand-charcoal selection:bg-brand-mustard selection:text-brand-charcoal overflow-clip text-brand-ivory font-medium">
      
      {/* MINIMAL HEADER - NO DISTRACTIONS */}
      <nav className="w-full p-6 sm:px-12 flex justify-center border-b border-brand-ivory/10">
        <Link href="/" className="inline-block">
          <Image
            src="/HM-Logo.png"
            alt="Homeowner Marketers"
            width={200}
            height={60}
            priority
            className="h-8 sm:h-10 w-auto object-contain opacity-80"
          />
        </Link>
      </nav>

      <article className="max-w-[800px] mx-auto px-6 py-20 sm:py-32">
        
        {/* THE HOOK */}
        <FadeIn className="text-center mb-16">
          <div className="text-brand-mustard font-sora font-extrabold tracking-widest uppercase text-xs sm:text-sm mb-6">
            Confidential Invitation
          </div>
          <TextReveal 
            text="YOUR COMPETITION IS PROBABLY READING THIS TOO." 
            className="text-4xl sm:text-6xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase mb-8"
          />
        </FadeIn>

        {/* THE STORY */}
        <div className="prose prose-lg sm:prose-xl prose-invert mx-auto text-brand-ivory/80 space-y-8 leading-relaxed">
          <FadeIn delay={0.1}>
            <p>
              You are the hero of your own business. You've built it through sweat, late nights, and doing the job right when others cut corners. 
            </p>
            <p>
              But let's be honest. The way you get customers right now? It feels like you're fighting an uphill battle with one hand tied behind your back. You're relying on a marketing model that hasn't changed in 10 years, hoping the phone rings while bloated SEO agencies charge you $1,500 a month to do... <span className="italic text-brand-mustard">absolutely nothing</span>.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="text-2xl font-sora font-bold text-white mt-12 mb-6 uppercase tracking-tight">The Generational Shift</h3>
            <p>
              We are not another agency pitching you the same tired "we'll write two blogs a month" retainer. We are your guide to what comes next.
            </p>
            <p>
              Right now, there is a generational transition happening in technology. We have a 6-month head start on the entire industry because we deploy agentic AI tech the moment it leaves the labs. In AI-time, 6 months is a decade.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h3 className="text-2xl font-sora font-bold text-white mt-12 mb-6 uppercase tracking-tight">No Bloat. Just Speed.</h3>
            <p>
              The other guys are weighed down by massive overhead. They have account managers, junior copywriters, and a 10-person chain of command that takes three weeks to approve a simple website update. 
            </p>
            <p>
              Our model was built natively on this new technology. We turn the work of one web developer into twenty. We deploy full metropolitan SEO architectures in days, not months. We don't ask for permission to move fast.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h3 className="text-2xl font-sora font-bold text-white mt-12 mb-6 uppercase tracking-tight">The DeLorean Is Idling</h3>
            <p>
              This is your opportunity to leave your competition stuck in a 10-year-old marketing model, while you jump in our DeLorean and zoom off to the future. 
            </p>
            <p className="text-brand-mustard font-bold">
              But there's a catch: We only take ONE painting company per territory. 
            </p>
            <p>
              Once a city is locked, it's locked. We refuse to compete against our own clients. And since we publish our exact methodology online, it is only a matter of time before your biggest competitor finds out we exist. 
            </p>
          </FadeIn>

        </div>

        {/* THE CTA */}
        <FadeIn delay={0.5} className="mt-20 border-t border-brand-ivory/10 pt-16 text-center">
          <p className="text-sm font-sora font-bold text-brand-ivory/50 uppercase tracking-widest mb-8">
            Btw... we built this entire funnel in 20 minutes.
          </p>
          <h2 className="text-5xl font-sora font-extrabold text-white uppercase tracking-tight mb-12">
            Are you getting in?
          </h2>
          
          <ScaleReveal delay={0.6}>
            <Link 
              href="mailto:hello@homeownermarketers.com?subject=Pilot%20Partner%20Application%20-%20Territory%20Lock"
              className="group inline-flex items-center justify-center px-12 py-6 overflow-hidden font-sora font-extrabold text-brand-charcoal bg-brand-mustard transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(201,162,39,0.3)] hover:shadow-[0_0_60px_rgba(201,162,39,0.5)] text-xl uppercase tracking-widest w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-4">
                Secure Your Territory <span className="text-3xl group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
            </Link>
            <p className="text-brand-ivory/40 text-sm mt-6 font-medium">Takes 60 seconds. No commitment required.</p>
          </ScaleReveal>
        </FadeIn>

      </article>
    </main>
  )
}
