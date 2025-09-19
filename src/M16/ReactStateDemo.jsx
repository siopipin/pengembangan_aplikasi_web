import React, { useState, useEffect } from 'react';

const ReactStateDemo = () => {
  // State untuk counter
  const [count, setCount] = useState(0);
  
  // State untuk form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    department: 'IT'
  });
  
  // State untuk todo list
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  
  // State untuk toggle
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // State untuk API data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect untuk fetch data
  useEffect(() => {
    fetchUsers();
  }, []);

  // useEffect untuk document title
  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data.slice(0, 5)); // Ambil 5 user saja
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted: ${JSON.stringify(formData, null, 2)}`);
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: newTodo,
        completed: false
      }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const resetCounter = () => {
    setCount(0);
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5',
      color: isDarkMode ? '#ffffff' : '#333333',
      minHeight: '100vh',
      transition: 'all 0.3s ease'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      padding: '20px',
      backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '10px',
      color: isDarkMode ? '#ffffff' : '#333333'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: isDarkMode ? '#cccccc' : '#666666'
    },
    section: {
      marginBottom: '30px',
      padding: '20px',
      backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      marginBottom: '15px',
      color: isDarkMode ? '#ffffff' : '#333333',
      borderBottom: `2px solid ${isDarkMode ? '#4CAF50' : '#2196F3'}`,
      paddingBottom: '5px'
    },
    counterContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '15px'
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontWeight: 'bold'
    },
    primaryButton: {
      backgroundColor: '#2196F3',
      color: 'white'
    },
    secondaryButton: {
      backgroundColor: '#4CAF50',
      color: 'white'
    },
    dangerButton: {
      backgroundColor: '#f44336',
      color: 'white'
    },
    counter: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: isDarkMode ? '#4CAF50' : '#2196F3',
      minWidth: '60px',
      textAlign: 'center'
    },
    form: {
      display: 'grid',
      gap: '15px',
      maxWidth: '400px'
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: isDarkMode ? '#3d3d3d' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#333333'
    },
    select: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: isDarkMode ? '#3d3d3d' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#333333'
    },
    todoContainer: {
      marginTop: '15px'
    },
    todoInput: {
      display: 'flex',
      gap: '10px',
      marginBottom: '15px'
    },
    todoItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      marginBottom: '5px',
      backgroundColor: isDarkMode ? '#3d3d3d' : '#f9f9f9',
      borderRadius: '5px',
      border: '1px solid #ddd'
    },
    todoText: {
      flex: '1',
      textDecoration: 'line-through',
      opacity: '0.6'
    },
    todoTextActive: {
      flex: '1'
    },
    toggleContainer: {
      display: 'flex',
      gap: '10px',
      marginBottom: '15px'
    },
    toggleButton: {
      padding: '8px 16px',
      fontSize: '14px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: isDarkMode ? '#555' : '#e0e0e0',
      color: isDarkMode ? '#ffffff' : '#333333'
    },
    userList: {
      display: 'grid',
      gap: '10px'
    },
    userCard: {
      padding: '15px',
      backgroundColor: isDarkMode ? '#3d3d3d' : '#f9f9f9',
      borderRadius: '5px',
      border: '1px solid #ddd'
    },
    loading: {
      textAlign: 'center',
      padding: '20px',
      color: isDarkMode ? '#cccccc' : '#666666'
    },
    error: {
      textAlign: 'center',
      padding: '20px',
      color: '#f44336',
      backgroundColor: isDarkMode ? '#3d2d2d' : '#ffebee',
      borderRadius: '5px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>React State Management Demo</h1>
        <p style={styles.subtitle}>Demonstrasi penggunaan useState dan useEffect dalam React</p>
      </div>

      <div style={styles.grid}>
        {/* Counter Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Counter dengan State</h2>
          <div style={styles.counterContainer}>
            <button 
              style={{...styles.button, ...styles.dangerButton}}
              onClick={() => setCount(prev => prev - 1)}
            >
              -
            </button>
            <span style={styles.counter}>{count}</span>
            <button 
              style={{...styles.button, ...styles.primaryButton}}
              onClick={() => setCount(prev => prev + 1)}
            >
              +
            </button>
          </div>
          <button 
            style={{...styles.button, ...styles.secondaryButton}}
            onClick={resetCounter}
          >
            Reset Counter
          </button>
        </div>

        {/* Form Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>2. Form dengan State</h2>
          <form style={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nama"
              value={formData.name}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              style={styles.input}
            />
            <input
              type="number"
              name="age"
              placeholder="Umur"
              value={formData.age}
              onChange={handleInputChange}
              style={styles.input}
            />
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              style={styles.select}
            >
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
            <button 
              type="submit"
              style={{...styles.button, ...styles.primaryButton}}
            >
              Submit Form
            </button>
          </form>
        </div>

        {/* Todo List Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>3. Todo List dengan State</h2>
          <div style={styles.todoInput}>
            <input
              type="text"
              placeholder="Tambah todo baru..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              style={{...styles.input, flex: '1'}}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button 
              onClick={addTodo}
              style={{...styles.button, ...styles.secondaryButton}}
            >
              Add
            </button>
          </div>
          <div style={styles.todoContainer}>
            {todos.map(todo => (
              <div key={todo.id} style={styles.todoItem}>
                <span 
                  style={todo.completed ? styles.todoText : styles.todoTextActive}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.text}
                </span>
                <button 
                  onClick={() => deleteTodo(todo.id)}
                  style={{...styles.button, ...styles.dangerButton, padding: '5px 10px', fontSize: '12px'}}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>4. Toggle State</h2>
          <div style={styles.toggleContainer}>
            <button 
              onClick={() => setIsVisible(!isVisible)}
              style={styles.toggleButton}
            >
              {isVisible ? 'Hide' : 'Show'} Content
            </button>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={styles.toggleButton}
            >
              {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
          {isVisible && (
            <div style={{padding: '15px', backgroundColor: isDarkMode ? '#3d3d3d' : '#f9f9f9', borderRadius: '5px'}}>
              <p>Ini adalah konten yang bisa disembunyikan/ditampilkan menggunakan state!</p>
            </div>
          )}
        </div>

        {/* API Data Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>5. Fetch Data dengan useEffect</h2>
          <button 
            onClick={fetchUsers}
            style={{...styles.button, ...styles.primaryButton, marginBottom: '15px'}}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Fetch Users'}
          </button>
          
          {loading && <div style={styles.loading}>Loading users...</div>}
          {error && <div style={styles.error}>{error}</div>}
          
          <div style={styles.userList}>
            {users.map(user => (
              <div key={user.id} style={styles.userCard}>
                <h4>{user.name}</h4>
                <p>Email: {user.email}</p>
                <p>Company: {user.company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactStateDemo;
