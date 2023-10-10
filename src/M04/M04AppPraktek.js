import React, { useEffect, useState } from "react";

function M04AppPraktek() {
  //tambah state apapun
  const [nama, setNama] = useState("Raffa");
  const [kelas, setKelas] = useState("TI-Pagi");
  const [angkah, setAngkah] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [dataArr, setDataArr] = useState([])

  //2 state untuk handle input
  const [dataBaru, setDataBaru] = useState();
  const [initInput, setInput] = useState()

  //fungsi untuk setNama;
  function aturNama() {
    if (nama === "Raffa") {
      setNama("Fauzan");
    } else {
      setNama("Raffa");
    }
  }

  //funsi tambah angkah
  function tambahAngkah() {
    setAngkah(angkah + 1);
  }

  function aturNama2() {
    console.log("setNama");
    setLoading(true);
    setNama("Budi");
  }
  function handleChange(e) {
    setDataBaru(e.target.value)
  }
  function tambahKeArr() {
    const arrBaru = dataBaru;
    setDataArr([...dataArr, arrBaru])
  }

  useEffect(() =>{
    console.log("use effect");
    setNama("Irfan");
    setAngkah(10);
    setDataArr([2,4,6,8])
  }, [nama])


  return (
    <div>
      <ul>
        <li>{nama}</li>
        <li>{kelas}</li>
        <li>{angkah}</li>
        <button onClick={aturNama}>Ganti Nama</button>
        <button onClick={tambahAngkah}>Tambah Angkah</button>
      </ul>

        <p>List Nomor</p>
        <input type="text" value={initInput} onChange={handleChange}/>
        <button onClick={tambahKeArr}>Tambah ke Arr</button>
        <ul>
            {dataArr.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
  );
}

export default M04AppPraktek;
