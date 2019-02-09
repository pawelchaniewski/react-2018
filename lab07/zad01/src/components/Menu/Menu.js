import React from "react";
import { NavLink } from "react-router-dom";

const activeNavStyle = {
  color: "red"
}

const Menu = () => (
  <div>
    Menu:
    <ul>
      <li>
        <NavLink exact to="/" activeStyle={activeNavStyle}>Home</NavLink>
      </li>
      <li>
        <NavLink exact to="/about" activeStyle={activeNavStyle}>About</NavLink>
      </li>
      <li>
        <NavLink exact to="/contact" activeStyle={activeNavStyle}>Contact</NavLink>
      </li>
      <li>
        <NavLink exact to="/movies" activeStyle={activeNavStyle}>Movies</NavLink>
      </li>
    </ul>
  </div>
);

export default Menu;