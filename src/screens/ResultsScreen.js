import React from "react";
import { StartButton } from "../components/StartButton";

export const ResultsScreen = () => {
  return (
    <div>
      These are your results!
      <div>Thank you for playing!</div>
      <StartButton message={"Play Again?"} />
    </div>
  );
};
