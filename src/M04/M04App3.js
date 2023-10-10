import React, { useEffect, useState } from "react";
import "./M04Style.css";
const M04App3 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setData(data.products);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    console.log("M04App3: useEffect");
    if(isLoading) {
        fetchData();
    }
  }, [isLoading]);

  return (
    <div>
      <h1>M04App3</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}
      <button onClick={fetchData}>Refresh Data</button>
    </div>
  );
};

export default M04App3;
