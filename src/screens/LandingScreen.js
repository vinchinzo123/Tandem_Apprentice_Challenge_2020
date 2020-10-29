import React from "react";
import { StartButton } from "../components/StartButton";

export const LandingScreen = () => {
  return (
    <div className="flex flex-col justify-center space-y-2 items-center md:h-32 pt-5">
      <div className="text-center">
        Do you have what it takes to get a perfect score?
      </div>
      <div className="text-center">You have 30 seconds per question!</div>
      <div className="text-center">Good Luck!</div>
      <StartButton />
    </div>
  );
};
