'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData, sambals } from '@/lib/data';

const categories = Object.keys(menuData);

export default function Menu() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const scrollToTab = useCallback((cat: string) => {
    const container = scrollContainerRef.current;
    const tabEl = tabRefs.current[cat];
    if (container && tabEl) {
      const containerWidth = container.clientWidth;
      const tabOffsetLeft = tabEl.offsetLeft;
      const tabWidth = tabEl.clientWidth;
      
      // Center the active tab smoothly within the scroll container
      const scrollTo = tabOffsetLeft - containerWidth / 2 + tabWidth / 2;
      
      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleSelectCategory = (cat: string) => {
    setActiveTab(cat);
    scrollToTab(cat);
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex = currentIndex;
    if (e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % categories.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + categories.length) % categories.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = categories.length - 1;
    } else {
      return;
    }
    e.preventDefault();
    const nextCat = categories[nextIndex];
    handleSelectCategory(nextCat);
    tabRefs.current[nextCat]?.focus();
  };

  useEffect(() => {
    // Initial centering of active tab if needed
    scrollToTab(activeTab);
  }, [activeTab, scrollToTab]);

  const currentItems = menuData[activeTab] || [];

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-ink text-bone scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 text-bone">
            Menu Lengkap
          </h2>
          <p className="text-warmgrey text-[11px] sm:text-xs uppercase tracking-widest border border-warmgrey/30 px-3.5 sm:px-4 py-1.5 rounded-full font-semibold">
            Semua harga belum termasuk pajak 10%.
          </p>
        </div>

        {/* Sticky Category Selector */}
        <div className="sticky top-[56px] sm:top-[64px] z-30 bg-ink/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 border-b border-bone/10 mb-8 sm:mb-12 transition-all">
          <div 
            ref={scrollContainerRef}
            role="tablist"
            aria-label="Kategori Menu"
            className="flex flex-nowrap whitespace-nowrap gap-2 sm:gap-3 overflow-x-auto hide-scrollbar py-0.5 max-w-5xl mx-auto"
          >
            {categories.map((cat, idx) => {
              const isActive = activeTab === cat;
              const tabId = `tab-${cat.toLowerCase().replace(/\s+/g, '-')}`;
              const panelId = `panel-${cat.toLowerCase().replace(/\s+/g, '-')}`;

              return (
                <button
                  key={cat}
                  ref={(el) => { tabRefs.current[cat] = el; }}
                  id={tabId}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleSelectCategory(cat)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`min-h-[42px] px-4 sm:px-5 rounded-sm text-xs sm:text-sm font-semibold uppercase tracking-wider shrink-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ember flex items-center justify-center border ${
                    isActive
                      ? 'bg-ember text-bone border-ember shadow-sm'
                      : 'bg-bone/5 text-bone/60 border-bone/10 hover:text-bone hover:bg-bone/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Container */}
        <div 
          id={`panel-${activeTab.toLowerCase().replace(/\s+/g, '-')}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab.toLowerCase().replace(/\s+/g, '-')}`}
          className="min-h-[360px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-6 sm:gap-y-8"
            >
              {currentItems.map((item, i) => (
                <div 
                  key={`${item.name}-${i}`} 
                  className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 border-b border-bone/10 pb-4 sm:pb-5 group hover:border-bone/25 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-bone mb-1 leading-snug tracking-tight">
                      {item.name}
                    </h3>
                    
                    {item.desc && item.desc !== '—' && (
                      <p className="text-xs sm:text-sm text-bone/65 leading-relaxed mb-2 max-w-prose">
                        {item.desc}
                      </p>
                    )}

                    {item.hasSambal && (
                      <button 
                        type="button"
                        onClick={() => handleSelectCategory('Sambal')}
                        title="Klik untuk melihat menu Sambal"
                        className="inline-flex items-center gap-1.5 mt-1.5 text-left group/sambal focus:outline-none focus-visible:ring-1 focus-visible:ring-ember rounded"
                      >
                        <div className="flex items-center gap-1 shrink-0">
                          {sambals.map(s => (
                            <span 
                              key={s.id} 
                              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${s.color} shrink-0`} 
                            />
                          ))}
                        </div>
                        <span className="text-[10px] sm:text-xs text-warmgrey group-hover/sambal:text-ember uppercase tracking-wider font-medium transition-colors">
                          Pilihan Sambal Tersedia
                        </span>
                      </button>
                    )}
                  </div>

                  <div className="font-fraunces text-xl sm:text-2xl text-ember font-semibold whitespace-nowrap shrink-0 sm:self-start mt-0.5">
                    {item.price}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

