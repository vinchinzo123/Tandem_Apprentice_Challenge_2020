import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  LandingScreen,
  QuestionScreen,
  ErrorScreen,
  ResultsScreen,
} from "../screens";

export const Navigation = () => {
  return (
    <Switch>
      <Route path="/question/:id" component={QuestionScreen} />
      <Route path="/results" component={ResultsScreen} />
      <Route exact path="/" component={LandingScreen} />
      <Route path="*" component={ErrorScreen} />
    </Switch>
  );
};
