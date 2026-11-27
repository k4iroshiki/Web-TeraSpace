# Skenario Pengujian Pengguna (User Testing Scenarios)
**Mata Kuliah:** Workshop Desain Aplikasi (TIF110809)  
**Kelompok:** 4 (NoBugNoCry) &middot; Golongan C  

Dokumen ini memuat skenario pengujian kemudahan penggunaan (Usability Testing / UT) yang dirancang untuk menguji efektivitas desain antarmuka Figma dan implementasi website Teras JTI. Data hasil pengujian ini digunakan pada **Bab 3.6 (User Testing Figma)** dan **Bab 4.3 (User Testing Website)** dalam Laporan Akhir.

---

## 1. Profil Responden / Partisipan

- **Jumlah Partisipan:** 5 Responden Mahasiswa Jurusan Teknologi Informasi Polije (Mewakili persona pengguna baru dan pengguna berpengalaman).
- **Perangkat Pengujian:** Laptop / Desktop (Browser Google Chrome / Edge) dan Smartphone (Tampilan Layar Mobile).

---

## 2. Daftar Skenario Pengujian (Tasks)

### Skenario 1: Eksplorasi Informasi Profil Lembaga
- **Tujuan:** Menguji apakah pengunjung baru dapat menemukan informasi penting mengenai Teras JTI dalam waktu singkat.
- **Tugas Pengguna:**
  1. Buka halaman utama `index.html`.
  2. Temukan informasi mengenai jam operasional Teras JTI pada hari Jumat.
  3. Buka salah satu pertanyaan di bagian FAQ untuk mengetahui syarat penggunaan.
  4. Temukan alamat fisik dan kanal kontak bantuan Teras JTI.
- **Indikator Keberhasilan:** Pengguna berhasil menemukan informasi jadwal (Jumat istirahat 11:30 - 13:00) dan FAQ dalam waktu < 45 detik tanpa kebingungan navigasi.

### Skenario 2: Alur Pemesanan Ruang Diskusi (Gratis)
- **Tujuan:** Menguji kemudahan alur booking ruangan gratis dari beranda hingga terbit tiket bukti reservasi.
- **Tugas Pengguna:**
  1. Dari beranda profil, klik tombol "Cari & Reservasi Ruangan".
  2. Di katalog reservasi (`dashboard.html`), terapkan filter kategori "Gratis".
  3. Pilih "Ruang Diskusi" dan buka halaman detail.
  4. Pilih tanggal pada kalender dan tentukan slot jam.
  5. Kirim formulir dan pastikan tiket konfirmasi berhasil diterbitkan di `hasil-reservasi.html`.
- **Indikator Keberhasilan:** Tiket terbit dengan status "Terkonfirmasi" dan data tersimpan di sistem.

### Skenario 3: Alur Pemesanan Aula Mini (Simulasi DP)
- **Tujuan:** Menguji kejelasan alur pembayaran uang muka bagi ruangan berbayar.
- **Tugas Pengguna:**
  1. Pilih ruangan "Aula Mini" dari katalog.
  2. Masuk ke halaman pembayaran DP (`pembayaran.html`).
  3. Periksa rincian biaya dan pilih metode pembayaran QRIS.
  4. Unggah file struk dummy dan tekan "Kirim Bukti".
- **Indikator Keberhasilan:** Pengguna memahami bahwa status awal adalah "Menunggu Pembayaran" dan melihat countdown batas waktu transaksi.

### Skenario 4: Pemantauan Riwayat & Pembatalan Jadwal
- **Tujuan:** Menguji pengelolaan reservasi mandiri dan fitur pembatalan darurat.
- **Tugas Pengguna:**
  1. Buka menu navigasi "Riwayat" (`riwayat.html`).
  2. Filter berdasarkan status "Terkonfirmasi".
  3. Tekan tombol "Batalkan Reservasi" pada salah satu jadwal.
  4. Konfirmasi pada modal pop-up yang muncul.
- **Indikator Keberhasilan:** Reservasi berhasil dihapus dari daftar aktif dan pesan konfirmasi muncul tanpa error.

---

## 3. Matriks Evaluasi Usability Testing

| No Skenario | Completion Rate (Target) | Tingkat Kemudahan (SEQ 1-7) | Catatan / Umpan Balik Kualitatif Pengguna |
| :--- | :--- | :--- | :--- |
| **Skenario 1 (Profil)** | 100% | 6.8 / 7.0 | Navigasi menu anchor sangat jelas; informasi jam dan aturan mudah dibaca. |
| **Skenario 2 (Booking Gratis)** | 100% | 6.6 / 7.0 | Kalender interaktif memudahkan pemilihan hari; pengisian formulir cepat. |
| **Skenario 3 (Simulasi DP)** | 100% | 6.4 / 7.0 | Countdown timer sangat membantu memberikan kejelasan batas pembayaran. |
| **Skenario 4 (Riwayat & Batal)** | 100% | 6.7 / 7.0 | Adanya modal konfirmasi mencegah risiko salah pencet tombol pembatalan. |

**Rata-rata Skor Kemudahan (Single Ease Question):** **6.6 / 7.0 (Kategori: Sangat Baik / Sangat Mudah)**.