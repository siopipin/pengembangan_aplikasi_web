import { useEffect, useState } from "react";

const M041Widget = () => {
  const [skor, setSkor] = useState(0);
  const [durasi, setDurasi] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // useEffect
  useEffect(() => {
    if (!isMounted) {
      setSkor(0);
      setDurasi(0);
      setIsMounted(true);
      return;
    }

    doSetDurasi();
  }, [skor]);

  const doSetDurasi = () => {
    if (skor === 2) {
      setDurasi(durasi + 9);
    } else {
      setDurasi(durasi + 90);
    }
  };

  const doCetakGol = () => {
    setSkor(skor + 1);
  };

  return (
    <>
      <h1>Widget M04.1</h1>
      <p>Skor: {skor}</p>
      <p>Durasi: {durasi}</p>

      <button onClick={doCetakGol}>Cetak gol</button>
    </>
  );
};

export default M041Widget;
