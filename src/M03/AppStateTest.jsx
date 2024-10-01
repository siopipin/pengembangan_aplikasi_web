import { useState } from "react";

export default function AppStateTest() {
  const [title, setTitle] = useState("Hallo TI-A Sore");
  const gantiNama = () => {
    setTitle("TI-A Pagi");
  };

  return (
    <>
      <JudulHalaman title={title} />
      <Tombol fungsiGantiNama={gantiNama}></Tombol>
    </>
  );
}

function Tombol({ fungsiGantiNama }) {
  return (
    <>
      <button onClick={fungsiGantiNama}>Ganti Kelas</button>
    </>
  );
}

function JudulHalaman({ title }) {
  return (
    <>
      <p>{title}</p>
      <SubJudulHalaman titleKe2={title} />
    </>
  );
}

function SubJudulHalaman({ titleKe2 }) {
  return (
    <>
      <h6>{titleKe2}</h6>
    </>
  );
}
