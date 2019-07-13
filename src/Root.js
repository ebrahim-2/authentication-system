import React, { lazy, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "Navbar";
import { Loader } from "semantic-ui-react";

const Login = lazy(() => import("Login"));
const Register = lazy(() => import("Register"));
const Secret = lazy(() => import("Secret"));
const ForgotPassword = lazy(() => import("Forgot-Password"));
const NotFound = lazy(() => import("Notfound"));
const ChangePassword = lazy(() => import("Change-Password"));

const App = () => {
  return (
    <div>
      <Route component={Navbar} />

      <Suspense
        fallback={
          <Loader
            active={true}
            inline="centered"
            size="large"
            style={{ marginTop: 200 }}
          />
        }
      >
        <Switch>
          <Redirect exact from="/" to="/register" />
          <Redirect exact from="/authentication-system" to="/register" />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/secret" component={Secret} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/reset/:token" component={ChangePassword} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
