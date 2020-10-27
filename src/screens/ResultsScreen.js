import React from "react";
import { StartButton } from "../components/StartButton";
import { useContext } from "react";
import { QuestionContext } from "../Store";

export const ResultsScreen = () => {
  const [questions] = useContext(QuestionContext);
  const score = questions.filter((question) => question.gotRight == true)
    .length;
  return (
    <div>
      {score === 10 ? (
        <div>Perfect score!</div>
      ) : score > 7 ? (
        <div>Keep it up almost there</div>
      ) : (
        <div>Better Luck Next time</div>
      )}
      <div>
        {score} out of {questions.length}{" "}
      </div>

      <StartButton message={"Play Again?"} />
    </div>
  );
};
