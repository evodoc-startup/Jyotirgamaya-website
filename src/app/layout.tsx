import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import dynamic from 'next/dynamic'
import './globals.css'

const Chatbot = dynamic(() => import('./components/Chatbot'))

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Jyotirgamya - Navigating Path and Illuminating Lives',
  description:
    'Jyotirgamaya – Nurturing minds, transforming futures. As a leading psychological services group, we specialize in counseling, therapy, and developmental interventions for children and young individuals. Our expert-led approach fosters resilience, unlocks potential, and promotes holistic well-being, empowering them to thrive in all aspects of life.',
  keywords:
    'Jyotirgamya, knowledge, enlightenment, wisdom, learning, education, insights',
  openGraph: {
    title: 'Jyotirgamya - Navigating Path and Illuminating Lives',
    description:
      'Jyotirgamaya – Nurturing minds, transforming futures. As a leading psychological services group, we specialize in counseling, therapy, and developmental interventions for children and young individuals. Our expert-led approach fosters resilience, unlocks potential, and promotes holistic well-being, empowering them to thrive in all aspects of life.',
    url: 'https://jyotirgamya.com',
    type: 'website',
    images: [
      {
        url: '/Logo.png', // Ensure this image exists in your public directory
        width: 1200,
        height: 630,
        alt: 'Jyotirgamya - Navigating Path and Illuminating Lives'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jyotirgamya - Navigating Path and Illuminating Lives',
    description: 'Unlock knowledge and wisdom with Jyotirgamya.',
    site: '@Jyotirgamya',
    creator: '@JyotirgamyaTeam',
    images: ['/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  },
  alternates: {
    canonical: 'https://jyotirgamya.com'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans select-none antialiased overflow-x-hidden relative`}
      >
        <div className="grain-overlay" />
        <Chatbot />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
