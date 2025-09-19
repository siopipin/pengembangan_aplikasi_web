import React, { useState } from 'react';

const SimpleTodoApp = () => {

  const [todos, setTodos] = useState([
    'Belajar React JS',
    'Membuat aplikasi todo',
    'Mempelajari state management'
  ]);
  
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Styles
  const styles = {
    container: {
      maxWidth: '500px',
      margin: '50px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    title: {
      color: '#333',
      fontSize: '2rem',
      marginBottom: '30px',
      fontWeight: 'bold'
    },
    inputContainer: {
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px'
    },
    input: {
      padding: '10px 15px',
      fontSize: '16px',
      border: '2px solid #ddd',
      borderRadius: '5px',
      width: '300px',
      outline: 'none'
    },
    addButton: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold'
    },
    todoList: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    todoItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px',
      marginBottom: '10px',
      backgroundColor: 'white',
      borderRadius: '5px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e9ecef'
    },
    todoText: {
      flex: '1',
      textAlign: 'left',
      fontSize: '16px',
      color: '#333'
    },
    deleteButton: {
      padding: '8px 12px',
      fontSize: '14px',
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      marginLeft: '10px'
    },
    emptyMessage: {
      color: '#666',
      fontSize: '16px',
      fontStyle: 'italic',
      marginTop: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📝 Simple Todo App</h1>
      
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Masukkan todo baru..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={handleKeyPress}
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>
          Tambah
        </button>
      </div>

      <ul style={styles.todoList}>
        {todos.length === 0 ? (
          <li style={styles.emptyMessage}>Belum ada todo. Silakan tambahkan todo baru!</li>
        ) : (
          todos.map((todo, index) => (
            <li key={index} style={styles.todoItem}>
              <span style={styles.todoText}>{todo}</span>
              <button 
                onClick={() => deleteTodo(index)}
                style={styles.deleteButton}
              >
                Hapus
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SimpleTodoApp;
