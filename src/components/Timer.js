import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(() => {
    try {
      if (localStorage.getItem("time") !== null) {
        return Number.parseInt(JSON.parse(localStorage.getItem("time")), 10);
      } else {
        return 30;
      }
    } catch {
      return 30;
    }
  });

  useEffect(() => {
    const startTimer = () => {
      setTime((time) => {
        if (time > 0) {
          localStorage.setItem("time", time - 1);
          return time - 1;
        }
        return 0;
      });
    };
    let tID = setInterval(() => startTimer(), 1000);
    return () => {
      localStorage.removeItem("time");
      clearInterval(tID);
    };
    // eslint-disable-next-line
  }, []);

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
