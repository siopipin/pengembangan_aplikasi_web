//mengimpor modul dan file yang diperlukan
import React, { useEffect, useState } from "react";
import "./M04Style.css";
import dataContacts from "./data_contacts";
import ContactCard from "./ContactCard";

//mendefenisikan komponen M04 sebagai komponen berbasis fungsi
const M04App = () => {
  //menggunakan hook useState untuk mendefenisikan state
  const [contacts, setContacts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [filterType, setFilterType] = useState("nama");

  //memanggil useEffect hook agar di jalankan sekali untuk mendapatkan data contact
  useEffect(() => {
    /**melakukan pengecekan untuk mendapatkan data contacts pertama kali
     * kalau mounted true, proses ini akan di skip
     */
    if (!isMounted) {
      setContacts([...dataContacts]);
      setIsMounted(true);
      return;
    }

    /**melakukan filter terhadap data contact, dimana fungsi ini akan dijalankan
     * setiap kali nilai state keyword atau filterType berganti
     * di berikan jeda 1000 ms atau 1 detik
     */
    const filterContacts = setTimeout(() => {
      /**memasukkan nilai dari contact yang sudah di filter menggunakan methode filter
       * dimana method filter akan mengembalikan contact berdasarkan tipe filter yang dipilih
       */
      setContacts([
        ...dataContacts.filter((contact) => {
          // filter berdasarkan nama atau nomor hp sesuai pilihan radio button
          if (filterType === "nama") {
            return contact.nama.toLowerCase().includes(keyword.toLowerCase());
          } else {
            return contact.nomor_hp.includes(keyword);
          }
        }),
      ]);
    }, 1000);
    /**ketika inputan di ketik kurang dari 1 detik maka clean up akan dijalankan
     * sehingga kita tidak mengambil data setiap kali user mengetik
     * tetapi setiap user berhenti mengetik selama 1 detik
     */
    return () => {
      clearTimeout(filterContacts);
    };
    
  }, [keyword, filterType]);

  //fungsi untuk mengubah nilai keyword menjadi apa yang di masukkan
  const searchHandler = (e) => {
    setKeyword(e.target.value);
  };

  //fungsi untuk mengubah tipe filter yang dipilih (nama atau nomor hp)
  const filterTypeHandler = (e) => {
    setFilterType(e.target.value);
  };

  //render component
  return (
    <div className="container">
      <div className="header">
        <h1>XYZ Ponsel.</h1>
        {/**input akan memberikan nilai pada state keyword */}
        <input type="text" placeholder="cari..." onChange={searchHandler} />
      </div>
      {/**radio buttons untuk memilih tipe filter */}
      <div className="filter-options">
        <label>
          <input
            type="radio"
            value="nama"
            checked={filterType === "nama"}
            onChange={filterTypeHandler}
          />
          Filter by Nama
        </label>
        <label>
          <input
            type="radio"
            value="nomor_hp"
            checked={filterType === "nomor_hp"}
            onChange={filterTypeHandler}
          />
          Filter by Nomor HP
        </label>
      </div>
      <h2 className="title">Contact List</h2>
      <div className="contact-list">
        {/**melakukan mapping untuk tiap data contact
         * tiap tiap contact akan dikirimkanke dalam komponen ContactCard melalui props
         dan map akan mengembalikan Component ContactCard untuk setiap contact */}
        {contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.id}
              nama={contact.nama}
              nomor_hp={contact.nomor_hp}
            />
          );
        })}
      </div>
    </div>
  );
};

//mengekspor komponen M04App agar bisa di panggil di tempat lain
export default M04App;
