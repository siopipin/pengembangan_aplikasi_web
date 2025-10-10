import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect dengan dependency [isRunning, seconds]
  // Effect ini akan dijalankan setiap kali isRunning atau seconds berubah
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      // Membuat interval yang menambah seconds setiap 1 detik
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    // Cleanup function: dijalankan saat component unmount atau sebelum effect dijalankan lagi
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]); // Dependency array: effect hanya dijalankan jika isRunning berubah

  // useEffect yang hanya dijalankan sekali saat component mount
  useEffect(() => {
    console.log('Timer component telah di-mount');
    
    // Cleanup: dijalankan saat component unmount
    return () => {
      console.log('Timer component akan di-unmount');
    };
  }, []); // Array kosong = hanya dijalankan sekali saat mount

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h3>Timer: {seconds} detik</h3>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <p><small>Status: {isRunning ? 'Berjalan' : 'Berhenti'}</small></p>
    </div>
  );
}

export default Timer;

