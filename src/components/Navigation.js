import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  TriviaBoardScreen,
  LandingScreen,
  QuestionScreen,
  ErrorScreen,
} from "../screens";

export const Navigation = () => {
  return (
    <Switch>
      <Route path="/trivia-board" component={TriviaBoardScreen} />
      <Route path="/question/:id" component={QuestionScreen} />
      <Route exact path="/" component={LandingScreen} />
      <Route path="*" component={ErrorScreen} />
    </Switch>
  );
};
