import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Signature from '@/components/Signature';
import Menu from '@/components/Menu';
import Stats from '@/components/Stats';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import { Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-bone">
      <Navbar />
      <Hero />
      <Signature />
      <Menu />
      <Stats />
      <Location />
      <Footer />
      
      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-ink/95 backdrop-blur-md border-t border-bone/10 flex p-3 gap-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <a 
          href="tel:+6282123451707" 
          className="flex-1 bg-ember text-bone py-3 px-4 rounded-sm font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-ember/90 active:scale-[0.98] transition-all duration-150 min-h-[44px] uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ember focus-visible:outline-none"
        >
          <Phone className="w-4 h-4" />
          Telepon
        </a>
        <a 
          href="https://maps.google.com/?q=Ruko+Commpark,+Jl.+Canadian+Broadway+Kota+Wisata+No.+15+Blok+E,+Limus+Nunggal,+Kecamatan+Cileungsi,+Kabupaten+Bogor" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 border border-bone/30 text-bone py-3 px-4 rounded-sm font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-bone/10 active:scale-[0.98] transition-all duration-150 min-h-[44px] uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ember focus-visible:outline-none"
        >
          <MapPin className="w-4 h-4 text-ember" />
          Arah Lokasi
        </a>
      </div>
      <div className="h-16 md:hidden bg-ink" /> {/* Spacer for mobile sticky bar */}
    </main>
  );
}
