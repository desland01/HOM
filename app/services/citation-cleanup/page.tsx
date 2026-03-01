'use client'

import { FadeIn, TextReveal, ScaleReveal } from '@/components/ui/animations'
import Link from 'next/link'
import Image from 'next/image'

export default function CitationCleanupPage() {
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
      <section className="min-h-[100svh] flex flex-col justify-center pt-24 pb-12 lg:pt-32 lg:pb-24 px-6 sm:px-12 relative border-b border-brand-charcoal/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--brand-mustard)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto w-full relative z-10">
          <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-8">Service Deep Dive</FadeIn>
          
          <FadeIn delay={0.3} className="max-w-[25ch] mb-4 sm:mb-6">
            <TextReveal 
              text="FIX YOUR BROKEN INTERNET." 
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase block" 
            />
          </FadeIn>
          
          <FadeIn delay={0.4} className="prose prose-lg sm:prose-xl text-brand-charcoal/80 font-medium max-w-3xl mt-12">
            <p className="text-2xl sm:text-3xl font-sora font-bold text-brand-charcoal leading-tight mb-8">
              "AI cannot fix a messy foundation. If you confuse Google, you lose money."
            </p>
            <p>
              If your business has moved locations, changed phone numbers, or rebranded over the years, the internet is filled with conflicting information about you.
            </p>
            <p>
              When Google scans the web and sees your business listed at three different addresses with two different phone numbers, it drops its trust in your business. When Google loses trust, you fall out of the Map Pack, and your phone stops ringing.
            </p>
            <p>
              Software aggregators cannot fix this. It requires a human being manually calling directories and forcing them to update your records.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE BREAKDOWN */}
      <section className="py-24 lg:py-40 px-6 sm:px-12 relative">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-4">The Manual Clean-Up</h2>
            <p className="text-xl text-brand-charcoal/50 font-medium">Why we don't just push a button and hope for the best.</p>
          </FadeIn>

          <div className="space-y-12 lg:space-y-16">
            
            {/* COMPONENT 01 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Step 01</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">The NAP Audit</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>We start by running a comprehensive audit across hundreds of local directories, data aggregators, and maps (Yelp, YellowPages, Bing, Apple Maps, etc.).</p>
                <p>We hunt down every instance of your Name, Address, and Phone Number (NAP) to find exactly where the discrepancies are hiding. We map out the damage before we touch anything.</p>
              </div>
            </ScaleReveal>

            {/* COMPONENT 02 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Step 02</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">Human Negotiation</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>Most cheap SEO agencies use a software tool to push new data out. The problem? As soon as you stop paying that software fee, the directories revert back to the old, broken data.</p>
                <p>We use a dedicated human team to manually log into, claim, and permanently alter the records on these sites. Where automated tools fail, human persistence wins. Once we fix a citation, it stays fixed forever.</p>
              </div>
            </ScaleReveal>

            {/* COMPONENT 03 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Step 03</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">The Authority Sync</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>Once the internet is clean and every directory agrees on exactly who you are and where you work, we sync this pristine data back to your Google Business Profile and your website.</p>
                <p>Google crawls the web, sees 100% consistency across every major platform, its trust score spikes, and you rise in the Map Pack rankings.</p>
              </div>
            </ScaleReveal>

          </div>
          
          <div className="mt-24 text-center">
            <FadeIn>
              <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-8">Ready to fix your foundation?</h3>
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
