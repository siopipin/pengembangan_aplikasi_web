// Mengimpor modul yang diperlukan dari React
import React from "react";

// Mendefinisikan komponen TodoList sebagai komponen berbasis fungsi
const TodoList = (props) => {
  // Render komponen
  return (
    <ul>
      {/* Menggunakan metode map untuk mengiterasi melalui array todos dari props 
           dan mengembalikan elemen li untuk setiap todo */}
      {props.todos.map((todo, index) => (
        <li key={index}>
          {/* Menampilkan teks todo */}
          {todo}

          {/* Tombol untuk menghapus todo. Ketika diklik, 
               akan memanggil fungsi removeTodo dari props dengan indeks todo sebagai argumen */}
          <button onClick={() => props.removeTodo(index)}> Hapus </button>
        </li>
      ))}
    </ul>
  );
};

// Mengekspor komponen TodoList agar dapat digunakan di tempat lain
export default TodoList;
