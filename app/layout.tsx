import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arman Vega — Software Engineer & Full Stack Developer',
  description:
    'Portfolio of Arman Vega, a software engineer building scalable backend systems, modern web applications, AI-powered products, and mobile experiences.',
  generator: 'v0.app',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Backend Developer',
    'Mobile Developer',
    'Cloud Engineer',
    'Portfolio',
    'Next.js',
    'React',
    'Node.js',
  ],
  authors: [{ name: 'Arman Vega' }],
  openGraph: {
    title: 'Arman Vega — Software Engineer & Full Stack Developer',
    description:
      'Building scalable backend systems, modern web applications, AI-powered products, and mobile experiences.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
