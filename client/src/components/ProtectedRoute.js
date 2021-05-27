import React from "react";
import swal from "sweetalert";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const token = sessionStorage.getItem("token");

  return (
    <>
      <Route
        {...rest}
        render={(routeProps) =>
          !token ? (
            (swal("Please log in"), (<Redirect to="/" />))
          ) : (
            <Component {...routeProps} />
          )
        }
      />
    </>
  );
}

export default ProtectedRoute;
//  <Redirect to="/" />
