import { Instrument_Serif, DM_Sans } from 'next/font/google'
import './globals.css'

const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-serif' })
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata = {
  title: 'S&G Ramenservice – Ramen wassen in Amsterdam vanaf €25',
  description:
    'Ramen wassen in Amsterdam door twee jonge ondernemers. Vaste prijs vooraf, gratis offerte. Eerste 10 klanten 20% korting.',
}

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' }

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
