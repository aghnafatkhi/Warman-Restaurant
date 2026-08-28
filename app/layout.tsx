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
  title: 'Warman Restaurant | Pilih Lauk, Pilih Sambal',
  description: 'Restoran comfort food Indonesia di Kota Wisata Cileungsi dengan sistem khas Pilih Lauk, Pilih Sambal.',
  openGraph: {
    title: 'Warman Restaurant | Pilih Lauk, Pilih Sambal',
    description: 'Restoran comfort food Indonesia di Kota Wisata Cileungsi dengan sistem khas Pilih Lauk, Pilih Sambal.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warman Restaurant | Pilih Lauk, Pilih Sambal',
    description: 'Restoran comfort food Indonesia di Kota Wisata Cileungsi dengan sistem khas Pilih Lauk, Pilih Sambal.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${fraunces.variable} ${jakarta.variable} font-jakarta bg-bone text-ink antialiased selection:bg-ember/30 selection:text-ink`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
