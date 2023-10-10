import React, { useState, useEffect } from "react";
import "./M04Style.css";
const M04App2 = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log("M04App2 useEffect");
    if (!isMounted) {
      console.log("M04App2 useEffect: fetching data");
      setData([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
      setIsMounted(true);
    }
  }, [isMounted]);

  const buttonHandler = () => {
    const newItem = inputValue.trim();
    if(newItem){
        setData([...data, newItem]);
        setInputValue("")
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" placeholder="Masukkan Angkah" value={inputValue} onChange={handleInput} />
      <button onClick={buttonHandler}>Tambah Angkah</button>
    </div>
  );
};

export default M04App2;
