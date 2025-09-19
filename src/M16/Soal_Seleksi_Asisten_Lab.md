# SOAL SELEKSI ASISTEN LAB KOMPUTER
## PENGEMBANGAN APLIKASI WEB DENGAN REACT JS

**Lokasi:** Lab Komputer  
**Durasi:** 120 menit  
**Total Nilai:** 100 poin

---

## PETUNJUK PENGERJAAN

1. Baca dan pahami setiap soal dengan teliti
2. Implementasikan solusi menggunakan React JS
3. Gunakan inline CSS atau CSS dalam file JSX yang sama
4. Pastikan aplikasi berfungsi dengan baik
5. Kode harus rapi, terstruktur, dan mudah dibaca
6. Waktu pengerjaan: 120 menit

---

## SOAL PRAKTIKUM

### SOAL 1: COUNTER COMPONENT (20 poin)

Buatlah komponen React yang memiliki:
- State untuk menyimpan nilai counter (angka)
- Tombol untuk menambah (+1) dan mengurangi (-1) nilai counter
- Tombol untuk reset counter ke nilai 0
- Tampilkan nilai counter dengan styling yang menarik
- Implementasikan validasi agar counter tidak bisa bernilai negatif

**Kriteria Penilaian:**
- Penggunaan useState dengan benar (5 poin)
- Implementasi fungsi increment, decrement, dan reset (5 poin)
- Validasi nilai negatif (3 poin)
- Styling yang menarik dan responsif (4 poin)
- Kode yang rapi dan terstruktur (3 poin)

---

### SOAL 2: TODO LIST APPLICATION (25 poin)

Buatlah aplikasi todo list dengan fitur:
- Input untuk menambah todo baru
- Daftar todo yang sudah ditambahkan
- Kemampuan untuk menandai todo sebagai selesai (toggle)
- Kemampuan untuk menghapus todo
- Counter yang menampilkan jumlah todo yang belum selesai
- Filter untuk menampilkan: semua todo, todo yang belum selesai, atau todo yang sudah selesai

**Kriteria Penilaian:**
- Penggunaan state untuk todo list (5 poin)
- Implementasi CRUD operations (tambah, toggle, hapus) (8 poin)
- Implementasi filter todo (5 poin)
- Counter todo yang belum selesai (3 poin)
- UI/UX yang user-friendly (4 poin)

---

### SOAL 3: FORM VALIDATION (20 poin)

Buatlah form registrasi dengan validasi:
- Input nama (wajib diisi, minimal 3 karakter)
- Input email (wajib diisi, format email valid)
- Input password (wajib diisi, minimal 6 karakter)
- Input konfirmasi password (harus sama dengan password)
- Dropdown untuk memilih jurusan (IT, Sistem Informasi, Teknik Informatika)
- Checkbox untuk menyetujui terms & conditions
- Tombol submit yang hanya aktif jika semua validasi terpenuhi
- Tampilkan pesan error untuk setiap field yang tidak valid

**Kriteria Penilaian:**
- Penggunaan state untuk form data (5 poin)
- Implementasi validasi real-time (8 poin)
- Handling form submission (3 poin)
- Tampilan pesan error yang informatif (4 poin)

---

### SOAL 4: API INTEGRATION (20 poin)

Buatlah komponen yang:
- Fetch data dari API https://jsonplaceholder.typicode.com/posts
- Tampilkan loading state saat fetching data
- Tampilkan error state jika fetch gagal
- Tampilkan daftar post dalam bentuk card
- Implementasikan search/filter berdasarkan judul post
- Implementasikan pagination (tampilkan 5 post per halaman)

**Kriteria Penilaian:**
- Penggunaan useEffect untuk fetch data (5 poin)
- Handling loading dan error state (5 poin)
- Implementasi search/filter (5 poin)
- Implementasi pagination (5 poin)

---

### SOAL 5: THEME TOGGLE (15 poin)

Buatlah fitur toggle theme (light/dark mode):
- Toggle button untuk mengubah theme
- Implementasikan dark mode styling
- Theme preference disimpan di localStorage
- Semua komponen harus responsive terhadap perubahan theme
- Animasi transisi saat pergantian theme

**Kriteria Penilaian:**
- Penggunaan localStorage untuk menyimpan preference (5 poin)
- Implementasi dark mode styling (5 poin)
- Responsivitas semua komponen (3 poin)
- Animasi transisi (2 poin)

---

## KRITERIA PENILAIAN UMUM

### KODE QUALITY (20 poin)
- **Struktur kode:** 5 poin
  - Penggunaan komponen yang tepat
  - Pemisahan logic yang baik
  - Naming convention yang konsisten

- **Clean Code:** 5 poin
  - Kode mudah dibaca dan dipahami
  - Tidak ada code duplication
  - Penggunaan comment yang tepat

- **Performance:** 5 poin
  - Penggunaan useEffect dengan dependency yang tepat
  - Optimasi re-render
  - Memory leak prevention

- **Error Handling:** 5 poin
  - Handling error dengan baik
  - Validasi input yang tepat
  - User feedback yang informatif

### UI/UX (15 poin)
- **Design:** 8 poin
  - Layout yang menarik dan modern
  - Konsistensi dalam styling
  - Responsive design

- **User Experience:** 7 poin
  - Intuitive navigation
  - Feedback yang jelas untuk user action
  - Accessibility considerations

### FUNCTIONALITY (65 poin)
- **State Management:** 25 poin
  - Penggunaan useState dengan benar
  - State update yang tepat
  - State sharing antar komponen

- **Event Handling:** 20 poin
  - Event handler yang tepat
  - Form handling yang baik
  - User interaction yang smooth

- **Data Flow:** 20 poin
  - Props passing yang tepat
  - Data transformation yang benar
  - API integration yang baik

---

## RUBRIK PENILAIAN

| Nilai | Kriteria |
|-------|----------|
| 90-100 | Excellent - Semua fitur berfungsi sempurna, kode sangat rapi, UI/UX excellent |
| 80-89 | Very Good - Hampir semua fitur berfungsi, kode rapi, UI/UX baik |
| 70-79 | Good - Mayoritas fitur berfungsi, kode cukup rapi, UI/UX cukup baik |
| 60-69 | Fair - Beberapa fitur berfungsi, kode kurang rapi, UI/UX kurang baik |
| 50-59 | Poor - Sedikit fitur berfungsi, kode tidak rapi, UI/UX buruk |
| <50 | Very Poor - Hampir tidak ada fitur yang berfungsi |

---

## CATATAN PENTING

1. **Plagiarism:** Dilarang keras melakukan plagiat atau copy-paste dari sumber lain
2. **Collaboration:** Dilarang bekerja sama atau berbagi kode dengan peserta lain
3. **Time Management:** Kelola waktu dengan baik, prioritaskan fitur yang penting
4. **Testing:** Pastikan aplikasi berfungsi dengan baik sebelum submit
5. **Documentation:** Berikan comment yang jelas untuk kode yang kompleks

---

## SUBMISSION

1. Buat folder dengan nama: `NIM_NamaLengkap`
2. Simpan semua file React dalam folder tersebut
3. Pastikan aplikasi dapat dijalankan dengan `npm start`
4. Submit folder dalam format ZIP
5. Deadline: 120 menit dari waktu mulai

---

**Selamat mengerjakan!**
**Semoga sukses dalam seleksi asisten lab!**
