import React, { useState, createContext, useEffect } from "react";

export const QuestionContext = createContext({});
export const CountContext = createContext(1);

const Store = ({ children }) => {
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("questions")) || {}
  );

  const [count, setCount] = useState(1);

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  return (
    <QuestionContext.Provider value={[questions, setQuestions]}>
      <CountContext.Provider value={[count, setCount]}>
        {children}
      </CountContext.Provider>
    </QuestionContext.Provider>
  );
};

export default Store;
