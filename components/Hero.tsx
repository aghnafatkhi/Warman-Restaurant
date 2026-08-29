'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 bg-ink overflow-hidden">
      {/* Background with Duotone overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-ink">
        <Image 
          src="https://picsum.photos/seed/warmantraditionalfood/1920/1080" 
          alt="Comfort food Indonesia" 
          fill 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
          className="object-cover opacity-65 mix-blend-luminosity"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Warm Ember & Ink duotone gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-ember/15 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="uppercase tracking-[0.08em] text-bone/70 text-[11px] sm:text-xs md:text-sm font-semibold mb-4 sm:mb-6 block"
        >
          Restoran di Kota Wisata, Cileungsi
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-fraunces text-bone text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[1.08] mb-4 sm:mb-6 tracking-tight"
        >
          Warman Restaurant
          <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-3 text-bone/90 italic font-normal">
            Pilih Lauk, Pilih Sambal.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-bone/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal"
        >
          Warman menyajikan comfort food Indonesia, dari lauk goreng dan rice bowl hingga camilan, dengan pilihan sambal sesuai selera.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 w-full"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
            <Link 
              href="#menu" 
              className="bg-ember text-bone px-8 py-3.5 rounded-sm font-semibold text-xs sm:text-sm hover:bg-ember/90 active:scale-[0.98] transition-all duration-150 w-full sm:w-auto min-h-[44px] flex items-center justify-center text-center tracking-wider uppercase focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ember focus-visible:outline-none"
            >
              Lihat Menu
            </Link>
            <div className="flex gap-3 w-full sm:w-auto">
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

          <div className="inline-flex items-center gap-2.5 bg-ink/60 backdrop-blur-md border border-bone/15 px-4 py-2 rounded-full mt-1">
             <div className="flex text-ember">
               {[...Array(5)].map((_, i) => (
                 <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
               ))}
             </div>
             <span className="text-bone/90 text-[11px] sm:text-xs font-semibold tracking-wider uppercase">4,9/5 · dari 170+ ulasan Google</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
