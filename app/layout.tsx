import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paul Yacoubian - Founder, Builder, Angel Investor',
  description: 'CoFounder & CEO of Copy.ai (2020-2025), scaled to 17M users and enterprise customers like Microsoft, JP Morgan. Angel investor in 50+ startups. Building the future with AI.',
  keywords: ['Paul Yacoubian', 'Copy.ai', 'AI', 'Angel Investor', 'Startups', 'Founder', 'Technology', 'Machine Learning'],
  authors: [{ name: 'Paul Yacoubian' }],
  creator: 'Paul Yacoubian',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://paulyacoubian.com',
    title: 'Paul Yacoubian - Founder, Builder, Angel Investor',
    description: 'CoFounder & CEO of Copy.ai (2020-2025), scaled to 17M users and enterprise customers like Microsoft, JP Morgan. Angel investor in 50+ startups. Building the future with AI.',
    siteName: 'Paul Yacoubian',
    images: [
      {
        url: 'https://paulyacoubian.com/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Paul Yacoubian'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul Yacoubian - Founder, Builder, Angel Investor',
    description: 'CoFounder & CEO of Copy.ai (2020-2025), scaled to 17M users and enterprise customers like Microsoft, JP Morgan. Angel investor in 50+ startups.',
    images: ['https://paulyacoubian.com/images/profile.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_ID
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}