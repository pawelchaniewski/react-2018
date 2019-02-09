import React from "react";
import Product from "../Product/Product";

const HomePage = () => (
  <div className="container">
    <h1 className="header-big">Welcome to our store</h1>

    <h2 className="header-small">Desktops</h2>
    <div className="products">
      <Product
        imgUrl="https://i.imgur.com/s7zey8T.jpg"
        imgAlt="Apple iMac 27 Retina"
        price="2099.99"
        title="iMac 27 Retina"
      />
      <Product
        imgUrl="https://i.imgur.com/s7zey8T.jpg"
        imgAlt="Apple iMac 27 Retina"
        price="2099.99"
        title="iMac 27 Retina"
      />
      <Product
        imgUrl="https://i.imgur.com/s7zey8T.jpg"
        imgAlt="Apple iMac 27 Retina"
        price="2099.99"
        title="iMac 27 Retina"
      />
    </div>

    <h2 className="header-small">Tablets</h2>
    <div className="products">
      <Product
        imgUrl="https://i.imgur.com/uROXKvy.jpg"
        imgAlt="Xiamomi Mi Pad 2"
        price="2099.99"
        title="Mi Pad 2"
      />
      <Product
        imgUrl="https://i.imgur.com/uROXKvy.jpg"
        imgAlt="Xiamomi Mi Pad 2"
        price="2099.99"
        title="Mi Pad 2"
      />
      <Product
        imgUrl="https://i.imgur.com/uROXKvy.jpg"
        imgAlt="Xiamomi Mi Pad 2"
        price="2099.99"
        title="Mi Pad 2"
      />
      <Product
        imgUrl="https://i.imgur.com/uROXKvy.jpg"
        imgAlt="Xiamomi Mi Pad 2"
        price="2099.99"
        title="Mi Pad 2"
      />
    </div>
  </div>
);

export default HomePage;
