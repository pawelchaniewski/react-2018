import React from "react";
import PropTypes from "prop-types";

const Product = ({ image, amount, name, manufacture }) => (
  <div className="product">
    <img src={image} alt={`${manufacture} ${name}`} />
    <p className="price">${amount}</p>
    <h3>{name}</h3>
  </div>
);

Product.propTypes = {
  image: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  manufacture: PropTypes.string.isRequired
};

export default Product;
