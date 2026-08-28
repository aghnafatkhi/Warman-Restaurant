'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-20">
      {/* Background with Duotone overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-ink">
        <Image 
          src="https://picsum.photos/seed/warmantraditionalfood/1920/1080" 
          alt="Comfort food Indonesia" 
          fill 
          className="object-cover opacity-70 mix-blend-luminosity"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Warm Ember & Ink duotone gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-ember/15 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="uppercase tracking-[0.08em] text-bone/70 text-xs md:text-sm font-semibold mb-6 block"
        >
          Restoran di Kota Wisata, Cileungsi
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-fraunces text-bone text-4xl md:text-7xl lg:text-[88px] leading-[1.05] mb-6"
        >
          Warman Restaurant
          <span className="block text-[28px] md:text-5xl mt-3 md:mt-5 text-bone/90 italic">Pilih Lauk, Pilih Sambal.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-bone/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Warman menyajikan comfort food Indonesia — lauk goreng, nasi, rice bowl, dan camilan — dengan sistem pilih sambal sendiri.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-8 w-full md:w-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#menu" className="bg-ember text-bone px-8 py-4 rounded-sm font-semibold text-sm hover:bg-ember/90 transition-colors w-full sm:w-auto flex justify-center">
              Lihat Menu
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <a href="tel:+6282123451707" className="border border-bone/30 text-bone px-6 py-4 rounded-sm font-semibold text-sm hover:bg-bone hover:text-ink transition-colors w-full sm:w-auto flex justify-center">
                 Telepon
               </a>
               <a href="https://maps.google.com/?q=Ruko+Commpark,+Jl.+Canadian+Broadway+Kota+Wisata+No.+15+Blok+E,+Limus+Nunggal,+Kecamatan+Cileungsi,+Kabupaten+Bogor" target="_blank" rel="noopener noreferrer" className="border border-bone/30 text-bone px-6 py-4 rounded-sm font-semibold text-sm hover:bg-bone hover:text-ink transition-colors w-full sm:w-auto flex justify-center">
                 Arah Lokasi
               </a>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-ink/60 backdrop-blur-md border border-bone/10 px-5 py-2.5 rounded-full mt-2">
             <div className="flex text-ember">
               {[...Array(5)].map((_, i) => (
                 <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
               ))}
             </div>
             <span className="text-bone text-xs font-semibold uppercase tracking-wider">4,9 / 5 · 170+ ulasan</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
