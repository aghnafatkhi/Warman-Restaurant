'use client';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="lokasi" className="py-20 md:py-32 px-6 bg-bone scroll-mt-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="flex-1 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-fraunces text-4xl md:text-5xl lg:text-6xl text-ink mb-12"
          >
            Lokasi & Kontak
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-10"
          >
            <div className="flex gap-5">
              <MapPin className="w-7 h-7 text-ember shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl text-ink mb-2">Alamat</h3>
                <p className="text-ink/80 leading-relaxed text-lg max-w-md">
                  Ruko Commpark, Jl. Canadian Broadway Kota Wisata No. 15 Blok E, Limus Nunggal, Kec. Cileungsi, Kab. Bogor, Jawa Barat 16820.
                </p>
                <a href="https://maps.google.com/?q=Ruko+Commpark,+Jl.+Canadian+Broadway+Kota+Wisata+No.+15+Blok+E,+Limus+Nunggal,+Kecamatan+Cileungsi,+Kabupaten+Bogor" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-sm font-bold uppercase tracking-widest text-ember hover:text-ink transition-colors pb-1 border-b-2 border-ember hover:border-ink">
                  Buka di Google Maps
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <Phone className="w-7 h-7 text-ember shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl text-ink mb-2">Hubungi Kami</h3>
                <p className="text-ink/80 mb-4 text-lg">Pemesanan dan informasi:</p>
                <a href="tel:+6282123451707" className="font-fraunces text-3xl md:text-4xl text-ink hover:text-ember transition-colors">
                  0821-2345-1707
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <Clock className="w-7 h-7 text-ember shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl text-ink mb-2">Jam Operasional</h3>
                <p className="text-ink/80 text-lg">Setiap hari: 10.00–22.00 WIB</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex-1 w-full aspect-[4/3] lg:aspect-square bg-warmgrey/10 border border-warmgrey/30 p-2 shadow-sm rounded-sm"
        >
          <div className="w-full h-full relative overflow-hidden bg-bone">
             <iframe 
               src="https://maps.google.com/maps?q=Ruko+Commpark,+Jl.+Canadian+Broadway+Kota+Wisata+No.+15+Blok+E,+Limus+Nunggal,+Kecamatan+Cileungsi,+Kabupaten+Bogor&t=&z=16&ie=UTF8&iwloc=&output=embed" 
               className="absolute inset-0 w-full h-full border-0 filter grayscale-[20%] contrast-[95%]"
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
