import React from "react";
import img404 from "../../page_404.png";

const NoMatchPage = () => (
  <div className="container">
    <h1 className="header-big">404 Not Found!</h1>
    <p>
      <img src={img404} alt="Page not found" />
    </p>
  </div>
);

export default NoMatchPage;
