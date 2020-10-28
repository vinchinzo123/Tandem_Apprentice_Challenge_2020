import React from "react";
import { StartButton } from "../components/StartButton";
import { useContext } from "react";
import { QuestionContext } from "../Store";

export const ResultsScreen = () => {
  const [questions] = useContext(QuestionContext);
  const score = questions.filter((question) => question.gotRight == true)
    .length;
  return (
    <div className="flex flex-col pt-6 space-y-2">
      <div className="text-center">
        {score === 10
          ? "Perfect score!"
          : score > 7
          ? "Keep it up almost there"
          : "Better Luck Next time"}
      </div>
      <div className="text-center">
        {score} out of {questions.length} questions correct
      </div>
      <div className="flex justify-center">
        <StartButton message={"Play Again?"} />
      </div>
    </div>
  );
};
