import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Shop from "./components/Shop/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Food from "./components/Food/Food";
import Cart from "./components/Cart/Cart";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  return (
    <UserContext.Provider value={[user, setUser, cart, setCart]}>
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
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
