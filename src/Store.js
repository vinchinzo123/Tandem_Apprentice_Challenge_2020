import React, { useState, createContext, useEffect } from "react";

export const QuestionContext = createContext({});
export const CountContext = createContext(1);
export const TimeContext = createContext(10);
export const TimerIDContext = createContext(undefined);

const Store = ({ children }) => {
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem("questions")) || {}
  );

  const [count, setCount] = useState(1);

  const [time, setTime] = useState(10);
  const [timerID, setTimerID] = useState(undefined);

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  return (
    <QuestionContext.Provider value={[questions, setQuestions]}>
      <CountContext.Provider value={[count, setCount]}>
        <TimerIDContext.Provider value={[timerID, setTimerID]}>
          <TimeContext.Provider value={[time, setTime]}>
            {children}
          </TimeContext.Provider>
        </TimerIDContext.Provider>
      </CountContext.Provider>
    </QuestionContext.Provider>
  );
};

export default Store;
