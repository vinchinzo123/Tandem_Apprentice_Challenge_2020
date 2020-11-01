import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GameContext } from "../Store";
import { fillArrayWith10Questions } from "../function";
import data from "../Apprentice_TandemFor400_Data.json";
import { Button } from "../components/Button";

export const StartButton = ({ message }) => {
  const [, setGameState] = useContext(GameContext);

  const history = useHistory();

  const handleOnClick = () => {
    setGameState((gameState) => ({
      ...gameState,
      questions: fillArrayWith10Questions(data),
      count: 1,
    }));
    history.push("/question/" + 1);
  };
  return (
    <Button
      text={message || "Play Some Trivia!"}
      handleOnClick={handleOnClick}
    />
  );
};
