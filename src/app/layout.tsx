import type { Metadata } from 'next'
import { Inter, Poppins, Work_Sans, Montserrat, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const workSans = Work_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-work-sans',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({ 
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-dm-serif-display',
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'AI Automation Services | Custom AI Solutions for Business Growth | Baseaim',
  description: 'Leading AI automation company specializing in custom AI solutions, business process automation, and intelligent workflow optimization. Increase efficiency by 300%+ with our proven AI services.',
  keywords: [
    'AI automation services', 
    'custom AI solutions', 
    'business process automation',
    'AI consulting',
    'machine learning services',
    'enterprise AI',
    'AI implementation',
    'business automation',
    'workflow automation',
    'intelligent automation',
    'AI development company',
    'business intelligence automation'
  ],
  authors: [{ name: 'Baseaim' }],
  creator: 'Baseaim',
  publisher: 'Baseaim',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AI Automation Services | Custom AI Solutions for Business Growth | Baseaim',
    description: 'Leading AI automation company specializing in custom AI solutions, business process automation, and intelligent workflow optimization. Increase efficiency by 300%+ with our proven AI services.',
    url: 'https://baseaim.com',
    siteName: 'Baseaim',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://baseaim.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Baseaim AI Automation Services - Custom AI Solutions for Business Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Services | Custom AI Solutions for Business Growth | Baseaim',
    description: 'Leading AI automation company specializing in custom AI solutions, business process automation, and intelligent workflow optimization. Increase efficiency by 300%+ with our proven AI services.',
    creator: '@baseaim',
    images: ['https://baseaim.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${workSans.variable} ${montserrat.variable} ${dmSerifDisplay.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <StructuredData type="organization" />
        <StructuredData type="service" />
        <StructuredData type="faq" />
        <div id="root">{children}</div>
      </body>
    </html>
  )
}