import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CountContext, QuestionContext } from "../Store";
import { fillArrayWith10Questions } from "../function";
import data from "../Apprentice_TandemFor400_Data.json";
import { Button } from "../components/Button";

export const StartButton = ({ message }) => {
  const [, setQuestions] = useContext(QuestionContext);
  const [count, setCount] = useContext(CountContext);
  const history = useHistory();

  useEffect(() => {
    setCount(() => 1);
  }, []);

  const handleOnClick = () => {
    setQuestions(() => {
      return fillArrayWith10Questions(data);
    });
    history.push("/question/" + count);
  };
  return (
    <Button
      text={message || "Play Some Trivia!"}
      handleOnClick={handleOnClick}
    />
  );
};
