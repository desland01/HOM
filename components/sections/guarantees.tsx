'use client'

import { useState } from 'react'
import { FadeIn, TextReveal, Parallax, ScaleReveal } from '@/components/ui/animations'
import { FeatureDetail } from '@/components/ui/feature-modal'
import { GuaranteeModal } from '@/components/ui/guarantee-modal'

const guaranteeDetails: Record<string, FeatureDetail> = {
  "top-3": {
    title: "Top 3 Ranking Or We Work Free",
    description: "When a homeowner searches 'painter near me,' the top 3 results on Google Maps get 80% of the calls. We guarantee your business lands in that top 3 for your primary keyword within 90 days. If we miss? We keep working for free until you are there. You pay nothing extra. Period.",
    tiers: {
      s1: { title: "Step 1: We Map Your Market", content: "We study every competitor ranking in your area right now. We find the gaps they are leaving wide open. Then we build a plan to take their spot in the Map Pack, city by city, keyword by keyword." },
      s2: { title: "Step 2: We Do The Work", content: "Every week, we update your Google Business Profile with real photos, respond to reviews, and publish local content that tells Google you are the most active painter in town. You run your crew. We run your rankings." },
      s3: { title: "Step 3: The Penalty If We Miss", content: "If you are not in the top 3 of the Google Map Pack by day 90, we waive all management fees. We keep doing the work on our dime until you get there. You stop paying. We keep grinding. That is the deal." }
    }
  },
  "pagespeed": {
    title: "90+ PageSpeed Guarantee",
    description: "Homeowners bounce in 3 seconds if your site loads slow. Most painter websites fail this test. Yours will not. We guarantee a 90+ score on Google PageSpeed Insights for both mobile and desktop. If it falls short, we fix it at zero cost to you.",
    tiers: {
      s1: { title: "Step 1: We Build It Fast From Day One", content: "We skip the bloated website builders that slow everyone else down. Your site is built on the same technology used by the fastest sites on the internet. Speed is baked in from the first line, not bolted on later." },
      s2: { title: "Step 2: We Test It In Front Of You", content: "Before launch, we run your site through Google PageSpeed Insights right on the call with you. You see the score with your own eyes. No tricks, no staging-only numbers. The real site, the real score." },
      s3: { title: "Step 3: If It Fails, We Fix It Free", content: "If your live site scores below 90 on mobile or desktop after launch, we fix it at no charge. We do not send you an invoice for 'optimization.' We just fix it. You do not pay another dime until it passes." }
    }
  },
  "risk-free": {
    title: "Risk-Free 90-Day Proof Period",
    description: "You pay once. That covers your custom site build AND 90 full days of us running the marketing engine. You watch the leads come in. You see the rankings climb. Then, and only then, do we talk about what comes next.",
    tiers: {
      s1: { title: "Month 1: We Build Your Machine", content: "In the first 14 days, your custom site goes live. The remaining weeks, we connect your Google Business Profile, set up your local pages, and start feeding Google the signals that put you on the map." },
      s2: { title: "Months 2-3: We Prove It Works", content: "This is where the phone starts ringing. We publish local content, manage your reviews, and push your rankings higher every week. You track everything in a live dashboard. No guessing. Just results you can see." },
      s3: { title: "Month 4: You Decide", content: "After 90 days of proof, you choose. If the leads are rolling in and you want to keep growing, we lock in a 12-month plan to protect your momentum. If not, you walk away clean. The choice is 100% yours." }
    }
  },
  "walk-away": {
    title: "The Walk-Away Clause",
    description: "Most agencies lock you into contracts and hold your website hostage. We do the opposite. If you want out after 90 days, you leave with everything. Your domain, your content, your SEO gains. No hostage games. No guilt trips.",
    tiers: {
      s1: { title: "Step 1: You Say The Word", content: "At the end of your 90-day proof period, if you are not happy, just tell us. One email. One phone call. No awkward negotiations. No cancellation fees. No legal fine print designed to trap you." },
      s2: { title: "Step 2: We Hand Everything Back", content: "We point your domain back to wherever you want it. You keep 100% ownership of your domain, your brand, and every piece of content we created. Nothing is held back. Nothing is deleted." },
      s3: { title: "Step 3: We Protect What We Built", content: "Before we go, we set up redirects so every ounce of ranking power we built during those 90 days flows back to your site. We leave your SEO better than we found it. We part as friends, not enemies." }
    }
  },
  "delivery": {
    title: "14-Day Delivery Guarantee",
    description: "Other agencies take 3 to 6 months to launch a website. We do it in 14 days. Not a template. Not a placeholder. A fully custom, high-performance site built for your painting business. If we miss the deadline, you get 20% off. Automatically.",
    tiers: {
      s1: { title: "Day 1: Strategy and Gameplan", content: "We jump on a call, map out your service area, study your competitors, and lock in the cities and keywords we are going after. By the end of day one, you know exactly what we are building and why." },
      s2: { title: "Days 2-13: We Build The Whole Thing", content: "Our team writes the copy, designs the pages, builds your lead forms, and sets up every local page for your service area. You do not lift a finger. You run your crew. We build your site." },
      s3: { title: "Day 14: Launch Or You Save 20%", content: "On day 14, we show you the finished site. If we are even one day late, we take 20% off your total cost. No excuses, no exceptions. We put our money where our mouth is." }
    }
  },
  "approval": {
    title: "Pay Only Upon Approval",
    description: "We build the entire site before you pay a single dollar. You see it. You test it. You click every button. Only when you say 'this is exactly what I want' do we send the invoice. If you do not love it, you do not pay.",
    tiers: {
      s1: { title: "Step 1: We Build On Our Dime", content: "We invest our own time and resources to build your complete custom site. No deposit. No 50% upfront. We take the financial risk because we know the work speaks for itself." },
      s2: { title: "Step 2: You Review Everything", content: "We send you a private link to the finished site. Pull it up on your phone. Test the contact forms. Show it to your spouse. Take your time. Ask for changes. We do not rush you into a decision." },
      s3: { title: "Step 3: You Pay Only When You Love It", content: "When you look at the site and say 'let us go live,' that is when we send the invoice. Not before. If something feels off, we fix it first. If you walk away, you owe us nothing. Zero." }
    }
  }
}

