//mengimpor modul yang diperlukan dari react
import React from "react";

//mendefenisikan component ContactCard sebagai komponen berbasis fungsi
const ContactCard = (props) => {
  //**menggunakan props untuk menerima data yang dikirimkan dari luar */
  return (
    <div className="contact">
      <h3>{props.nama}</h3>
      <h4>{props.nomor_hp}</h4>
    </div>
  );
};

//mengekspor komponen, agar dapat di panggil ditempat lain
export default ContactCard;
