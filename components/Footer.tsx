'use client';
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-ink text-bone py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-bone/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-20">
        
        <div className="flex-1">
          <span className="font-fraunces text-2xl sm:text-3xl font-semibold mb-3 block">Warman</span>
          <p className="text-warmgrey text-xs sm:text-sm mb-6 max-w-sm leading-relaxed">
            Restoran comfort food Indonesia dengan sistem khas Pilih Lauk, Pilih Sambal.
          </p>
          <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-warmgrey/60 uppercase">
            © 2026 Warman Restaurant.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 text-xs sm:text-sm flex-1 w-full">
          <div>
            <h4 className="font-bold text-bone mb-3 uppercase tracking-widest text-[11px] sm:text-xs">Lokasi</h4>
            <a 
              href="https://maps.google.com/?q=Ruko+Commpark,+Jl.+Canadian+Broadway+Kota+Wisata+No.+15+Blok+E,+Limus+Nunggal,+Kecamatan+Cileungsi,+Kabupaten+Bogor" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-warmgrey hover:text-bone transition-colors leading-relaxed block"
            >
              Ruko Commpark, Jl. Canadian Broadway Kota Wisata No. 15 Blok E, Limus Nunggal, Cileungsi, Bogor 16820
            </a>
          </div>
          <div>
            <h4 className="font-bold text-bone mb-3 uppercase tracking-widest text-[11px] sm:text-xs">Kontak & Jam</h4>
            <a 
              href="tel:+6282123451707" 
              className="text-warmgrey hover:text-bone transition-colors block mb-2 font-medium"
            >
              0821-2345-1707
            </a>
            <span className="text-warmgrey block">
              Setiap hari: 10.00–22.00 WIB
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
