'use client'

import { useState } from 'react'
import { FadeIn, TextReveal, Parallax, ScaleReveal } from '@/components/ui/animations'
import { FeatureDetail } from '@/components/ui/feature-modal'
import { GuaranteeModal } from '@/components/ui/guarantee-modal'

const guaranteeDetails: Record<string, FeatureDetail> = {
  "top-3": {
    title: "Top 3 Ranking Or We Work Free",
    description: "We don't get paid to give you excuses. We get paid to get you seen. For our top two tiers, we guarantee your business will rank in the Top 3 of the Google Map Pack for a primary target keyword within 90 days. If we miss the mark, we manage your entire SEO engine for free until you are in the top 3.",
    tiers: {
      s1: { title: "Phase 1: The Setup", content: "We start by auditing your Google Business Profile, resolving any NAP (Name, Address, Phone) inconsistencies, and structuring your local citations to establish immediate trust with Google's algorithm." },
      s2: { title: "Phase 2: The Engine", content: "We deploy our GBP management engine involving weekly geo-tagged photo uploads, rigorous review-response management, and publishing highly localized updates to signal active operation." },
      s3: { title: "Phase 3: The Guarantee", content: "If you aren't ranking in the Top 3 of the Map Pack for a primary service keyword by day 90, we waive all management fees. We keep working, you stop paying, until you hit the top 3." }
    }
  },
  "pagespeed": {
    title: "90+ PageSpeed Guarantee",
    description: "A slow website kills both your Google rankings and your conversion rate. We build exclusively on Next.js and host on Vercel's Edge Network. We guarantee that your site will score 90 or above on Google PageSpeed Insights for both mobile and desktop.",
    tiers: {
      s1: { title: "Step 1: Next.js Architecture", content: "We completely ditch bloated platforms like WordPress. Your site is built using Next.js—a modern framework that statically generates pages for instantaneous loading." },
      s2: { title: "Step 2: Vercel Edge Hosting", content: "Your site doesn't live on a single slow server. It's deployed to Vercel's Edge Network, meaning it gets served from the data center physically closest to your customer, resulting in sub-second load times." },
      s3: { title: "Step 3: The Penalty", content: "After launch, we run a live Google PageSpeed Insights audit. If it scores below a 90 on mobile or desktop, our engineering team works for free to optimize the code until it passes." }
    }
  },
  "risk-free": {
    title: "Risk-Free 90-Day Proof Period",
    description: "Your upfront investment covers the complete build of your high-performance Geo-Silo site AND the first 90 days of active management. We deliver speed, prove it works, and then set you up for recurring dominance.",
    tiers: {
      s1: { title: "Month 1: The Build", content: "We design, write, and deploy your entire high-performance Geo-Silo website and connect your Google Business Profile in just 14 days." },
      s2: { title: "Months 2-3: The Proof", content: "We actively run your SEO engine—publishing reverse-silo content, optimizing your GBP, and tracking keyword movement using DataForSEO. You watch the leads start coming in." },
      s3: { title: "Month 4: The Commitment", content: "At the end of 90 days, we lock in a 12-month recurring plan to protect your momentum and continue scaling." }
    }
  },
  "walk-away": {
    title: "The Walk-Away Clause",
    description: "What happens if you aren't blown away after the 90-day proof period? You walk away with zero friction. We believe in earning your business, not holding it hostage.",
    tiers: {
      s1: { title: "Step 1: You Call It", content: "If you decide our system isn't for you at the end of the 90-day proof period, you just say the word. No uncomfortable negotiations, no legal threats." },
      s2: { title: "Step 2: The Reconnection", content: "We will seamlessly point your domain back to your old website. You always retain 100% ownership of your domain and your brand." },
      s3: { title: "Step 3: SEO Protection", content: "We set up all necessary 301 redirects to ensure any SEO juice we built during the 90 days flows back to your original setup. We part as friends." }
    }
  },
  "delivery": {
    title: "14-Day Delivery Guarantee",
    description: "We don't do endless \"discovery\" phases or months of wireframing. We know what works for painting companies. From kickoff to launch, your site goes live in exactly 14 days.",
    tiers: {
      s1: { title: "Day 1: Kickoff & Strategy", content: "We map your competitors, define your target municipalities, and outline the Geo-Silo architecture required to dominate your local territory." },
      s2: { title: "Days 2-13: Deep Work", content: "Our team builds the custom Next.js web application, writes the localized copy, configures the JSON-LD schema, and integrates your lead funnels." },
      s3: { title: "Day 14: Launch Or Discount", content: "We present the staging link for your approval. If we miss this 14-day deadline by even a single day, we immediately take 20% off your upfront investment." }
    }
  },
  "approval": {
    title: "Pay Only Upon Approval",
    description: "We take on the risk, not you. We build out your complete, high-performance website before you ever pay us. You review every page and only pay when you say 'go'.",
    tiers: {
      s1: { title: "Step 1: The Build Phase", content: "We execute the entire 14-day build without asking for a deposit. We construct the site, write the copy, and set up the conversion architecture on our dime." },
      s2: { title: "Step 2: Private Staging Review", content: "We send you a private link to the fully functional staging site. You review it on your phone, test the lead forms, and request any final changes." },
      s3: { title: "Step 3: Approved Launch", content: "Only after you say 'I love it, let's take it live' do we send the invoice for the upfront investment. If you don't love it, you don't pay. Zero risk." }
    }
  }
}

