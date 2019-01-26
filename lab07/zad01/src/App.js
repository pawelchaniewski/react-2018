import React, { Component } from "react";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <AboutPage />
        <ContactPage />
      </div>
    );
  }
}

export default App;
