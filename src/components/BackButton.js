import React from "react";
import { useHistory, Link } from "react-router-dom";

const BackButton = () => {
  const history = useHistory();
  return (
    <Link to="/">
      <button onClick={() => history.goBack()}>BACK</button>
    </Link>
  );
};

export default BackButton;
