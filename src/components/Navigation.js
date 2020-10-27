import React, { useEffect, useState } from "react";
import data from "../Apprentice_TandemFor400_Data.json";
import { Switch, Route } from "react-router-dom";
import {
  TriviaBoardScreen,
  LandingScreen,
  QuestionScreen,
  ErrorScreen,
} from "../screens";

export const Navigation = () => {
  const [randomQuestions, setRandomQuestions] = useState([]);
  useEffect(() => {
    setRandomQuestions(() => fillArrayWith10Element());
  }, []);
  const fillArrayWith10Element = () => {
    let arr = [];
    while (arr.length < 10) {
      let num = Math.floor(Math.random() * 20);
      if (!arr.includes(num)) {
        arr.push(num);
      }
    }
    return arr;
  };

  return (
    <Switch>
      <Route
        path="/trivia-board"
        render={(props) => (
          <TriviaBoardScreen randomQuestions={randomQuestions} {...props} />
        )}
      />
      <Route path="/question/:id" component={QuestionScreen} />
      <Route exact path="/" component={LandingScreen} />
      <Route path="*" component={ErrorScreen} />
    </Switch>
  );
};
