import React, { useState } from 'react';

function Counter() {
  // useState untuk menyimpan nilai counter
  const [count, setCount] = useState(0);

  // Fungsi untuk menambah counter
  const increment = () => {
    setCount(count + 1);
  };

  // Fungsi untuk mengurangi counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Fungsi untuk reset counter
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>Tambah (+)</button>
      <button onClick={decrement}>Kurang (-)</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

