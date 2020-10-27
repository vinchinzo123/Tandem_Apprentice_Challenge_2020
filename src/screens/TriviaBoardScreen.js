import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../Apprentice_TandemFor400_Data.json";

export const TriviaBoardScreen = ({ randomQuestions }) => {
  return (
    <div>
      {randomQuestions.map((num, i) => {
        return (
          <div>
            <Link to={"/question/" + num}>{data[num].question}</Link>
          </div>
        );
      })}
    </div>
  );
};
