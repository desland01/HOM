'use client'

export function StoryTrustBar() {
  const items = [
    'Built Exclusively for Painting Contractors',
    'One Company Per Territory',
    'We Know You Have Been Burned Before',
    '14-Day Build Guarantee',
  ]

  const marqueeContent = items.map((item, i) => (
    <span key={i} className="contents">
      <span className="shrink-0">{item}</span>
      <span className="shrink-0 text-brand-charcoal/20">{'\u2022'}</span>
    </span>
  ))

  return (
    <>
      {/* Marquee strip */}
      <section className="py-6 bg-brand-mustard text-brand-charcoal overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex shrink-0 gap-8 sm:gap-12 text-sm sm:text-base font-sora font-extrabold uppercase tracking-widest items-center">
          {marqueeContent}
        </div>
        <div
          className="animate-marquee flex shrink-0 gap-8 sm:gap-12 text-sm sm:text-base font-sora font-extrabold uppercase tracking-widest items-center"
          aria-hidden="true"
        >
          {marqueeContent}
        </div>
      </section>

      {/* Static line */}
      <div className="py-4 bg-brand-mustard text-center border-t border-brand-charcoal/10">
        <p className="text-base sm:text-lg font-medium text-brand-charcoal/80 px-6">
          We know you have been burned by marketing companies before. That ends here.
        </p>
      </div>
    </>
  )
}
