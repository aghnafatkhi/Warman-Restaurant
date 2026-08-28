'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData, sambals } from '@/lib/data';

const categories = Object.keys(menuData);

export default function Menu() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-ink text-bone scroll-mt-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4">Menu Lengkap</h2>
          <p className="text-warmgrey text-[11px] sm:text-xs uppercase tracking-widest border border-warmgrey/30 px-4 py-1.5 rounded-full font-semibold">
            Semua harga belum termasuk pajak 10%
          </p>
        </div>

        {/* Category Navigation Bar - Flex-nowrap Horizontal Scroll */}
        <div className="w-full overflow-x-auto hide-scrollbar border-b border-bone/10 mb-8 sm:mb-12 pb-1 relative z-10">
          <div className="flex flex-nowrap whitespace-nowrap gap-4 sm:gap-8 md:gap-10 min-w-max mx-auto px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`whitespace-nowrap text-xs sm:text-sm font-semibold uppercase tracking-widest pb-3.5 transition-colors relative min-h-[44px] flex items-center ${
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
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-6 sm:gap-y-8"
            >
              {menuData[activeTab].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                  key={i} 
                  className="flex justify-between items-start gap-4 border-b border-bone/10 pb-4 sm:pb-5 group hover:border-bone/25 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-bone mb-1 leading-snug">{item.name}</h3>
                    {item.desc && item.desc !== '—' && (
                      <p className="text-xs sm:text-sm text-bone/60 leading-relaxed mb-2">{item.desc}</p>
                    )}
                    {item.hasSambal && (
                      <div className="flex items-center gap-1.5 mt-2">
                        {sambals.map(s => (
                          <div key={s.id} className={`w-2.5 h-2.5 rounded-full ${s.color} shrink-0`} title={`Tersedia ${s.name}`} />
                        ))}
                        <span className="text-[10px] text-warmgrey uppercase tracking-wider ml-1 font-semibold">Pilihan Sambal</span>
                      </div>
                    )}
                  </div>
                  <div className="font-fraunces text-xl sm:text-2xl text-ember font-medium whitespace-nowrap shrink-0 mt-0.5">
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
