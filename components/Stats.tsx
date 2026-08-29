'use client';
import { motion } from 'motion/react';

const stats = [
  { label: 'Rating Google', value: '4,9/5', sub: 'dari 170+ ulasan' },
  { label: 'Kisaran Harga', value: 'Rp25–50 ribu', sub: 'per orang' },
  { label: 'Jam Buka', value: '10.00–22.00', sub: 'Setiap hari' },
];

export default function Stats() {
  return (
    <section className="border-y border-ink/10 bg-bone">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink/10">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col items-center text-center py-6 sm:py-10 md:py-14 px-3"
          >
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-warmgrey font-semibold mb-2 sm:mb-3">
              {stat.label}
            </span>
            <span className="font-fraunces text-3xl sm:text-4xl md:text-5xl text-ink mb-1.5 font-semibold tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-ink/75">
              {stat.sub}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
