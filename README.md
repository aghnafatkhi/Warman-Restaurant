# Warman Restaurant — Official Website

Website resmi **Warman Restaurant** (Kota Wisata, Cileungsi), spesialis comfort food Indonesia dengan konsep khas *Pilih Lauk, Pilih Sambal*.

Live URL: [https://warmanresto.vercel.app/](https://warmanresto.vercel.app/)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components & Client Components)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Social**: Next.js Metadata API, Schema.org JSON-LD (Restaurant), dynamic Open Graph & Twitter Summary Cards

---

## 📁 Struktur & Konfigurasi Utama

Kode dan data disusun secara modular agar pemilik restoran atau developer dapat memperbarui informasi dengan mudah:

| File | Deskripsi |
| :--- | :--- |
| **`lib/site.ts`** | **Single Source of Truth** untuk seluruh data bisnis: nama restoran, nomor telepon, alamat, jam operasional, link Google Maps, rating, dan konfigurasi foto hero. |
| **`lib/data.ts`** | Daftar menu lengkap, harga, kategori (*Rice Bowl*, *Main Course*, *Side Dish*, *Sambal*, *Savory Bites*, *Sweet Bites*), dan deskripsi sambal. |
| **`components/Hero.tsx`** | Komponen Hero (mobile-first responsif dengan ambient visual identity). |
| **`components/Menu.tsx`** | Komponen menu interaktif dengan kategori horizontal, keyboard navigation, dan navigasi ke pilihan sambal. |
| **`components/Location.tsx`** | Komponen lokasi, informasi kontak, dan Google Maps interactive embed. |
| **`app/opengraph-image.tsx`** | Generator dinamis Open Graph image (1200×630). |
| **`app/twitter-image.tsx`** | Generator dinamis Twitter/X card image (1200×630). |

---

## 🖼️ Menambahkan Foto Hero Restoran

Jika Anda ingin menampilkan foto asli restoran di bagian Hero:

1. Simpan foto restoran Anda ke dalam folder `public/images/` (contoh: `public/images/hero-warman.webp`).
2. Buka file `lib/site.ts`.
3. Ubah nilai `heroImageSrc` dari `null` menjadi path foto Anda:

```typescript
// lib/site.ts
export const siteConfig = {
  // ...
  heroImageSrc: '/images/hero-warman.webp',
};
```

Jika bernilai `null`, website otomatis menampilkan visual ambient khas brand Warman (ember glow & dark ink canvas).

---

## 🚀 Menjalankan Project

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

### 3. Build & Test Production

```bash
npm run build
npm run start
```

### 4. Linting Code

```bash
npm run lint
```

---

## 🌐 Deployment (Vercel)

Project ini siap di-deploy secara instan ke **Vercel**:
1. Hubungkan repository GitHub ke dashboard Vercel.
2. Framework preset akan otomatis terdeteksi sebagai **Next.js**.
3. (Opsional) Tambahkan environment variable `NEXT_PUBLIC_SITE_URL` jika menggunakan custom domain.

---

© 2026 Warman Restaurant. All rights reserved.
