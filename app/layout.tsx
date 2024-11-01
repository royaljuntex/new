import 'app/globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Link from 'next/link'; // Import Link component

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'J-Reach | Revolutionize Your Lead Generation',
    template: '%s | J-Reach'
  },
  description: 'J-Reach specializes in cold outbound strategies that deliver consistent results, protect your reputation, and keep you ahead of the competition.',
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
