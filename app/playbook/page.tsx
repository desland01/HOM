'use client'

import { FadeIn, TextReveal, ScaleReveal } from '@/components/ui/animations'
import Link from 'next/link'
import Image from 'next/image'

export default function PlaybookPage() {
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
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">The Methodology</FadeIn>
          <TextReveal 
            text="THE AGENTIC UNFAIR ADVANTAGE." 
            className="text-5xl sm:text-7xl lg:text-9xl font-sora font-extrabold text-brand-charcoal leading-[0.85] tracking-tighter-extreme uppercase mb-12" 
          />
          
          <FadeIn delay={0.2} className="prose prose-lg sm:prose-xl text-brand-charcoal/80 font-medium">
            <p className="text-2xl sm:text-3xl font-sora font-bold text-brand-charcoal leading-tight mb-8">
              "We are a fully transparent SEO agency. We aren't afraid of our competitors finding out what we do because the fact is: they already know. They just can't keep up."
            </p>
            <p>
              We are 6 months ahead of the entire industry because we implement the latest autonomous workflows coming straight out of AI labs the second they are available.
            </p>
            <p>
              What does that mean for you? You get enterprise-grade, Fortune 500 growth strategies that were completely unfeasible for local businesses just 12 months ago.
            </p>
            <p>
              Our agentic development practices allow us to turn the output of one developer into twenty. So while the other guys are stringing you along, promising 20 basic pages in six months... we are deploying teams of highly-trained AI agents to write 50 pages, build advanced AI-readable data files for every endpoint, and fill your calendar—while your competitor is still asking ChatGPT for relationship advice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE MANUAL */}
      <section className="py-24 lg:py-40 px-6 sm:px-12 relative">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-4">The Playbook</h2>
            <p className="text-xl text-brand-charcoal/50 font-medium">Exactly how we dominate local search results.</p>
          </FadeIn>

          <div className="space-y-12 lg:space-y-16">
            
            {/* PLAY 01 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Play 01</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">Geo-Silos & Location Hubs</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>Most local businesses have a single "Services" page and hope Google figures out where they work. We build massive, interconnected architectures called Geo-Silos.</p>
                <p>If you serve 5 cities, we don't just list them. We build a dedicated, high-performance "Hub" for each city, and nest individual service pages under them. This means you don't just rank for "Painter," you rank for "Cabinet Painting in [Specific Wealthy Suburb]." We flood the zone.</p>
              </div>
            </ScaleReveal>

            {/* PLAY 02 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Play 02</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">A.E.O. (Answer Engine Optimization)</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>Google Search is changing. Homeowners are now asking ChatGPT, Perplexity, and Google AI for recommendations. If your site isn't structured for AI bots to read it, you don't exist.</p>
                <p>We deploy advanced Schema Markup (LocalBusiness, Service, FAQ, Review) and dedicated <code>llms.txt</code> files that spoon-feed your data directly to AI engines. When a homeowner asks an AI "who is the best painter near me?", the AI cites your business by name.</p>
              </div>
            </ScaleReveal>

            {/* PLAY 03 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Play 03</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">High-Velocity Content (Reverse Silos)</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>Blogging isn't about writing fun stories; it's about intercepting search intent. We use AI to analyze exactly what questions your ideal customers are typing into search engines.</p>
                <p>We generate and publish highly-targeted, perfectly formatted articles that answer those questions, capturing traffic higher up in the funnel. These articles then physically link back to your money pages (Reverse Silo), transferring massive authority and driving ready-to-buy traffic to your quote form.</p>
              </div>
            </ScaleReveal>

            {/* PLAY 04 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Play 04</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">Automated Citation & Reputation Engines</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>The Google Map Pack is driven by two things: NAP Consistency (Name, Address, Phone) and review velocity. We don't do this manually.</p>
                <p>We integrate enterprise-grade tools to audit, clean, and broadcast your business information across the top 40+ local directories. Then, we hook into your CRM to automatically request, catch, and respond to Google reviews the moment a job is marked complete. Your reputation scales while you sleep.</p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-sora font-bold uppercase tracking-widest text-brand-mustard">
                  <Link href="/services/citation-cleanup" className="hover:text-brand-charcoal transition-colors underline underline-offset-4 decoration-brand-charcoal/20 hover:decoration-brand-mustard">View Citation Strategy →</Link>
                  <Link href="/services/gbp-management" className="hover:text-brand-charcoal transition-colors underline underline-offset-4 decoration-brand-charcoal/20 hover:decoration-brand-mustard">View Reputation Engine →</Link>
                </div>
              </div>
            </ScaleReveal>

            {/* PLAY 05 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Play 05</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">Edge Hosting & Sub-Second Loading</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>A slow site bleeds money. Every second of delay drops your conversion rate by 20%. We don't use clunky WordPress templates on shared servers.</p>
                <p>We build your asset on Next.js and host it on a global Edge Network. This means your site physically lives on servers right next to your customers, loading instantly. Google rewards fast sites with higher rankings, and homeowners reward fast sites with their money.</p>
              </div>
            </ScaleReveal>

          </div>
          
          <div className="mt-24 text-center">
            <FadeIn>
              <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-8">Ready to deploy the machine?</h3>
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
