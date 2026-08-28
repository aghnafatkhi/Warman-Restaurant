'use client';
import { motion } from 'motion/react';
import { sambals } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Signature() {
  return (
    <section className="py-16 md:py-32 px-6 bg-bone">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        <div className="flex-1 lg:sticky lg:top-32">
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-fraunces text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ink mb-6"
          >
            Sistem Khas Warman:<br/>
            <span className="italic">Pilih Lauk, Pilih Sambal.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-ink/80 leading-relaxed mb-8 max-w-lg"
          >
            Setiap hidangan goreng favorit Anda disajikan dengan pilihan sambal khas yang diracik khusus. Pilih lauknya, tentukan tingkat pedasnya.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Link href="#menu" className="inline-flex items-center gap-2 text-ember font-semibold text-sm hover:gap-3 transition-all uppercase tracking-widest">
              Lihat menu lengkap <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
          {sambals.map((sambal, i) => (
            <motion.div
              key={sambal.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-bone border-l-4 border-y border-r border-warmgrey/20 p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300 shadow-sm"
              style={{ borderLeftColor: `var(--color-${sambal.color.replace('bg-', '')})` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${sambal.color}`} />
                <h3 className="font-fraunces text-xl md:text-2xl text-ink font-semibold">{sambal.name}</h3>
              </div>
              <p className="text-base text-ink/70 leading-relaxed">
                {sambal.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
