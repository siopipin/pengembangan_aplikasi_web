import React, { useState, useEffect } from "react";
import "./M04Style.css";
const M04App1 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Andi");

  useEffect(()=> {
    console.log("M04App1 useEffect");
    document.title = `count: ${count}`

    return () => {
        console.log("Effect cleanup");
        document.title = "M04App1"
    }
  }, [count])

  const addHandler = () => {
    if(name === 'Andi') {
        setName("Budi");
    } else {
        setName("Andi");
    }
    setCount(count + 1);
  }
  return (
    <div>

      <h1>M04App1</h1>
      <ul>
        <li>
          {count}
          {name}
          <button onClick={addHandler}>Tambah</button>
        </li>
      </ul>
    </div>
  );
};

export default M04App1;
