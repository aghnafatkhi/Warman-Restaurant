import type {Metadata} from 'next';
import {Fraunces, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/site';

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
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | ${siteConfig.tagline} — Kota Wisata`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline} — Kota Wisata`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline} — Kota Wisata`,
    description: siteConfig.description,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  'name': siteConfig.name,
  'description': siteConfig.description,
  'url': siteConfig.url,
  'telephone': siteConfig.phone.raw,
  'priceRange': siteConfig.priceRange.schema,
  'servesCuisine': 'Indonesian comfort food',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': siteConfig.address.street,
    'addressLocality': siteConfig.address.locality,
    'addressRegion': siteConfig.address.region,
    'postalCode': siteConfig.address.postalCode,
    'addressCountry': siteConfig.address.country,
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
    'opens': siteConfig.openingHours.opens,
    'closes': siteConfig.openingHours.closes,
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
      <body className={`${fraunces.variable} ${jakarta.variable} font-jakarta bg-bone text-ink antialiased selection:bg-ember/30 selection:text-ink`}>
        {children}
      </body>
    </html>
  );
}
