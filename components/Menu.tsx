'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData, sambals } from '@/lib/data';

const categories = Object.keys(menuData);

export default function Menu() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="menu" className="py-20 md:py-32 px-6 bg-ink text-bone scroll-mt-0">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="font-fraunces text-4xl md:text-6xl mb-6">Menu Lengkap</h2>
          <p className="text-warmgrey text-xs md:text-sm uppercase tracking-widest border border-warmgrey/30 px-6 py-2.5 rounded-full font-semibold">
            Semua harga belum termasuk pajak 10%
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-bone/10 mb-12 pb-1 relative z-10">
          <div className="flex gap-8 md:gap-12 mx-auto px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap text-xs md:text-sm font-semibold uppercase tracking-widest pb-4 transition-colors relative ${
                  activeTab === cat ? 'text-ember' : 'text-bone/50 hover:text-bone'
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div 
                    layoutId="activeMenuTab" 
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-ember" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, staggerChildren: 0.05 }}
              className="grid md:grid-cols-2 gap-x-16 gap-y-10"
            >
              {menuData[activeTab].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  key={i} 
                  className="flex justify-between items-start gap-6 border-b border-bone/10 pb-6 group hover:border-bone/30 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-bone mb-1.5">{item.name}</h3>
                    {item.desc && item.desc !== '—' && (
                      <p className="text-sm text-bone/60 leading-relaxed mb-3">{item.desc}</p>
                    )}
                    {item.hasSambal && (
                      <div className="flex items-center gap-1.5 mt-3">
                        {sambals.map(s => (
                          <div key={s.id} className={`w-2.5 h-2.5 rounded-full ${s.color}`} title={`Tersedia ${s.name}`} />
                        ))}
                        <span className="text-[10px] text-warmgrey uppercase tracking-widest ml-1 font-semibold">Pilihan Sambal</span>
                      </div>
                    )}
                  </div>
                  <div className="font-fraunces text-2xl text-ember font-medium whitespace-nowrap mt-1">
                    {item.price}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
