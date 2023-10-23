import React from "react";
import styles from "../styles/card-book.module.css";
import { limitDescription, limitTitle } from "../utils/text";

const CardBook = (props) => {
  return (
    <div className={styles.cardBook}>
      <div className={styles.imgContainer}>
        <img className={styles.imgBook} alt="Buku" src={props.gambar} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{limitTitle(props.judul)}</h2>
        <h3 className={styles.category}>{props.kategori}</h3>
        <h4 className={styles.stock}>tersedia : {props.tersedia}</h4>
        <p className={styles.description}>
          {limitDescription(props.deskripsi)}
        </p>
      </div>
    </div>
  );
};

export default CardBook;
