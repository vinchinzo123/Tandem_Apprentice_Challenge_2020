import React, { useContext, useEffect } from "react";
import { QuestionContext, CountContext } from "../Store";
import { useHistory, useParams } from "react-router-dom";

export const QuestionScreen = () => {
  let { id } = useParams();
  const [questions] = useContext(QuestionContext);
  const [count, setCount] = useContext(CountContext);
  const history = useHistory();

  const question = questions[count - 1].question;
  const answers = questions[count - 1].incorrect.concat(
    questions[count - 1].correct
  );

  useEffect(() => {
    setCount(id * 1);
  }, []);

  const handleOnClick = () => {
    if (count < questions.length) {
      setCount((count) => count + 1);
      history.push("/question/" + (count + 1));
    } else {
      history.push("/results");
    }
  };

  return (
    <div>
      Question {count}
      <div>{question}</div>
      {answers.map((answer, i) => (
        <div>
          <button onClick={handleOnClick}>
            {i}. {answer}
          </button>
        </div>
      ))}
    </div>
  );
};
