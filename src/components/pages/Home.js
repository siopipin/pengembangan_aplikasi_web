import React from "react";
import Header from "../organisms/Header";
import ProductsSection from "../organisms/ProductsSection";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <ProductsSection />
      </main>
    </>
  );
};

export default Home;
