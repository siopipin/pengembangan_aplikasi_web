// Mengimpor modul yang diperlukan dari React dan komponen lainnya
import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import "./M03Style.css"

// Mendefinisikan komponen M03App sebagai komponen berbasis fungsi
const M03App = () => {
  // Menggunakan hook useState untuk mendefinisikan state `todos` dan fungsi `setTodos` untuk mengubah state tersebut
  const [todos, setTodos] = useState(["Mengikut zoom meeting pekerti"]);

  // Fungsi untuk menambahkan todo baru ke dalam daftar
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Fungsi untuk menghapus todo berdasarkan indeksnya
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Render komponen
  return (
    <div className="M03App">
      <h1>To-Do List</h1>

      {/* Komponen input untuk menambahkan todo baru. 
           Fungsi `addTodo` diteruskan sebagai props agar dapat dipanggil dari dalam komponen TodoInput */}
      <TodoInput addTodo={addTodo} />

      {/* Komponen untuk menampilkan daftar todo.
           Daftar `todos` dan fungsi `removeTodo` diteruskan sebagai props agar dapat digunakan dalam komponen TodoList */}
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

// Mengekspor komponen M03App agar dapat digunakan di tempat lain
export default M03App;