export const Guarantees = () => {
  const [selectedGuarantee, setSelectedGuarantee] = useState<FeatureDetail | null>(null)

  const guarantees = [
    {
      id: "pagespeed",
      title: "Sub-Second Or It's Free",
      desc: "We guarantee a 90+ score on Google PageSpeed. If it's slow, we fix it for free. Fast sites print money.",
      tiersText: "All Tiers"
    },
    {
      id: "risk-free",
      title: "Speed First. Long-Term Growth Later.",
      desc: "Your upfront fee reflects the speed to build and connect everything, covering your first 90 days of management.",
      tiersText: "All Tiers"
    },
    {
      id: "walk-away",
      title: "The 'Part As Friends' Clause",
      desc: "If you want out after 90 days, we'll reconnect your old site and set up redirects. You keep your domain.",
      tiersText: "All Tiers"
    },
    {
      id: "delivery",
      title: "Live In 14 Days (Or 20% Off)",
      desc: "No 6-month build times. Your custom site goes live in exactly 14 days, or we eat 20% of the cost.",
      tiersText: "All Tiers"
    },
    {
      id: "approval",
      title: "Don't Pay Until You Love It",
      desc: "We build the whole thing on staging. You review it. You don't pay a dime until you approve the launch.",
      tiersText: "All Tiers"
    },
    {
      id: "top-3",
      title: (
        <>
          Top 3 Or{' '}
          <span className="relative inline-block whitespace-nowrap">
            <span className="relative z-10 text-brand-mustard">We Work Free</span>
            <svg 
              className="absolute -bottom-2 left-0 w-[110%] h-4 -translate-x-[5%] pointer-events-none text-brand-mustard opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              viewBox="0 0 200 16" 
              fill="none" 
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M5 8 C 40 5, 80 4, 195 5 M2 13 C 50 15, 120 12, 190 14" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                style={{
                  filter: 'url(#chalk)',
                  strokeDasharray: '400',
                  strokeDashoffset: '0',
                }}
              />
              <defs>
                <filter id="chalk" x="-10%" y="-10%" width="120%" height="120%">
                  <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" result="noise"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
                </filter>
              </defs>
            </svg>
          </span>
        </>
      ),
      desc: "We get you ranked in the top 3 of the Map Pack for a target keyword in 90 days, or we work for free until you are.",
      tiersText: "Top 2 Tiers"
    }
  ]

  return (
    <section className="py-24 lg:py-40 px-6 sm:px-12 bg-brand-charcoal text-brand-ivory relative overflow-hidden">
      <GuaranteeModal 
        isOpen={!!selectedGuarantee} 
        onClose={() => setSelectedGuarantee(null)} 
        feature={selectedGuarantee} 
      />

      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--brand-mustard)_0%,_transparent_70%)] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">Our Promises</FadeIn>
            <TextReveal 
              text="THE 'NO B.S.' GUARANTEE STACK." 
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase mb-8"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {guarantees.map((item, i) => (
            <ScaleReveal 
              key={i} 
              delay={i * 0.1}
              className="h-full"
            >
              <button
                onClick={() => setSelectedGuarantee(guaranteeDetails[item.id])}
                className="w-full h-full text-left p-10 border border-brand-ivory/10 hover:bg-brand-ivory/5 hover:border-brand-mustard/50 transition-all duration-500 flex flex-col group focus:outline-none focus:ring-2 focus:ring-brand-mustard"
              >
                <div className="flex justify-between items-start w-full mb-8">
                  <div className="w-12 h-12 rounded-xl bg-brand-mustard/10 text-brand-mustard flex items-center justify-center border border-brand-mustard/20 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-brand-ivory/20 flex items-center justify-center text-brand-ivory/50 group-hover:bg-brand-mustard group-hover:text-brand-charcoal group-hover:border-brand-mustard transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                <div className="text-xs font-sora font-extrabold tracking-[0.2em] uppercase text-brand-mustard mb-3">{item.tiersText}</div>
                <h4 className="text-2xl font-sora font-extrabold mb-4 uppercase tracking-tight group-hover:text-brand-mustard transition-colors">{item.title}</h4>
                <p className="text-brand-ivory/60 leading-relaxed font-medium mt-auto group-hover:text-brand-ivory/80 transition-colors">{item.desc}</p>
              </button>
            </ScaleReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
