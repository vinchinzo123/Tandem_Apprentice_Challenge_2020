import React from "react";
import { StartButton } from "../components/StartButton";

export const LandingScreen = () => {
  return (
    <div className="flex flex-col justify-center space-y-6 items-center h-32">
      <div>Do you have what it takes to get a perfect score?</div>
      <StartButton />
    </div>
  );
};
