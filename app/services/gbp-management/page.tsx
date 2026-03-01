'use client'

import { FadeIn, TextReveal, ScaleReveal } from '@/components/ui/animations'
import Link from 'next/link'
import Image from 'next/image'

export default function GBPManagementPage() {
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
              text="OWN THE GOOGLE MAP PACK." 
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold text-brand-charcoal leading-[0.9] tracking-tighter-extreme uppercase block" 
            />
          </FadeIn>
          
          <FadeIn delay={0.4} className="prose prose-lg sm:prose-xl text-brand-charcoal/80 font-medium max-w-3xl mt-12">
            <p className="text-2xl sm:text-3xl font-sora font-bold text-brand-charcoal leading-tight mb-8">
              "If you are not in the top 3 on Google Maps, you do not exist to homeowners."
            </p>
            <p>
              When a homeowner searches for "painters near me," Google does not show them 10 websites. They show them a map with exactly 3 businesses. Those 3 businesses get 80% of the clicks, 80% of the calls, and 80% of the money in your town.
            </p>
            <p>
              Getting into those 3 spots is not luck. It is a mathematical formula of NAP (Name, Address, Phone) consistency, review velocity, and constant profile activity. We run that entire engine for you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE BREAKDOWN */}
      <section className="py-24 lg:py-40 px-6 sm:px-12 relative">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-4">How We Force Google To Pick You</h2>
            <p className="text-xl text-brand-charcoal/50 font-medium">This is not just "setting up a profile." This is an active, daily street fight for territory.</p>
          </FadeIn>

          <div className="space-y-12 lg:space-y-16">
            
            {/* COMPONENT 01 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Part 01</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">High-Velocity Review Engine</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>Google trusts businesses that other people trust. But homeowners are lazy—they won't leave a review unless you make it effortless.</p>
                <p>We tie our proprietary AI reputation platform directly into your CRM. The moment you mark a job "Complete," your customer gets a polite, automated text message with a one-click link to leave a 5-star review. We catch negative feedback internally before it ever hits Google, and we publicly respond to every single positive review to show Google your business is alive and active.</p>
              </div>
            </ScaleReveal>

            {/* COMPONENT 02 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Part 02</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">Constant Activity & Photo Uploads</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>Most painters set up their Google Business Profile, upload a logo, and never touch it again. Google sees a dead business. We keep your profile aggressively active.</p>
                <p>We post weekly updates, run monthly "Offers" directly on your Google listing, and upload geo-tagged photos of your recent jobs. This constant stream of data proves to Google that you are the most active, legitimate operation in the area, forcing them to push you up the rankings.</p>
              </div>
            </ScaleReveal>

            {/* COMPONENT 03 */}
            <ScaleReveal delay={0.1} className="p-8 sm:p-12 bg-white border border-brand-charcoal/10 relative group hover:border-brand-mustard transition-colors duration-500">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-charcoal text-brand-mustard text-sm font-sora font-extrabold tracking-widest uppercase px-4 py-2">Part 03</div>
              <h3 className="text-2xl sm:text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-6">Syndicated Citation Authority</h3>
              <div className="prose prose-lg text-brand-charcoal/70 font-medium max-w-none">
                <p>Google double-checks your information against the rest of the internet. If Yelp says you are on Main St, but Facebook says you are on 1st Ave, Google drops your rank.</p>
                <p>Using our local citation engine, we lock down your Name, Address, and Phone Number (NAP) and broadcast it to the top 40+ local directories. We build a massive web of consistent data pointing straight back to your Google profile.</p>
              </div>
            </ScaleReveal>

          </div>
          
          <div className="mt-24 text-center">
            <FadeIn>
              <h3 className="text-3xl font-sora font-extrabold uppercase tracking-tight text-brand-charcoal mb-8">Stop handing leads to your competitors.</h3>
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
