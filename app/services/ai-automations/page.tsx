'use client'

import { FadeIn, TextReveal, ScaleReveal } from '@/components/ui/animations'
import Link from 'next/link'
import Image from 'next/image'

export default function AIAutomationsPage() {
  return (
    <main className="min-h-[100svh] bg-brand-ivory selection:bg-brand-mustard selection:text-brand-charcoal overflow-clip">
      {/* HEADER */}
      <nav className="fixed top-0 left-0 w-full p-6 sm:px-12 z-50 mix-blend-difference pointer-events-none">
        <Link href="/" className="pointer-events-auto inline-block">
          <Image
            src="/HM-Logo.png"
            alt="Homeowner Marketers"
            width={240}
            height={80}
            priority
            className="h-8 sm:h-12 w-auto object-contain invert opacity-80 hover:opacity-100 transition-opacity"
          />
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 sm:px-12 relative border-b border-brand-charcoal/5">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] pointer-events-none" />
        <div className="max-w-[1000px] mx-auto relative z-10">
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">Service Deep Dive</FadeIn>
          <TextReveal 
            text="NEVER MISS ANOTHER $5K JOB." 
            className="text-5xl sm:text-7xl lg:text-9xl font-sora font-extrabold text-brand-charcoal leading-[0.85] tracking-tighter-extreme uppercase mb-12" 
          />
          
          <FadeIn delay={0.2} className="prose prose-lg sm:prose-xl text-brand-charcoal/80 font-medium">
            <p className="text-2xl sm:text-3xl font-sora font-bold text-brand-charcoal leading-tight mb-8">
              "Every time you miss a call because you're on a ladder, a homeowner moves to the next painter on the list."
            </p>
            <p>
              Homeowners do not leave voicemails anymore. If you do not answer the phone or reply to a text within 5 minutes, they assume you are too busy and they call your competitor. 
            </p>
            <p>
              You cannot be on the tools and manning the phones 24/7. That is why we deploy proprietary AI infrastructure to catch, text, and book leads while you are working, eating dinner, or sleeping.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE BREAKDOWN */}
      <section className="py-24 lg:py-40 px-6 sm:px-12 relative">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-4">The 24/7 Virtual Salesman</h2>
            <p className="text-xl text-brand-charcoal/50 font-medium">Stop bleeding money to missed calls. Automate the front end of your business.</p>
          </FadeIn>

          <div className="space-y-12 lg:space-y-16">
            
            {/* COMPONENT 01 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Tool 01</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">Missed Call Text Back</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>The simplest, most profitable automation in existence. If a homeowner calls your business line and you don't answer, our system instantly fires them a text message: <em>"Hey, this is [Your Name]. I'm on a job right now, how can I help you?"</em></p>
                <p>This single text message stops them from calling the next painter on Google. You secure the lead, and you can text them back when you get off the ladder.</p>
              </div>
            </ScaleReveal>

            {/* COMPONENT 02 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Tool 02</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">AI Website Chat Widget</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>We embed a smart chat widget directly into your website. When a homeowner lands on your site at 11:00 PM and wants to know if you paint kitchen cabinets, they don't have to wait until morning.</p>
                <p>Our AI is trained on your exact business data. It answers their questions naturally, pre-qualifies them to make sure they aren't budget shoppers, and captures their phone number so you own the lead.</p>
              </div>
            </ScaleReveal>

            {/* COMPONENT 03 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Tool 03</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">Automated Calendar Booking</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>We eliminate the back-and-forth text tag of "when are you free for an estimate?"</p>
                <p>Once a lead is qualified by the AI or through your multi-step form, they are immediately prompted to book a time directly on your calendar. You wake up, look at your phone, and see three new estimates booked with qualified homeowners.</p>
              </div>
            </ScaleReveal>

          </div>
          
          <div className="mt-24 text-center">
            <FadeIn>
              <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-8">Ready to clone your best salesman?</h3>
              <Link 
                href="/#tiers"
                className="group inline-flex items-center justify-center px-10 py-5 overflow-hidden font-sora font-extrabold text-brand-charcoal bg-brand-mustard transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95 shadow-2xl text-lg uppercase tracking-widest"
              >
                <span className="relative z-10 flex items-center gap-4">
                  View Pilot Packages <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </Link>
            </FadeIn>
          </div>

        </div>
      </section>
    </main>
  )
}
