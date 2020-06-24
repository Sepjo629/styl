import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="homebg">
          <div className="layer"></div>
        </div>
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/styl" component={Home} />
                <Route exact path="/clothing" component={Clothing} />
                <Route exact path="/brands" component={Brands} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Clothing() {
  return <p>Discover our selected clothings</p>;
}

function Brands() {
  return <p>Our brands</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

export default App;
