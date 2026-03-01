'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useModals } from '@/components/ui/modal-context'

export function Footer() {
  const { openModal } = useModals()

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
          <p className="text-brand-ivory/60 font-medium max-w-sm text-lg leading-relaxed text-center sm:text-left mx-auto sm:mx-0">
            We build high-performance assets for painting contractors who refuse to compete on price.
          </p>
        </div>

        {/* NAVIGATION COLUMN */}
        <div>
          <h4 className="text-xs font-sora font-extrabold tracking-[0.2em] uppercase text-brand-mustard mb-6">The Methodology</h4>
          <ul className="space-y-4">
            <li>
              <button 
                onClick={() => openModal('agentic-strategy')}
                className="text-brand-ivory/70 hover:text-brand-mustard transition-colors font-medium text-left"
              >
                The Playbook (Our Strategy)
              </button>
            </li>
            <li>
              <button 
                onClick={() => openModal('gbp')}
                className="text-brand-ivory/70 hover:text-brand-mustard transition-colors font-medium text-left"
              >
                Google Profile & Reputation
              </button>
            </li>
            <li>
              <button 
                onClick={() => openModal('cleanup')}
                className="text-brand-ivory/70 hover:text-brand-mustard transition-colors font-medium text-left"
              >
                Local Citation Clean-Up
              </button>
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
              <Link href="https://calendly.com/homeownermarketers" className="text-brand-ivory/70 hover:text-brand-mustard transition-colors font-medium">
                Book Strategy Call
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-[1440px] mx-auto mt-24 pt-8 border-t border-brand-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-ivory/40 text-sm font-medium">
        <p>© {new Date().getFullYear()} Homeowner Marketers. All rights reserved.</p>
        <p>Built for the crew you want to build.</p>
      </div>
    </footer>
  )
}
