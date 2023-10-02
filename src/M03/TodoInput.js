// Mengimpor modul yang diperlukan dari React
import React, { useState } from "react";

// Mendefinisikan komponen TodoInput sebagai komponen berbasis fungsi
const TodoInput = (props) => {
  // Menggunakan hook useState untuk mendefinisikan state `inputValue` dan fungsi `setInputValue` untuk mengubah state tersebut
  const [inputValue, setInputValue] = useState("");

  // Fungsi yang akan dipanggil ketika form disubmit
  const handleSubmit = (e) => {
    // Mencegah perilaku default dari form (misalnya refresh halaman)
    e.preventDefault();

    // Memastikan bahwa inputValue tidak kosong atau hanya berisi spasi
    if (inputValue.trim()) {
      // Memanggil fungsi addTodo dari props dengan nilai inputValue sebagai argumen
      props.addTodo(inputValue);

      // Mengatur ulang inputValue menjadi string kosong setelah todo ditambahkan
      setInputValue("");
    }
  };

  // Render komponen
  return (
    <form onSubmit={handleSubmit}>
      {/* Input field untuk menambahkan todo baru. 
           Nilai dari input diatur oleh state `inputValue` dan setiap perubahan pada input akan mengubah state tersebut */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Tambahkan Todo..."
      />

      {/* Tombol untuk menambahkan todo */}
      <button type="submit">Tambahkan</button>
    </form>
  );
};

// Mengekspor komponen TodoInput agar dapat digunakan di tempat lain
export default TodoInput;
