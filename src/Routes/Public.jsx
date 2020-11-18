import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import asyncComponent from "../Utils/AsyncFunc";

const AuthenticatedRoute = ({ component: Component, isLogged, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLogged ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const PublicRoutes = () => (
  <Router>
    <div style={{ height: "100%" }}>
      <Switch>
        <Route
          exact
          path="/"
          component={asyncComponent(() =>
            import(/* webpackChunkName: "login" */ "../Pages/Dashboard")
          )}
        />
        <Route
          path="*"
          component={asyncComponent(() =>
            import(/* webpackChunkName: "not-found" */ "./Erro/404")
          )}
        />
      </Switch>
    </div>
  </Router>
);

export default PublicRoutes;
