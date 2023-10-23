import React from "react";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <h1 className={styles.title}>Perpustakaan XYZ</h1>
      </div>
    </header>
  );
};

export default Header;
