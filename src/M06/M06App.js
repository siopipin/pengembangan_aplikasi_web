import React from "react";
import Header from "./components/Header";
import styles from "./styles/m06.module.css";
import CardBook from "./components/CardBook";
import { books } from "./data/books";

const M06App = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.container}>
          {books.map((book) => {
            return (
              <CardBook
                key={book.id}
                judul={book.judul}
                kategori={book.kategori}
                tersedia={book.stok}
                deskripsi={book.deskripsi}
                gambar={book.gambar}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default M06App;
