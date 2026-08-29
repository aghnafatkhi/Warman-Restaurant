'use client';
import { motion } from 'motion/react';
import { sambals } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Signature() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-bone">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        
        <div className="flex-1 lg:sticky lg:top-32">
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-fraunces text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.12] text-ink mb-4 sm:mb-6"
          >
            Sistem Khas Warman:<br/>
            <span className="italic font-normal">Pilih Lauk, Pilih Sambal.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-ink/80 leading-relaxed mb-6 sm:mb-8 max-w-lg"
          >
            Pilih lauk favoritmu, lalu pasangkan dengan sambal Warman sesuai selera.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Link 
              href="#menu" 
              className="inline-flex items-center gap-2 text-ember font-semibold text-xs sm:text-sm hover:gap-3 transition-all uppercase tracking-widest min-h-[44px] focus-visible:ring-2 focus-visible:ring-ember focus-visible:outline-none rounded-sm px-1"
            >
              Lihat menu lengkap <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
          {sambals.map((sambal, i) => (
            <motion.div
              key={sambal.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              className="bg-bone border border-warmgrey/15 p-5 sm:p-6 rounded-xs hover:border-warmgrey/30 hover:bg-ink/[0.01] transition-all duration-250"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className={`w-2 h-2 rounded-full ${sambal.color} shrink-0`} />
                <h3 className="font-fraunces text-lg sm:text-xl text-ink font-semibold">{sambal.name}</h3>
              </div>
              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                {sambal.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
