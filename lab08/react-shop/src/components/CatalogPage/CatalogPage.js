import React from "react";
import Product from "../Product/Product";
import Filter from "../Filter/Filter";

const CatalogPage = () => (
  <div className="container">
    <h1 className="header-big">Catalog</h1>

    <div className="catalog">
      <div className="column-left">
        <Filter />
      </div>
    </div>

    <div className="column-right">
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
    </div>
  </div>
);

export default CatalogPage;
