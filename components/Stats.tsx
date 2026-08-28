'use client';
import { motion } from 'motion/react';

const stats = [
  { label: 'Rating Google', value: '4,9/5', sub: 'Dari 170+ ulasan' },
  { label: 'Kisaran Harga', value: '25k–50k', sub: 'Per orang' },
  { label: 'Jam Buka', value: '10.00', sub: 'Sampai 22.00 Setiap Hari' },
];

export default function Stats() {
  return (
    <section className="border-y border-ink/10 bg-bone">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center py-16 md:py-20"
          >
            <span className="text-xs uppercase tracking-widest text-warmgrey font-semibold mb-4">
              {stat.label}
            </span>
            <span className="font-fraunces text-5xl md:text-6xl text-ink mb-3 tracking-tight">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-ink/70">
              {stat.sub}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
