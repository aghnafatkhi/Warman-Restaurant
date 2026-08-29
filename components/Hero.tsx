'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

// Ganti nilai di bawah dengan path gambar asli (misalnya '/images/warman-hero.webp') jika sudah tersedia di folder public
const HERO_IMAGE_SRC: string | null = null;

export default function Hero() {
  return (
    <section className="relative pt-24 pb-11 sm:pt-28 sm:pb-14 md:pt-36 md:pb-28 flex flex-col justify-center items-start md:items-center text-left md:text-center px-4 sm:px-6 md:px-8 lg:px-12 bg-ink overflow-hidden">
      {/* Background with Duotone/Ambient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-ink">
        {HERO_IMAGE_SRC ? (
          <>
            <Image 
              src={HERO_IMAGE_SRC} 
              alt="" 
              fill 
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
              className="object-cover opacity-65 mix-blend-luminosity"
              priority
              referrerPolicy="no-referrer"
            />
            {/* Warm Ember & Ink duotone gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-ember/15 mix-blend-overlay" />
          </>
        ) : (
          <>
            {/* Ambient Brand Color treatment */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/95 to-ink/90" />
            {/* Single subtle ember glow on mobile, centered glow on desktop */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(187,90,46,0.08)_0%,transparent_60%)] md:bg-[radial-gradient(circle_at_center,rgba(187,90,46,0.12)_0%,transparent_70%)]" />
            {/* Desktop only: Accent top light */}
            <div className="hidden md:block absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(circle_at_top,rgba(187,90,46,0.08)_0%,transparent_60%)]" />
            {/* Desktop only: Pinstripe grid texture */}
            <div className="hidden md:block absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#8A7F72_1px,transparent_1px),linear-gradient(to_bottom,#8A7F72_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-start md:items-center">
        {/* Reveal Group 1: Location + Main Heading + Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-col items-start md:items-center w-full"
        >
          {/* 1. Location Label */}
          <span className="text-bone/70 text-xs md:text-sm font-medium md:font-semibold md:uppercase md:tracking-[0.08em] mb-3 md:mb-6 block">
            Restoran di Kota Wisata, Cileungsi
          </span>
          
          {/* 2. Main Heading & 3. Tagline */}
          <h1 className="font-fraunces text-bone text-[34px] sm:text-[42px] md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.05] md:leading-[1.08] tracking-tight mb-0">
            Warman Restaurant
            <span className="block text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-2 sm:mt-2.5 md:mt-3 text-bone/90 italic font-normal">
              Pilih Lauk, Pilih Sambal.
            </span>
          </h1>
        </motion.div>

        {/* Reveal Group 2: Description + CTA + Google Rating */}
        <motion.div 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-start md:items-center w-full mt-4 sm:mt-5 md:mt-0"
        >
          {/* 4. Description */}
          <p className="text-bone/75 md:text-bone/80 text-[14px] sm:text-[15px] md:text-lg leading-[1.6] md:leading-relaxed max-w-[36ch] sm:max-w-md md:max-w-xl md:mx-auto mb-6 sm:mb-7 md:mb-10 font-normal">
            Warman menyajikan comfort food Indonesia, dari lauk goreng dan rice bowl hingga camilan, dengan pilihan sambal sesuai selera.
          </p>

          {/* 5. CTA & 6. Rating */}
          <div className="flex flex-col items-start md:items-center gap-4 md:gap-6 w-full">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start md:justify-center gap-3 sm:gap-4 w-full max-w-[360px] sm:max-w-md md:max-w-none">
              {/* Primary CTA */}
              <Link 
                href="#menu" 
                className="bg-ember text-bone px-8 py-3.5 rounded-sm font-semibold text-sm hover:bg-ember/90 active:scale-[0.98] transition-all duration-150 w-full sm:w-auto min-h-[48px] sm:min-h-[44px] flex items-center justify-center text-center tracking-normal md:tracking-wider md:uppercase focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ember focus-visible:outline-none"
              >
                Lihat Menu
              </Link>
              
              {/* Secondary CTA buttons (Desktop only to prevent duplication with mobile bottom bar) */}
              <div className="hidden md:flex gap-3 w-full sm:w-auto">
                <a 
                  href="tel:+6282123451707" 
                  className="flex-1 sm:flex-initial border border-bone/30 text-bone px-5 py-3.5 rounded-sm font-semibold text-xs sm:text-sm hover:bg-bone hover:text-ink active:scale-[0.98] transition-all duration-150 min-h-[44px] flex items-center justify-center text-center tracking-wider uppercase focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ember focus-visible:outline-none"
                >
                  Telepon
                </a>
                <a 
                  href="https://maps.google.com/?q=Ruko+Commpark,+Jl.+Canadian+Broadway+Kota+Wisata+No.+15+Blok+E,+Limus+Nunggal,+Kecamatan+Cileungsi,+Kabupaten+Bogor" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 sm:flex-initial border border-bone/30 text-bone px-5 py-3.5 rounded-sm font-semibold text-xs sm:text-sm hover:bg-bone hover:text-ink active:scale-[0.98] transition-all duration-150 min-h-[44px] flex items-center justify-center text-center tracking-wider uppercase focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ember focus-visible:outline-none"
                >
                  Arah Lokasi
                </a>
              </div>
            </div>

            {/* Google Rating */}
            <div className="w-full max-w-[360px] md:max-w-none">
              {/* Mobile: Plain text line */}
              <p className="md:hidden text-xs text-bone/70 font-normal">
                4,9/5 · dari 170+ ulasan Google
              </p>

              {/* Desktop: Rating badge pill */}
              <div className="hidden md:inline-flex items-center gap-2.5 bg-ink/60 backdrop-blur-md border border-bone/15 px-4 py-2 rounded-full mt-1">
                <div className="flex text-ember">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-bone/90 text-[11px] sm:text-xs font-semibold tracking-wider uppercase">4,9/5 · dari 170+ ulasan Google</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
