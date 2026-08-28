export default function Footer() {
  return (
    <footer className="bg-ink text-bone py-16 md:py-24 px-6 border-t border-bone/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
        
        <div className="flex-1">
          <span className="font-fraunces text-4xl font-semibold mb-6 block">Warman</span>
          <p className="text-warmgrey text-base mb-8 max-w-sm leading-relaxed">
            Restoran comfort food Indonesia dengan sistem khas Pilih Lauk, Pilih Sambal.
          </p>
          <p className="text-sm font-semibold tracking-wider text-warmgrey/60 uppercase">
            © 2026 Warman Restaurant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-base flex-1">
          <div>
            <h4 className="font-bold text-bone mb-6 uppercase tracking-widest text-xs">Lokasi</h4>
            <a href="https://maps.google.com/?q=Ruko+Commpark,+Jl.+Canadian+Broadway+Kota+Wisata+No.+15+Blok+E,+Limus+Nunggal,+Kecamatan+Cileungsi,+Kabupaten+Bogor" target="_blank" rel="noopener noreferrer" className="text-warmgrey hover:text-bone transition-colors leading-relaxed block">
              Ruko Commpark, Jl. Canadian Broadway Kota Wisata No. 15 Blok E, Limus Nunggal, Cileungsi, Bogor 16820
            </a>
          </div>
          <div>
            <h4 className="font-bold text-bone mb-6 uppercase tracking-widest text-xs">Kontak & Jam</h4>
            <a href="tel:+6282123451707" className="text-warmgrey hover:text-bone transition-colors block mb-3">
              0821-2345-1707
            </a>
            <span className="text-warmgrey block">
              Setiap hari: 10.00–22.00 WIB
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
