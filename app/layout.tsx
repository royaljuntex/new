import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'J-Reach | Revolutionize Your Lead Generation',
    template: '%s | J-Reach'
  },
  description: 'J-Reach specializes in cold outbound strategies that deliver consistent results, protect your reputation, and keep you ahead of the competition.',
  keywords: ['lead generation', 'cold outbound', 'sales', 'marketing', 'B2B'],
  authors: [{ name: 'J-Reach Team' }],
  creator: 'J-Reach',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.j-reach.com',
    siteName: 'J-Reach',
    title: 'J-Reach - Revolutionize Your Lead Generation',
    description: 'Unlock a steady stream of high-quality leads without the risks of paid ads or reputation damage.',
    images: [
      {
        url: 'https://www.j-reach.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'J-Reach - Lead Generation Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J-Reach - Revolutionize Your Lead Generation',
    description: 'Unlock a steady stream of high-quality leads without the risks of paid ads or reputation damage.',
    images: ['https://www.j-reach.com/twitter-image.jpg'],
    creator: '@j_reach',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFDF5' },
    { media: '(prefers-color-scheme: dark)', color: '#1F2937' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen bg-beige-50">
        <header className="bg-white shadow-sm fixed w-full z-10">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(2)-7KJvz3pm1KJm5BrKAYiUCnweHd5PTP.png"
                    alt="J-reach logo"
                    width={48}
                    height={48}
                    className="h-12 w-auto"
                  />
                  <span className="sr-only">J-Reach Home</span>
                </Link>
              </div>
              <nav className="flex items-center space-x-6">
                <Link href="/" className="text-yellow-800 hover:text-yellow-600 font-medium">Home</Link>
                <Link href="/about" className="text-yellow-800 hover:text-yellow-600 font-medium">About</Link>
                <Link href="/terms-of-service/our-services" className="text-yellow-800 hover:text-yellow-600 font-medium">Our Services</Link>
                <Link href="/contact" className="text-yellow-800 hover:text-yellow-600 font-medium">Contact</Link>
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                  <a href="https://calendly.com/j-reach/intro" target="_blank" rel="noopener noreferrer">Get Started</a>
                </Button>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-grow pt-16">
          {children}
        </main>
        <footer className="bg-beige-100 text-yellow-800 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(2)-7KJvz3pm1KJm5BrKAYiUCnweHd5PTP.png"
                  alt="J-reach logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto mb-4"
                />
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-yellow-700 hover:text-yellow-600">Home</Link></li>
                  <li><Link href="/about" className="text-yellow-700 hover:text-yellow-600">About</Link></li>
                  <li><Link href="/terms-of-service/our-services" className="text-yellow-700 hover:text-yellow-600">Our Services</Link></li>
                  <li><Link href="/contact" className="text-yellow-700 hover:text-yellow-600">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-sm text-yellow-700">Email: junte@j-reach.com</p>
                <p className="text-sm text-yellow-700">Phone: +1 (833) 470-0525</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy-policy" className="text-yellow-700 hover:text-yellow-600">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="text-yellow-700 hover:text-yellow-600">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-yellow-300 text-center">
              <p className="text-sm text-yellow-700">
                &copy; {new Date().getFullYear()} J-Reach. All rights reserved. | <Link href="/privacy-policy" className="hover:text-yellow-600 ml-2">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-yellow-600 ml-2">Terms of Service</Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
