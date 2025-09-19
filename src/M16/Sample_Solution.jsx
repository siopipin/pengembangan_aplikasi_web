import React, { useState, useEffect } from 'react';

const SampleSolution = () => {
  // SOAL 1: Counter Component
  const [count, setCount] = useState(0);
  
  // SOAL 2: Todo List
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed
  
  // SOAL 3: Form Validation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    major: 'IT',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  
  // SOAL 4: API Integration
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  
  // SOAL 5: Theme Toggle
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Load theme from localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Fetch posts from API
  useEffect(() => {
    fetchPosts();
  }, []);

  // Validate form
  useEffect(() => {
    validateForm();
  }, [formData]);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Nama wajib diisi';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Nama minimal 3 karakter';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email wajib diisi';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password wajib diisi';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter';
    }
    
    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi password tidak sama';
    }
    
    // Terms validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Anda harus menyetujui terms & conditions';
    }
    
    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  // Counter functions
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev > 0 ? prev - 1 : 0);
  const resetCounter = () => setCount(0);

  // Todo functions
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

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const getActiveTodosCount = () => todos.filter(todo => !todo.completed).length;

  // Form functions
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Form submitted successfully!');
      console.log('Form data:', formData);
    }
  };

  // API functions
  const getFilteredPosts = () => {
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getPaginatedPosts = () => {
    const filtered = getFilteredPosts();
    const startIndex = (currentPage - 1) * postsPerPage;
    return filtered.slice(startIndex, startIndex + postsPerPage);
  };

  const totalPages = Math.ceil(getFilteredPosts().length / postsPerPage);

  // Styles
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
    section: {
      marginBottom: '30px',
      padding: '20px',
      backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    title: {
      fontSize: '1.8rem',
      marginBottom: '15px',
      color: isDarkMode ? '#ffffff' : '#333333',
      borderBottom: `2px solid ${isDarkMode ? '#4CAF50' : '#2196F3'}`,
      paddingBottom: '5px'
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontWeight: 'bold',
      margin: '5px'
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
    input: {
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: isDarkMode ? '#3d3d3d' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#333333',
      margin: '5px'
    },
    error: {
      color: '#f44336',
      fontSize: '14px',
      marginTop: '5px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={{textAlign: 'center', marginBottom: '30px'}}>
        Sample Solution - React State Management
      </h1>

      <div style={styles.grid}>
        {/* SOAL 1: Counter Component */}
        <div style={styles.section}>
          <h2 style={styles.title}>1. Counter Component</h2>
          <div style={{textAlign: 'center'}}>
            <h3 style={{fontSize: '3rem', color: isDarkMode ? '#4CAF50' : '#2196F3'}}>
              {count}
            </h3>
            <button 
              style={{...styles.button, ...styles.dangerButton}}
              onClick={decrement}
              disabled={count === 0}
            >
              -
            </button>
            <button 
              style={{...styles.button, ...styles.primaryButton}}
              onClick={increment}
            >
              +
            </button>
            <button 
              style={{...styles.button, ...styles.secondaryButton}}
              onClick={resetCounter}
            >
              Reset
            </button>
          </div>
        </div>

        {/* SOAL 2: Todo List */}
        <div style={styles.section}>
          <h2 style={styles.title}>2. Todo List</h2>
          <div style={{marginBottom: '15px'}}>
            <input
              type="text"
              placeholder="Add new todo..."
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
          
          <div style={{marginBottom: '15px'}}>
            <button 
              onClick={() => setFilter('all')}
              style={{...styles.button, backgroundColor: filter === 'all' ? '#2196F3' : '#e0e0e0'}}
            >
              All ({todos.length})
            </button>
            <button 
              onClick={() => setFilter('active')}
              style={{...styles.button, backgroundColor: filter === 'active' ? '#2196F3' : '#e0e0e0'}}
            >
              Active ({getActiveTodosCount()})
            </button>
            <button 
              onClick={() => setFilter('completed')}
              style={{...styles.button, backgroundColor: filter === 'completed' ? '#2196F3' : '#e0e0e0'}}
            >
              Completed ({todos.filter(t => t.completed).length})
            </button>
          </div>
          
          <div>
            {getFilteredTodos().map(todo => (
              <div key={todo.id} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px',
                marginBottom: '5px',
                backgroundColor: isDarkMode ? '#3d3d3d' : '#f9f9f9',
                borderRadius: '5px',
                border: '1px solid #ddd'
              }}>
                <span 
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    opacity: todo.completed ? '0.6' : '1',
                    cursor: 'pointer'
                  }}
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

        {/* SOAL 3: Form Validation */}
        <div style={styles.section}>
          <h2 style={styles.title}>3. Form Validation</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nama"
                value={formData.name}
                onChange={handleInputChange}
                style={styles.input}
              />
              {errors.name && <div style={styles.error}>{errors.name}</div>}
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
              />
              {errors.email && <div style={styles.error}>{errors.email}</div>}
            </div>
            
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                style={styles.input}
              />
              {errors.password && <div style={styles.error}>{errors.password}</div>}
            </div>
            
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Konfirmasi Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                style={styles.input}
              />
              {errors.confirmPassword && <div style={styles.error}>{errors.confirmPassword}</div>}
            </div>
            
            <div>
              <select
                name="major"
                value={formData.major}
                onChange={handleInputChange}
                style={styles.input}
              >
                <option value="IT">IT</option>
                <option value="Sistem Informasi">Sistem Informasi</option>
                <option value="Teknik Informatika">Teknik Informatika</option>
              </select>
            </div>
            
            <div style={{margin: '10px 0'}}>
              <label>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                />
                Saya setuju dengan terms & conditions
              </label>
              {errors.agreeToTerms && <div style={styles.error}>{errors.agreeToTerms}</div>}
            </div>
            
            <button 
              type="submit"
              disabled={!isFormValid}
              style={{
                ...styles.button,
                ...styles.primaryButton,
                opacity: isFormValid ? 1 : 0.5,
                cursor: isFormValid ? 'pointer' : 'not-allowed'
              }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* SOAL 4: API Integration */}
        <div style={styles.section}>
          <h2 style={styles.title}>4. API Integration</h2>
          <div style={{marginBottom: '15px'}}>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.input}
            />
            <button 
              onClick={fetchPosts}
              style={{...styles.button, ...styles.secondaryButton}}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Refresh'}
            </button>
          </div>
          
          {loading && <div style={{textAlign: 'center', padding: '20px'}}>Loading posts...</div>}
          {error && <div style={{...styles.error, textAlign: 'center', padding: '10px', backgroundColor: '#ffebee'}}>{error}</div>}
          
          <div>
            {getPaginatedPosts().map(post => (
              <div key={post.id} style={{
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: isDarkMode ? '#3d3d3d' : '#f9f9f9',
                borderRadius: '5px',
                border: '1px solid #ddd'
              }}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
          
          <div style={{textAlign: 'center', marginTop: '15px'}}>
            {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  ...styles.button,
                  backgroundColor: currentPage === page ? '#2196F3' : '#e0e0e0',
                  margin: '2px'
                }}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        {/* SOAL 5: Theme Toggle */}
        <div style={styles.section}>
          <h2 style={styles.title}>5. Theme Toggle</h2>
          <div style={{textAlign: 'center'}}>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{
                ...styles.button,
                backgroundColor: isDarkMode ? '#4CAF50' : '#2196F3',
                fontSize: '18px',
                padding: '15px 30px'
              }}
            >
              {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>
            <p style={{marginTop: '10px'}}>
              Current theme: {isDarkMode ? 'Dark' : 'Light'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleSolution;
