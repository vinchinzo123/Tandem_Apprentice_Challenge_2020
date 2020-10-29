import React, { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(30);

  useEffect(() => {
    const startTimer = () => {
      setTime((time) => {
        if (time > 0) {
          return time - 1;
        }
      });
    };
    let tID = setInterval(() => startTimer(), 1000);
    return () => clearInterval(tID);
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
