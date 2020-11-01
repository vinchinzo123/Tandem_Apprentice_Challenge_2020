import React, { useContext } from "react";
import { GameContext } from "../Store";
import { Link } from "react-router-dom";

export const TriviaBoardScreen = () => {
  const [{ questions }] = useContext(GameContext);

  return (
    <div>
      {questions.map((question, i) => {
        return (
          <div>
            <Link to={"/question/" + i}>{question.question}</Link>
          </div>
        );
      })}
    </div>
  );
};
