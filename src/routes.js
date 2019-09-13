import React from "react";
import Dashboard from "./Components/Dashboard";
import Wizard from "./Components/Wizard";
import { Switch, Route } from "react-router-dom";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/wizard/step/:id" component={Wizard} />
  </Switch>
);
