'use client';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuLinkRef = useRef<HTMLAnchorElement>(null);
  const locationLinkRef = useRef<HTMLAnchorElement>(null);
  const phoneBtnRef = useRef<HTMLAnchorElement>(null);
  const isFirstRender = useRef(true);

  // Scroll handler for sticky background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile navigation is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Focus trap & escape key handler when mobile navigation is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    // Set focus to the close button initially
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = [
          closeBtnRef.current,
          menuLinkRef.current,
          locationLinkRef.current,
          phoneBtnRef.current,
        ].filter(Boolean) as HTMLElement[];

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Shift + Tab: focus wraps to last if active on first
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          // Tab: focus wraps to first if active on last
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Focus restoration on menu close (without causing viewport scroll jumps)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!isMobileMenuOpen) {
      triggerRef.current?.focus({ preventScroll: true });
    }
  }, [isMobileMenuOpen]);

  return (
    <header>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bone text-ink shadow-sm py-3.5 sm:py-4 border-b border-ink/5' : 'bg-transparent text-bone py-4 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          <Link href="/" className="font-fraunces text-xl sm:text-2xl font-semibold tracking-wide hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-ember focus-visible:outline-none rounded-sm">
            Warman
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link href="#menu" className="font-medium text-xs lg:text-sm uppercase tracking-widest hover:text-ember transition-colors focus-visible:ring-2 focus-visible:ring-ember focus-visible:outline-none rounded-sm">Menu</Link>
            <Link href="#lokasi" className="font-medium text-xs lg:text-sm uppercase tracking-widest hover:text-ember transition-colors focus-visible:ring-2 focus-visible:ring-ember focus-visible:outline-none rounded-sm">Lokasi</Link>
            <a href="tel:+6282123451707" className="bg-ember text-bone px-5 py-2.5 rounded-sm font-medium text-xs lg:text-sm hover:bg-ember/90 active:scale-[0.98] transition-all duration-150 flex items-center gap-2 min-h-[44px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ember focus-visible:outline-none">
              <Phone className="w-4 h-4" />
              Telepon
            </a>
          </div>

          <button 
            ref={triggerRef}
            className="md:hidden flex items-center justify-center p-2 min-w-[44px] min-h-[44px] text-current focus:outline-none focus-visible:ring-2 focus-visible:ring-ember hover:opacity-80 active:scale-[0.96] transition-all rounded-sm" 
            onClick={() => setIsMobileMenuOpen(true)} 
            aria-label="Buka Menu Navigasi"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Mobile"
            className="fixed inset-0 z-50 bg-ink text-bone flex flex-col p-5 sm:p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-fraunces text-2xl font-semibold">Warman</span>
              <button 
                ref={closeBtnRef}
                onClick={() => setIsMobileMenuOpen(false)} 
                aria-label="Tutup Menu Navigasi"
                aria-expanded={isMobileMenuOpen}
                className="flex items-center justify-center p-2 min-w-[44px] min-h-[44px] text-warmgrey hover:text-bone focus:outline-none focus-visible:ring-2 focus-visible:ring-ember active:scale-[0.96] transition-all rounded-sm"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-6 text-xl sm:text-2xl font-fraunces">
              <Link 
                ref={menuLinkRef}
                href="#menu" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="hover:text-ember transition-colors py-2 min-h-[44px] flex items-center focus-visible:ring-2 focus-visible:ring-ember focus-visible:outline-none rounded-sm"
              >
                Menu Lengkap
              </Link>
              <Link 
                ref={locationLinkRef}
                href="#lokasi" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="hover:text-ember transition-colors py-2 min-h-[44px] flex items-center focus-visible:ring-2 focus-visible:ring-ember focus-visible:outline-none rounded-sm"
              >
                Lokasi & Kontak
              </Link>
            </div>
            <div className="mt-auto pb-6">
              <a 
                ref={phoneBtnRef}
                href="tel:+6282123451707" 
                className="w-full bg-ember text-bone py-3.5 rounded-sm font-medium text-center hover:bg-ember/90 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2 text-base min-h-[48px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ember focus-visible:outline-none"
              >
                <Phone className="w-5 h-5" />
                Telepon Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
