import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from "@components/Login";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/login" component={Login} />
          <Route render={() => <h2 className="">Page is not found</h2>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
