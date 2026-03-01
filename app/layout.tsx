import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700', '800']
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600']
})

export const metadata: Metadata = {
  title: 'Homeowner Marketers - Prove It First, Dominate Later',
  description: 'Premium websites and SEO built exclusively for painting companies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="md:scroll-smooth">
      <body className={`${sora.variable} ${inter.variable} font-inter bg-brand-ivory text-brand-charcoal antialiased flex flex-col min-h-screen`}>
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
