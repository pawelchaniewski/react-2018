import React from "react";
import ProductList from "../ProductList/ProductList";
import ProductsService from "../../services/products.service";

const HomePage = () => (
  <div className="container">
    <h1 className="header-big">Welcome to our store</h1>

    <h2 className="header-small">Desktops</h2>
    <div className="products">
      <ProductList
        productList={ProductsService.getFeaturedProducts("desktop")}
      />
    </div>

    <h2 className="header-small">Tablets</h2>
    <div className="products">
      <ProductList
        productList={ProductsService.getFeaturedProducts("tablet")}
      />
    </div>
  </div>
);

export default HomePage;
