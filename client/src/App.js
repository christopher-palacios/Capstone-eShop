import "./App.scss";
import React from "react";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
// import Login from "./components/Login/Login";
import OnSale from "./components/OnSale/OnSale";
import itemList from "./components/itemList/itemList";
import Catgegories from "./components/Categories/Catgegories";
// import AppContext from "./components/AppContext/AppContext";
// import WhatsNew from "./components/WhatsNew/WhatsNew";
// import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppProvider } from "./components/AppContext/AppContext";

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/login" exact component={Login} /> */}
          <Route path="/signup" exact component={SignUp} />
          <Route path="/" exact component={Home} />
          <Route path="/categories" exact component={Catgegories} />
          <Route path="/categories/:id" exact component={itemList} />
          <Route path="/product/:id" exact component={OnSale} />
          {/* <ProtectedRoute exact path="/" component={} /> */}
          <Route path="/cart" exact />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
