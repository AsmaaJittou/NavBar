import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Article from "./Article";
import Home from "./Home";
import About from "./About";
import NavBar from "./navBar";
import Page from "./ArticlePage";
import Data from "./Data";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Route path="/" component={Home} exact />
        <Route
          path="/article"
          render={props => <Article data={Data} />}
          exact
        />
        <Route path="/About" component={About} />
        <Route path="/article/page" component={Page} />
      </Router>
    );
  }
}
