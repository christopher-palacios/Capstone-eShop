import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const token = sessionStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !token ? <Redirect to="/signup" /> : <Component {...routeProps} />
      }
    />
  );
}

export default ProtectedRoute;
