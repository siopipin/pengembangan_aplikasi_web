import React from "react";
import "./ProductNavigation.css";

const ProductNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#products">All Products</a>
        </li>
        <li>
          <a href="#">Computers</a>
        </li>
        <li>
          <a href="#">Laptops</a>
        </li>
        <li>
          <a href="#">Smartphones</a>
        </li>
      </ul>
    </nav>
  );
};

export default ProductNavigation;
