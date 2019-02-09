import React from "react";

const Product = ({ imgUrl, imgAlt, price, title }) => (
  <div className="product">
    <img src={imgUrl} alt={imgAlt} />
    <p className="price">${price}</p>
    <h3>{title}</h3>
  </div>
);

export default Product;
