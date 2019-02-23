import React from "react";
import PropTypes from "prop-types";

import Product from "../Product/Product";

const ProductList = ({ productList }) => (
  <div className="products">
    {productList.map(product => (
      <Product key={product.id} {...product} />
    ))}
  </div>
);

Product.propTypes = {
  productList: PropTypes.array
};

export default ProductList;
