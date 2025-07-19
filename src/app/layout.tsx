// app/layout.tsx
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { Inter } from 'next/font/google'             // body text
import { Playfair_Display } from 'next/font/google'  // headings

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
})

export const metadata = {
  title: 'Verandah Glamping Villa Mangli | Glamping di Mangli, Magelang',
  description: 'Nikmati pengalaman glamping di kaki Gunung Sumbing, udara segar, pemandangan indah, fasilitas lengkap di Verandah Glamping Villa Mangli.',
  keywords: ['glamping', 'villa', 'mangli', 'magelang', 'kaliangkrik', 'wisata', 'penginapan'],
  openGraph: {
    title: 'Verandah Glamping Villa Mangli',
    description: 'Hillside glamping experience in Mangli, Magelang',
    url: 'https://verandahglamping.com',
    siteName: 'Verandah Glamping Villa Mangli',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Verandah Glamping Villa Mangli',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  alternates: {
    canonical: 'https://verandahglamping.com',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen ">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
