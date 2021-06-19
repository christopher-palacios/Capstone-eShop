import "./App.scss";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Catgegories from "./pages/Categories/Catgegories";
import itemList from "./pages/itemList/itemList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextProvider } from "./AppContext/AppContext";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories" exact component={Catgegories} />
          <Route path="/categories/:id" exact component={itemList} />
          <Route path="/product/:id" exact component={ProductDetail} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route exact path="/cart" component={ShoppingCart} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
