import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar">
    <div className="container">
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
