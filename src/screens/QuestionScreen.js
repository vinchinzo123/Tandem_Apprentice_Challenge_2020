import React, { useContext, useEffect, useState } from "react";
import { QuestionContext, CountContext } from "../Store";
import { useHistory, useParams } from "react-router-dom";
import { shuffle } from "../function";
import { Button } from "../components/Button";
import { Timer } from "../components/Timer";

export const QuestionScreen = () => {
  const [questions, setQuestions] = useContext(QuestionContext);
  const [count, setCount] = useContext(CountContext);
  const [visible, setVisibility] = useState(false);
  const [timesUp, setTimesUp] = useState(false);
  const [correct, setCorrectness] = useState(false);
  let { id } = useParams();
  const history = useHistory();

  const question = questions[count - 1].question;
  const answers = shuffle(
    questions[count - 1].incorrect.concat(questions[count - 1].correct)
  );

  useEffect(() => {
    setCount(id * 1);
    if (!timesUp && !visible) {
      const timeout = setTimeout(() => {
        setTimesUp((timesUp) => {
          setVisibility(() => true);
          return !timesUp;
        });
      }, 30000);

      return () => clearTimeout(timeout);
    }
  });

  const handleOnClick = (e) => {
    let selectedAnswer = e.target.name;
    if (selectedAnswer === questions[count - 1].correct) {
      setCorrectness(() => true);
      setQuestions((questions) =>
        questions.map((question) =>
          question.correct === selectedAnswer
            ? { ...question, gotRight: true }
            : { ...question }
        )
      );
    }
    setVisibility((visible) => !visible);
  };

  const nextQuestionClick = () => {
    setVisibility((visible) => !visible);
    setTimesUp(() => false);
    setCorrectness(() => false);
    if (count < questions.length) {
      setCount((count) => count + 1);
      history.push("/question/" + (count + 1));
    } else {
      history.push("/results");
    }
  };

  return (
    <div className="questions">
      {!visible && (
        <div className="flex flex-col">
          <div className="text-center tracking-wide font-bold text-gray-700 mb-3">
            <div className="findme" onChange={(e) => console.log(e)}>
              <Timer />
            </div>
            Question {count}
          </div>
          <div className="text-center">{question}</div>
          <div className="flex py-4 px-6 flex-wrap justify-center ">
            {answers.map((answer, i) => (
              <Button
                key={answer}
                handleOnClick={handleOnClick}
                text={answer}
              />
            ))}
          </div>
        </div>
      )}
      {visible && correct && (
        <div className=" flex flex-col pt-4 space-y-1  ">
          <div className=" text-green-700 text-2xl font-semibold text-center">
            Great!!!
          </div>
          <div className=" text-gray-700 text-center">
            <strong className=" text-green-700 font-bold text-center">
              {questions[count - 1].correct}{" "}
            </strong>
            is the correct answer!
          </div>
          <div className="flex justify-center">
            <Button
              handleOnClick={nextQuestionClick}
              text={count === 10 ? "View Results" : "Next question"}
            />
          </div>
        </div>
      )}{" "}
      {visible && !correct && (
        <div className="flex flex-col pt-4 space-y-1">
          <div className="text-red-700 text-2xl font-semibold  text-center">
            {timesUp ? "Times up!" : "Wrong!"}
          </div>
          <div className="text-gray-700 text-center">
            The correct answer is{" "}
            <strong className="text-red-700 text-center font-bold">
              {questions[count - 1].correct}
            </strong>
          </div>
          <div className="flex justify-center">
            <Button
              handleOnClick={nextQuestionClick}
              text={count === 10 ? "View Results" : "Next question"}
            />
          </div>
        </div>
      )}
    </div>
  );
};
