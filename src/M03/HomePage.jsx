import React from "react";
import { useState } from "react";

const HomePage = () => {
  const [angka, gantiAngka] = useState(0);

  const tambah = () => {
    gantiAngka(angka + 1);
  };

  console.log(angka);

  const tugas1 = () => {
    alert("Tugas Final Project");
  };

  const tugas2 = () => {
    alert(
      "Masing-masing buat 1 halaman yang terdiri min. 4 yang memiliki propsnya masing-masing tapi dilengkapi style css"
    );
  };

  return (
    <div>
      <p>{angka}</p>

      <UangJajan uang={20000} />

      <Mahasiswa1 apapunLahItu={tugas1} />

      <Mahasiswa1 apapunLahItu={tugas2} />
    </div>
  );
};

const UangJajan = ({ uang }) => {
  return (
    <>
      <p>{uang}</p>
    </>
  );
};

const Mahasiswa1 = ({ apapunLahItu }) => {
  return (
    <>
      <button onClick={apapunLahItu}>Apapun Saya Kerjakan</button>
    </>
  );
};

export default HomePage;
