import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import HomePage from "./components/HomePage/HomePage";
import Menu from "./components/Menu/Menu";
import NoMatchPage from "./components/NoMatchPage/NoMatchPage";
import MoviesListPage from "./components/MoviesListPage/MoviesListPage"
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage"


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/movies" component={MoviesListPage} />
            <Route path="/movie/:id" component={MovieDetailsPage} />

            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
