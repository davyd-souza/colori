import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'
import { eiko, inter } from '@/styles/font'

export const metadata: Metadata = {
  title: 'Colori',
  description: 'A modern color palette generator!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${eiko.variable} grid min-h-dvh grid-rows-[min-content_14rem_1fr] bg-background font-sans text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
