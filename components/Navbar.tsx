'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bone text-ink shadow-sm py-3.5 sm:py-4' : 'bg-transparent text-bone py-4 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          <Link href="/" className="font-fraunces text-xl sm:text-2xl font-semibold tracking-wide">
            Warman
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link href="#menu" className="font-medium text-xs lg:text-sm uppercase tracking-widest hover:text-ember transition-colors">Menu</Link>
            <Link href="#lokasi" className="font-medium text-xs lg:text-sm uppercase tracking-widest hover:text-ember transition-colors">Lokasi</Link>
            <a href="tel:+6282123451707" className="bg-ember text-bone px-5 py-2.5 rounded-sm font-medium text-xs lg:text-sm hover:bg-ember/90 transition-colors flex items-center gap-2 min-h-[44px]">
              <Phone className="w-4 h-4" />
              Telepon
            </a>
          </div>

          <button 
            className="md:hidden flex items-center justify-center p-2 min-w-[44px] min-h-[44px] text-current focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(true)} 
            aria-label="Buka Menu Navigasi"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-ink text-bone flex flex-col p-5 sm:p-8 animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-12">
            <span className="font-fraunces text-2xl font-semibold">Warman</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              aria-label="Tutup Menu Navigasi"
              className="flex items-center justify-center p-2 min-w-[44px] min-h-[44px] text-warmgrey hover:text-bone transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-6 text-xl sm:text-2xl font-fraunces">
            <Link 
              href="#menu" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="hover:text-ember transition-colors py-2 min-h-[44px] flex items-center"
            >
              Menu Lengkap
            </Link>
            <Link 
              href="#lokasi" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="hover:text-ember transition-colors py-2 min-h-[44px] flex items-center"
            >
              Lokasi & Kontak
            </Link>
          </div>
          <div className="mt-auto pb-6">
            <a 
              href="tel:+6282123451707" 
              className="w-full bg-ember text-bone py-3.5 rounded-sm font-medium text-center hover:bg-ember/90 transition-colors flex items-center justify-center gap-2 text-base min-h-[48px]"
            >
              <Phone className="w-5 h-5" />
              Telepon Sekarang
            </a>
          </div>
        </div>
      )}
    </>
  );
}
