import React from "react";
import { Link } from "react-router-dom";

export const StartButton = () => {
  return (
    <Link data-testid="StartButton" to="/trivia-board">
      <button>Play Some Trivia!</button>
    </Link>
  );
};
