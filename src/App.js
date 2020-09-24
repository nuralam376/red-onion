import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Food from "./components/Food/Food";

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Switch>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route exact path="/food/:id">
          <Food />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
