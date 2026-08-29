'use client';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="lokasi" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-bone scroll-mt-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
        
        <div className="flex-1 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="font-fraunces text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ink mb-8 sm:mb-10"
          >
            Lokasi & Kontak
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="flex gap-4 sm:gap-5 items-start">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-ember shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-ink mb-1">Alamat</h3>
                <p className="text-ink/80 leading-relaxed text-xs sm:text-sm md:text-base max-w-md">
                  Ruko Commpark, Jl. Canadian Broadway Kota Wisata No. 15 Blok E, Limus Nunggal, Kec. Cileungsi, Kab. Bogor, Jawa Barat 16820.
                </p>
                <a 
                  href="https://maps.google.com/?q=Ruko+Commpark,+Jl.+Canadian+Broadway+Kota+Wisata+No.+15+Blok+E,+Limus+Nunggal,+Kecamatan+Cileungsi,+Kabupaten+Bogor" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center mt-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-ember hover:text-ink active:scale-[0.98] transition-all duration-150 pb-1 border-b-2 border-ember hover:border-ink min-h-[44px]"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5 items-start">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-ember shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-ink mb-1">Hubungi Kami</h3>
                <p className="text-ink/80 mb-2 text-xs sm:text-sm">Pemesanan dan informasi:</p>
                <a 
                  href="tel:+6282123451707" 
                  className="font-fraunces text-2xl sm:text-3xl md:text-4xl text-ink hover:text-ember active:scale-[0.98] transition-all duration-150 inline-block min-h-[44px] items-center"
                >
                  0821-2345-1707
                </a>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5 items-start">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-ember shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg text-ink mb-1">Jam Operasional</h3>
                <p className="text-ink/80 text-xs sm:text-sm md:text-base">Setiap hari: 10.00–22.00 WIB</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-square bg-warmgrey/10 border border-warmgrey/25 p-1.5 sm:p-2 shadow-sm rounded-sm"
        >
          <div className="w-full h-full relative overflow-hidden bg-bone rounded-sm">
             <iframe 
               src="https://maps.google.com/maps?q=Ruko+Commpark,+Jl.+Canadian+Broadway+Kota+Wisata+No.+15+Blok+E,+Limus+Nunggal,+Kecamatan+Cileungsi,+Kabupaten+Bogor&t=&z=16&ie=UTF8&iwloc=&output=embed" 
               className="absolute inset-0 w-full h-full border-0 filter grayscale-[20%] contrast-[95%]"
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="Peta Lokasi Warman Restaurant"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
