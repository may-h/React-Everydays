import React from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import Main from "./Main";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/main">
            <Main />
          </Route>
        ) : (
          <>
            <Route exact path="/">
              <LoginForm />
            </Route>
            <Route exact path="/main">
              <Main />
            </Route>
            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
