import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Urban Werkz | B2B Sales Outsourcing Singapore',
    template: '%s | Urban Werkz',
  },
  description:
    "Urban Werkz is Southeast Asia's partner-first B2B sales outsourcing firm. We embed as your external sales team — qualified leads, CRM management, and full transparency.",
  keywords: [
    'sales outsourcing Singapore',
    'third party sales team Singapore',
    'B2B sales partner Singapore',
    'CRM lead generation Singapore',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    siteName: 'Urban Werkz',
    title: 'Urban Werkz | B2B Sales Outsourcing Singapore',
    description:
      'Partner-first B2B sales outsourcing. We manage your sales so you can scale smarter.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main-content" className="skip-link focus:top-4">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
