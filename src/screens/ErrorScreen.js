import React from "react";
import { Link } from "react-router-dom";

export const ErrorScreen = () => {
  return (
    <div>
      404
      <p>
        Return back home <Link to="/">HERE</Link>
      </p>
    </div>
  );
};
