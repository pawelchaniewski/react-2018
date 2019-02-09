import React from "react";
import styled from "styled-components"

import "./HomePage.css"
import styles from "./HomePage.module.css"

const Hello = styled.p`
color: red;
`;

const helloStyle = {
  color: "red"
}

const HomePage = () => (
  <div>
    <h3>Home Page</h3>
    <p style={helloStyle}>Hello world!</p>
    <p className="red">Hello world!</p>
    <p className={styles.red}>Hello world!</p>

    <Hello>Hello world!</Hello>
  </div>
);

export default HomePage;
