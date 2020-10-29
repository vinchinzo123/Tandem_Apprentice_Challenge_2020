import React, { useEffect, useContext, useState } from "react";
import { TimeContext, TimerIDContext } from "../Store";

export const Timer = ({ setVisibility }) => {
  const [time, setTime] = useState(30);
  const [color, setColor] = useState("black");
  const [timerID, setTimerID] = useContext(TimerIDContext);
  useEffect(() => {
    setTimerID(() => setInterval(() => startTimer(), 1010));
    // return () => clearInterval(timerID);
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
