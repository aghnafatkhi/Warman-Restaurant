/**
 * Single source of truth for Warman Restaurant business information and site configuration.
 * Any updates to contact details, hours, address, or domains should be made here.
 */

export const siteConfig = {
  name: 'Warman Restaurant',
  shortName: 'Warman',
  tagline: 'Pilih Lauk, Pilih Sambal.',
  locationBadge: 'Restoran di Kota Wisata, Cileungsi',
  description:
    'Warman Restaurant di Kota Wisata, Cileungsi, menyajikan comfort food Indonesia, dari lauk goreng dan rice bowl hingga camilan, dengan pilihan sambal sesuai selera.',
  shortDescription:
    'Restoran comfort food Indonesia di Kota Wisata, Cileungsi dengan sistem khas Pilih Lauk, Pilih Sambal.',
  
  // Base URL for production and canonical tags (can be overridden via NEXT_PUBLIC_SITE_URL)
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://warmanresto.vercel.app',

  // Contact info
  phone: {
    display: '0821-2345-1707',
    href: 'tel:+6282123451707',
    raw: '+6282123451707',
  },

  // Physical address
  address: {
    street: 'Ruko Commpark, Jl. Canadian Broadway Kota Wisata No. 15 Blok E',
    full: 'Ruko Commpark, Jl. Canadian Broadway Kota Wisata No. 15 Blok E, Limus Nunggal, Kec. Cileungsi, Kab. Bogor, Jawa Barat 16820',
    short: 'Ruko Commpark, Jl. Canadian Broadway Kota Wisata No. 15 Blok E, Limus Nunggal, Cileungsi, Bogor 16820',
    locality: 'Cileungsi',
    city: 'Kota Wisata, Cileungsi',
    region: 'Jawa Barat',
    postalCode: '16820',
    country: 'ID',
  },

  // Google Maps links
  maps: {
    url: 'https://maps.google.com/?q=Ruko+Commpark,+Jl.+Canadian+Broadway+Kota+Wisata+No.+15+Blok+E,+Limus+Nunggal,+Kecamatan+Cileungsi,+Kabupaten+Bogor',
    embedUrl: 'https://maps.google.com/maps?q=Ruko+Commpark,+Jl.+Canadian+Broadway+Kota+Wisata+No.+15+Blok+E,+Limus+Nunggal,+Kecamatan+Cileungsi,+Kabupaten+Bogor&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },

  // Operational schedule
  openingHours: {
    display: 'Setiap hari: 10.00–22.00 WIB',
    shortDisplay: '10.00–22.00',
    subText: 'Setiap hari',
    footerDisplay: 'Setiap hari 10.00–22.00 WIB',
    opens: '10:00',
    closes: '22:00',
  },

  // Customer reviews & ratings
  rating: {
    value: '4,9/5',
    reviews: '170+ ulasan',
    reviewsLabel: 'dari 170+ ulasan',
    fullText: '4,9/5 · dari 170+ ulasan Google',
    ratingValue: 4.9,
    reviewCount: 170,
  },

  // Pricing guide
  priceRange: {
    display: 'Rp25–50 ribu',
    subText: 'per orang',
    schema: 'Rp25.000–Rp50.000',
  },

  // Tax disclaimer
  taxNote: 'Semua harga belum termasuk pajak 10%.',

  // Optional official Hero Image path (e.g., '/images/hero-warman.webp'). If null, elegant ambient brand background is rendered.
  heroImageSrc: null as string | null,
};

export type SiteConfig = typeof siteConfig;
