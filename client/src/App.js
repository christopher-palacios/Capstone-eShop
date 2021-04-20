import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import Shop from "./components/Shop/Shop";
import WhatsNew from "./components/WhatsNew/WhatsNew";
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
        <Route path="/shop/new" exact component={Shop} />
        <Route path="/shop/sale" exact component={Shop} />
        <Route path="/shop/categories" exact component={Shop} />
        {/* <ProtectedRoute exact path="/" component={} /> */}
      </Switch>
    </Router>
  );
}

export default App;
