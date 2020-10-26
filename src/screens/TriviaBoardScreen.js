import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const TriviaBoardScreen = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  useEffect(() => {
    setQuestionNumber(() => randomlyGeneratedNumber());
  }, []);
  const randomlyGeneratedNumber = () => {
    return Math.floor(Math.random() * 20);
  };

  console.log(questionNumber);
  return <Link to={"/question/" + questionNumber}>GameBoard</Link>;
};
