import React from "react";
import { useLocation, Link } from "react-router-dom";
import data from "../Apprentice_TandemFor400_Data.json";

export const QuestionScreen = () => {
  const questionsNumber = useLocation().pathname.split("/")[2];
  const question = data[questionsNumber].question;
  return (
    <div>
      Question number {questionsNumber}
      <div>Question : {question}</div>
      {data[questionsNumber].incorrect.map((answer, i) => (
        <div>
          <Link>
            {i + 1}. {answer}
          </Link>
        </div>
      ))}
      <div>
        <Link>4. {data[questionsNumber].correct}</Link>
      </div>
    </div>
  );
};
