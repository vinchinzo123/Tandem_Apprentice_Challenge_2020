import React, { useEffect, useContext, useState } from "react";
import { TimerIDContext } from "../Store";

export const Timer = ({ setVisibility }) => {
  const [time, setTime] = useState(30);
  const [timerID, setTimerID] = useContext(TimerIDContext);
  useEffect(() => {
    setTimerID(() => setInterval(() => startTimer(), 1010));
    return () => clearInterval(timerID);
    // eslint-disable-next-line
  }, []);

  const startTimer = async () => {
    setTime((time) => time - 1);
  };
  if (time === -1) {
    clearInterval(timerID);
    setVisibility(() => true);
  }
  return (
    <div>
      {time < 6 ? (
        <div className=" text-red-600">{time}</div>
      ) : (
        <div className="transition">{time}</div>
      )}
    </div>
  );
};
