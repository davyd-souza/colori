import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const eiko = localFont({
  src: '../assets/eiko-heavy.otf',
  display: 'swap',
  variable: '--font-eiko',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
  variable: '--font-inter',
})
