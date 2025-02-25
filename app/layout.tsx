import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from '@/components/modal-provider'
import { ToasterProvider } from '@/components/toaster-provider'

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  weight: '500',
  adjustFontFallback: false,
  variable: '--font-inter',
})
const montserrat = Montserrat({
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Brains',
  description: 'Generate Image, Video, Audio and more with Brains',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={`${montserrat.variable} ${inter.variable} font-inter`}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
