import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import Timer from './Timer';
import DataFetcher from './DataFetcher';

function M04aApp() {
  return (
    <div>
      <h1>Contoh Penggunaan useState dan useEffect</h1>
      
      <hr />
      
      {/* Contoh 1: useState sederhana */}
      <section>
        <h2>1. Contoh useState - Input Text</h2>
        <InputExample />
      </section>
      
      <hr />
      
      {/* Contoh 2: useState dengan counter */}
      <section>
        <h2>2. Contoh useState - Counter</h2>
        <Counter />
      </section>
      
      <hr />
      
      {/* Contoh 3: useEffect tanpa dependency */}
      <section>
        <h2>3. Contoh useEffect - Timer</h2>
        <Timer />
      </section>
      
      <hr />
      
      {/* Contoh 4: useEffect dengan dependency */}
      <section>
        <h2>4. Contoh useEffect - Data Fetcher</h2>
        <DataFetcher />
      </section>
    </div>
  );
}

// Contoh 1: useState untuk input
function InputExample() {
  // useState mengembalikan array dengan 2 elemen:
  // 1. nilai state saat ini
  // 2. fungsi untuk mengubah state
  const [nama, setNama] = useState('');
  const [umur, setUmur] = useState('');

  return (
    <div>
      <div>
        <label>Nama: </label>
        <input 
          type="text" 
          value={nama} 
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      
      <div>
        <label>Umur: </label>
        <input 
          type="number" 
          value={umur} 
          onChange={(e) => setUmur(e.target.value)}
        />
      </div>
      
      <div>
        <h3>Output:</h3>
        <p>Nama: {nama}</p>
        <p>Umur: {umur}</p>
      </div>
    </div>
  );
}

export default M04aApp;

