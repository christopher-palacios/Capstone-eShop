import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import itemList from "./components/itemList/itemList";
import OnSale from "./components/OnSale/OnSale";
import Catgegories from "./components/Categories/Catgegories";
// import WhatsNew from "./components/WhatsNew/WhatsNew";
// import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={Home} />
        <Route path="/categories" exact component={Catgegories} />
        <Route path="/categories/:id" exact component={itemList} />
        <Route path="/product/:id" exact component={OnSale} />
        {/* <ProtectedRoute exact path="/" component={} /> */}
      </Switch>
    </Router>
  );
}

export default App;
