import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Omaha Commercial Roofing | Residential & Commercial Roofing Contractor',
  description: 'Omaha\u2019s leading roofing contractor with 40+ years of experience. Veteran-owned, family-operated. Commercial, industrial, residential roofing services in Omaha, NE.',
  metadataBase: new URL('https://omahacommercialroofing.com'),
  openGraph: 
    type: 'website',
    url: 'https://omahacommercialroofing.com',
    siteName: 'Omaha Commercial Roofing',
    title: 'Omaha Commercial Roofing | Residential & Commercial Roofing Contractor',
    description: 'Omaha\u2019s leading roofing contractor and family-operated.',
  }
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}