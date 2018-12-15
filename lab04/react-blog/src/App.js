import React, { Component } from "react";
import "./App.css";
import NavBar from "./HeaderComponent/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
      </div>
    );
  }
}

export default App;