export const Guarantees = () => {
  const [selectedGuarantee, setSelectedGuarantee] = useState<FeatureDetail | null>(null)

  const guarantees = [
    {
      id: "pagespeed",
      title: "Blazing Fast Or We Fix It Free",
      desc: "Your site scores 90+ on Google PageSpeed or we fix it at zero cost. Slow sites lose leads. Yours will not.",
      tiersText: "All Tiers"
    },
    {
      id: "risk-free",
      title: "90 Days To Prove It Works",
      desc: "Your one payment covers the build and 90 days of us running the engine. Watch the leads come in before you commit to anything long-term.",
      tiersText: "All Tiers"
    },
    {
      id: "walk-away",
      title: "Leave Anytime. Keep Everything.",
      desc: "Not happy after 90 days? Walk away with your domain, your content, and your SEO gains. No hostage games. Ever.",
      tiersText: "All Tiers"
    },
    {
      id: "delivery",
      title: "Live In 14 Days Or 20% Off",
      desc: "Your custom site launches in exactly 14 days. If we miss by even one day, you save 20%. Automatically.",
      tiersText: "All Tiers"
    },
    {
      id: "approval",
      title: "Do Not Pay Until You Love It",
      desc: "We build the entire site before you spend a dollar. You review it, test it, and only pay when you are ready to go live.",
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
      desc: "Top 3 of the Google Map Pack in 90 days for your primary keyword. If we miss, we work for free until you are there. You stop paying. We keep working.",
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
            <FadeIn className="text-xs font-sora font-extrabold tracking-[0.4em] uppercase text-brand-mustard mb-6">You Risk Nothing</FadeIn>
            <TextReveal
              text="SIX GUARANTEES. ZERO RISK. ALL YOURS."
              className="text-5xl sm:text-7xl lg:text-8xl font-sora font-extrabold leading-[0.9] tracking-tighter-extreme uppercase mb-8"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {guarantees.map((item, i) => (
            <ScaleReveal 
              key={i} 
              delay={i * 0.06}
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
                  <div className="w-10 h-10 rounded-full border border-brand-ivory/20 flex items-center justify-center text-brand-ivory/50 group-hover:bg-brand-mustard group-hover:text-brand-charcoal group-hover:border-brand-mustard transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                <div className="text-xs font-sora font-extrabold tracking-[0.2em] uppercase text-brand-mustard mb-3">{item.tiersText}</div>
                <h4 className="text-2xl font-sora font-extrabold mb-4 uppercase tracking-tight group-hover:text-brand-mustard transition-colors">{item.title}</h4>
                <p className="text-lg text-brand-ivory/70 leading-relaxed font-medium mt-auto group-hover:text-brand-ivory/90 transition-colors">{item.desc}</p>
              </button>
            </ScaleReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
