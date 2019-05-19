import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Login from "Login";
import Register from "Register";
import Secret from "Secret";
import Navbar from "Navbar";
import ForgotPassword from "Forgot-Password";
import NotFound from "Notfound";
import ChangePassword from 'Change-Password';

const App = () => {
  return (
    <div>
      <Route component={Navbar} />

      <Switch>
        <Redirect exact from="/" to="/register" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/secret" component={Secret} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset/:token" component={ChangePassword} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
