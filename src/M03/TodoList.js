// Mengimpor modul yang diperlukan dari React
import React from "react";

// Mendefinisikan komponen TodoList sebagai komponen berbasis fungsi
const TodoList = (props) => {
  const toggleCompletion = (index) => {
    const newTodos = [...props.todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    props.setTodos(newTodos);
  };

  // Render komponen
  return (
    <ul>
      {/* Menggunakan metode map untuk mengiterasi melalui array todos dari props 
           dan mengembalikan elemen li untuk setiap todo */}
      {props.todos.map((todo, index) => (
        <li
          key={index}
          style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
        >
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleCompletion(index)}
          />
          {todo.text}
          <button onClick={() => props.removeTodo(index)}> Hapus </button>
        </li>
      ))}
    </ul>
  );
};

// Mengekspor komponen TodoList agar dapat digunakan di tempat lain
export default TodoList;
