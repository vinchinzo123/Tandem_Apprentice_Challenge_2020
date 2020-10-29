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
          : score > 9
          ? "Just one away!"
          : score > 8
          ? "Keep it up almost there!"
          : score > 5
          ? "Better luck next time!"
          : score > 3
          ? "Study harder.."
          : score > 1
          ? "Were you even trying..."
          : `Don't quit your dayjob...`}
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
