// Mengimpor useState hook dari pustaka react
import { useState } from "react";

// Mengimpor stylesheet untuk aplikasi ini
import "./index.css";

// Array multidimensi yang berisi konten untuk setiap tab
const content = [
  [
    "React sangat populer",
    "React membuat pembuatan UI yang kompleks dan interaktif menjadi sangat mudah",
    "Sangat kuat dan fleksibel",
    "React memiliki ekosistem yang sangat aktif dan serbaguna"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Halaman web resmi (react.dev)",
    "Next.js (kerangka kerja Fullstack)",
    "React Native (membangun aplikasi mobile native dengan React)"
  ]
];

// Komponen App yang merupakan komponen utama dari aplikasi ini
export default function App() {
  // Mendefinisikan state untuk menyimpan indeks konten yang aktif
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  // Mengembalikan JSX yang mendefinisikan struktur UI dari aplikasi
  return (
    <div>
      <header>
        {/* Menampilkan logo React */}
        <img src="logo512.png" alt="React logo" />
        <div>
          {/* Menampilkan judul dan deskripsi */}
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          {/*  Tombol untuk mengganti konten yang aktif. Ketika diklik, fungsi setActiveContentIndex dipanggil dengan indeks yang sesuai */}
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Why React?
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Core Features
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Related Resources
          </button>
        </menu>
        <div id="tab-content">
          {/* Menampilkan konten yang sesuai dengan indeks yang aktif */}
          <ul>
            {content[activeContentIndex].map((item) => (
              // Membuat daftar item untuk setiap item dalam array konten yang aktif
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
