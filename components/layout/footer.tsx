'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory py-24 px-6 sm:px-12 border-t border-brand-ivory/10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* BRAND COLUMN */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block mb-8">
            <Image
              src="/HM-Logo.png"
              alt="Homeowner Marketers"
              width={240}
              height={80}
              className="h-10 sm:h-12 w-auto object-contain invert opacity-90"
            />
          </Link>
          <p className="text-brand-ivory/60 font-medium max-w-sm text-lg leading-relaxed">
            We build high-performance assets and run aggressive local search engines for painting contractors.
          </p>
        </div>

        {/* RESOURCES COLUMN */}
        <div>
          <h4 className="text-xs font-sora font-extrabold tracking-[0.2em] uppercase text-brand-mustard mb-6">The Methodology</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/playbook" className="text-brand-ivory/70 hover:text-brand-mustard transition-colors font-medium">
                The Playbook (Our Strategy)
              </Link>
            </li>
            <li>
              <Link href="/services/gbp-management" className="text-brand-ivory/70 hover:text-brand-mustard transition-colors font-medium">
                Google Profile & Reputation
              </Link>
            </li>
            <li>
              <Link href="/services/ai-automations" className="text-brand-ivory/70 hover:text-brand-mustard transition-colors font-medium">
                AI Lead Automations
              </Link>
            </li>
            <li>
              <Link href="/services/citation-cleanup" className="text-brand-ivory/70 hover:text-brand-mustard transition-colors font-medium">
                Local Citation Clean-Up
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT COLUMN */}
        <div>
          <h4 className="text-xs font-sora font-extrabold tracking-[0.2em] uppercase text-brand-mustard mb-6">Connect</h4>
          <ul className="space-y-4">
            <li>
              <a href="mailto:hello@homeownermarketers.com" className="text-brand-ivory/70 hover:text-brand-mustard transition-colors font-medium">
                hello@homeownermarketers.com
              </a>
            </li>
            <li>
              <Link href="/#tiers" className="text-brand-ivory/70 hover:text-brand-mustard transition-colors font-medium">
                View Pilot Packages
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-[1440px] mx-auto mt-24 pt-8 border-t border-brand-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-ivory/40 text-sm font-medium">
        <p>© {new Date().getFullYear()} Homeowner Marketers. All rights reserved.</p>
        <p>Built for serious contractors.</p>
      </div>
    </footer>
  )
}
