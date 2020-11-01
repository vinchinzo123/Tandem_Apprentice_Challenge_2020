import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../Store";
import { useHistory, useParams } from "react-router-dom";
import { shuffle } from "../function";
import { Button } from "../components/Button";
import { Timer } from "../components/Timer";

export const QuestionScreen = () => {
  //
  const [{ questions, count }, setGameState] = useContext(GameContext);
  const currentQuestion = questions[count - 1];
  const shuffledAnswers = shuffle(
    currentQuestion.incorrect.concat(currentQuestion.correct)
  );

  const [visible, setVisibility] = useState(false);
  const [timesUp, setTimesUp] = useState(false);
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id > questions.length) {
      history.push("/");
    } else if (questions[Number.parseInt(id) - 1].completed === true) {
      if (count + 1 > questions.length) {
        history.push("/results");
      } else {
        history.push("/question/" + (Number.parseInt(id) + 1));
      }
      setGameState((gameState) => ({
        ...gameState,
        count: Number.parseInt(id) + 1,
      }));
      setVisibility(() => false);
      setTimesUp(() => false);
    }
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
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
    if (selectedAnswer === currentQuestion.correct) {
      setGameState((gameState) => ({
        ...gameState,
        questions: gameState.questions.map((question) =>
          question.correct === selectedAnswer
            ? { ...question, gotRight: true }
            : { ...question }
        ),
      }));
    }
    setGameState((gameState) => ({
      ...gameState,
      questions: gameState.questions.map((question, i) =>
        count - 1 === i ? { ...question, completed: true } : { ...question }
      ),
    }));
    setVisibility((visible) => !visible);
  };

  const nextQuestionClick = () => {
    setVisibility((visible) => !visible);
    setTimesUp(() => false);
    if (count < questions.length) {
      setGameState((gameState) => ({
        ...gameState,
        count: gameState.count + 1,
      }));
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
            <Timer />
            Question {count}
          </div>
          <div className="text-center">{currentQuestion.question}</div>
          <div className="flex py-4 px-6 flex-wrap justify-center ">
            {shuffledAnswers.map((answer) => (
              <Button
                key={answer}
                handleOnClick={handleOnClick}
                text={answer}
              />
            ))}
          </div>
        </div>
      )}
      {visible && currentQuestion.gotRight && (
        <div className=" flex flex-col pt-4 space-y-1  ">
          <div className=" text-green-700 text-2xl font-semibold text-center">
            Great!!!
          </div>
          <div className=" text-gray-700 text-center">
            <strong className=" text-green-700 font-bold text-center">
              {currentQuestion.correct}{" "}
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
      {visible && !currentQuestion.gotRight && (
        <div className="flex flex-col pt-4 space-y-1">
          <div className="text-red-700 text-2xl font-semibold  text-center">
            {timesUp ? "Times up!" : "Wrong!"}
          </div>
          <div className="text-gray-700 text-center">
            The correct answer is{" "}
            <strong className="text-red-700 text-center font-bold">
              {currentQuestion.correct}
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
