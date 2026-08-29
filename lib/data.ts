export const sambals = [
  { id: 'korek', name: 'Sambal Korek', desc: 'Cabai dan bawang goreng dengan rasa pedas yang paling kuat.', color: 'bg-sambal-korek' },
  { id: 'matah', name: 'Sambal Matah', desc: 'Bawang merah dan serai segar dengan aroma khas sambal matah.', color: 'bg-sambal-matah' },
  { id: 'terasi', name: 'Sambal Terasi', desc: 'Terasi dengan rasa gurih dan aroma yang khas.', color: 'bg-sambal-terasi' },
  { id: 'cabeijo', name: 'Cabe Ijo', desc: 'Sambal cabai hijau dengan rasa gurih.', color: 'bg-sambal-cabeijo' },
];

export type MenuItem = {
  name: string;
  desc?: string;
  price: string;
  hasSambal?: boolean;
}

export const menuData: Record<string, MenuItem[]> = {
  'Rice Bowl': [
    { name: 'Dori Rice Bowl', desc: 'Dori goreng tepung, nasi putih, dan pilihan sambal.', price: '26.000', hasSambal: true },
    { name: 'Paru Rice Bowl', desc: 'Paru sapi goreng, nasi putih, dan pilihan sambal.', price: '26.000', hasSambal: true },
    { name: 'Karaage Rice Bowl', desc: 'Ayam fillet goreng tepung, nasi putih, dan pilihan sambal.', price: '25.000', hasSambal: true },
    { name: 'Suwir Rice Bowl', desc: 'Ayam suwir, nasi putih, dan pilihan sambal.', price: '21.000', hasSambal: true },
  ],
  'Main Course': [
    { name: 'Ayam Goreng', desc: 'Ayam goreng dan pilihan sambal.', price: '27.000', hasSambal: true },
    { name: 'Paru Sapi Goreng', desc: 'Paru sapi goreng dan pilihan sambal.', price: '32.000', hasSambal: true },
    { name: 'Ikan Lele Goreng', desc: 'Ikan lele goreng dan pilihan sambal.', price: '22.000', hasSambal: true },
    { name: 'Ikan Nila Goreng', desc: 'Ikan nila goreng dan pilihan sambal.', price: '28.000', hasSambal: true },
    { name: 'Telur Barendo — 2 telur', desc: 'Telur ayam goreng berenda dengan pilihan sambal.', price: '22.000', hasSambal: true },
    { name: 'Telur Barendo — 3 telur', desc: 'Telur ayam goreng berenda dengan pilihan sambal.', price: '29.000', hasSambal: true },
    { name: 'Nasi Goreng Kampoeng', desc: 'Nasi goreng dengan ayam suwir.', price: '23.000', hasSambal: false },
    { name: 'Nasi Goreng Spesial', desc: 'Nasi goreng dengan ayam goreng dan telur mata sapi.', price: '43.000', hasSambal: false },
    { name: 'Nasi Putih', desc: '—', price: '8.000', hasSambal: false },
    { name: 'Nasi Merah', desc: '—', price: '10.000', hasSambal: false },
  ],
  'Side Dish': [
    { name: 'Ati Ampela', desc: '—', price: '15.000', hasSambal: false },
    { name: 'Bakwan Sayur', desc: 'Bakwan sayur goreng, isi 3 pcs.', price: '24.000', hasSambal: false },
    { name: 'Bakwan Jagung', desc: 'Bakwan jagung goreng, isi 3 pcs.', price: '24.000', hasSambal: false },
    { name: 'Tumis Pare Teri', desc: '—', price: '15.000', hasSambal: false },
    { name: 'Tumis Toge Tahu', desc: '—', price: '14.000', hasSambal: false },
    { name: 'Tumis Pakcoy', desc: '—', price: '12.000', hasSambal: false },
    { name: 'Tumis Kangkung', desc: '—', price: '14.000', hasSambal: false },
  ],
  'Sambal': [
    { name: 'Sambal Korek', price: '8.000' },
    { name: 'Sambal Matah', price: '8.000' },
    { name: 'Sambal Terasi', price: '8.000' },
    { name: 'Cabe Ijo', price: '8.000' },
  ],
  'Savory Bites': [
    { name: 'French Fries', price: '21.000' },
    { name: 'Tahu Bakso Bumbu Rujak', price: '24.000' },
    { name: 'Cireng Bumbu Rujak', price: '17.000' },
    { name: 'Dimsum', price: '20.000' },
    { name: 'Tahu Cabe Garam', price: '22.000' },
    { name: 'Bakpao Goreng Mini Daging', price: '21.000' },
    { name: 'Risoles Beef Mayo', price: '21.000' },
    { name: 'Sosis Solo Ayam', price: '20.000' },
    { name: 'Samosa', price: '21.000' },
    { name: 'Mozarella Sticks', price: '25.000' },
    { name: 'Shrimp Rolls', price: '23.000' },
    { name: 'Chicken Nugget', price: '20.000' },
    { name: 'Ebi Furai', price: '28.000' },
    { name: 'Beef Sausages', price: '25.000' },
    { name: 'Stik Singkong Goreng', price: '21.000' },
  ],
  'Sweet Bites': [
    { name: 'Pisang Cokelat', price: '21.000' },
    { name: 'Pisang Goreng Tepung', price: '20.000' },
    { name: 'Bakpao Goreng Mini Cokelat', price: '20.000' },
    { name: 'Bakpao Goreng Mini Pisang', price: '20.000' },
  ],
};
