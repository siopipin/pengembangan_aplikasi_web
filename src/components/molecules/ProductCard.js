import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.cover ?? "not-available.jpeg"} alt="product" />
      <h4 className="title">{props.title}</h4>
      <h5 className="category">{props.category}</h5>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default ProductCard;
