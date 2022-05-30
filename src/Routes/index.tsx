import { Routes as Switch, Route } from "react-router-dom";

import { Login, Home } from "@Pages";
import { PrivateRoute } from "./PrivateRoute";
import { Product } from "@Pages/Product";

function Routes() {
  return (
    <Switch>
      <Route
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
        path="/"
      />

      <Route
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
        path="/product"
      />

      <Route
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
        path="/product/:id"
      />

      <Route element={<Login />} path="/login" />
    </Switch>
  );
}

export default Routes;
