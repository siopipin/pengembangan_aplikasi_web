import React, { useEffect, useEffectEvent, useState } from "react";

function Counter() {
  // useState untuk menyimpan nilai counter
  const [count, setCount] = useState(0);
  const [harga, setHarga] = useState(10000)

  useEffect(() => {
    console.log('runnn', count);
    setHarga(20000 * count)
  }, [count])
  
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
      <h2>Harga: {harga}</h2>
      <button onClick={increment}>Tambah (+)</button>
      <button onClick={decrement}>Kurang (-)</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
