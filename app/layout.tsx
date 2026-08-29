import type {Metadata} from 'next';
import {Fraunces, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css'; // Global styles

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Warman Restaurant | Pilih Lauk, Pilih Sambal — Kota Wisata',
  description: 'Warman Restaurant di Kota Wisata, Cileungsi, menyajikan comfort food Indonesia, dari lauk goreng dan rice bowl hingga camilan, dengan pilihan sambal sesuai selera.',
  alternates: {
    canonical: 'https://warmanresto.vercel.app/',
  },
  openGraph: {
    title: 'Warman Restaurant | Pilih Lauk, Pilih Sambal — Kota Wisata',
    description: 'Warman Restaurant di Kota Wisata, Cileungsi, menyajikan comfort food Indonesia, dari lauk goreng dan rice bowl hingga camilan, dengan pilihan sambal sesuai selera.',
    url: 'https://warmanresto.vercel.app/',
    siteName: 'Warman Restaurant',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warman Restaurant | Pilih Lauk, Pilih Sambal — Kota Wisata',
    description: 'Warman Restaurant di Kota Wisata, Cileungsi, menyajikan comfort food Indonesia, dari lauk goreng dan rice bowl hingga camilan, dengan pilihan sambal sesuai selera.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  'name': 'Warman Restaurant',
  'description': 'Warman Restaurant di Kota Wisata, Cileungsi, menyajikan comfort food Indonesia, dari lauk goreng dan rice bowl hingga camilan, dengan pilihan sambal sesuai selera.',
  'url': 'https://warmanresto.vercel.app/',
  'telephone': '+6282123451707',
  'priceRange': 'Rp25.000–Rp50.000',
  'servesCuisine': 'Indonesian comfort food',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Ruko Commpark, Jl. Canadian Broadway Kota Wisata No. 15 Blok E',
    'addressLocality': 'Cileungsi',
    'addressRegion': 'Jawa Barat',
    'postalCode': '16820',
    'addressCountry': 'ID',
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    'opens': '10:00',
    'closes': '22:00',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
      </head>
      <body className={`${fraunces.variable} ${jakarta.variable} font-jakarta bg-bone text-ink antialiased selection:bg-ember/30 selection:text-ink`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
