import React, { useContext, useEffect, useState } from "react";
import { QuestionContext, CountContext } from "../Store";
import { useHistory, useParams } from "react-router-dom";

export const QuestionScreen = () => {
  let { id } = useParams();
  const [questions, setQuestions] = useContext(QuestionContext);
  const [count, setCount] = useContext(CountContext);
  const [visible, setVisibility] = useState(false);
  const [correct, setCorrectness] = useState(false);
  const history = useHistory();

  const question = questions[count - 1].question;
  const answers = questions[count - 1].incorrect.concat(
    questions[count - 1].correct
  );

  useEffect(() => {
    setCount(id * 1);
  }, []);

  const handleOnClick = (e) => {
    let selectedAnswer = e.target.name;
    if (selectedAnswer == questions[count - 1].correct) {
      setCorrectness(() => true);
      setQuestions((questions) =>
        questions.map((question) =>
          question.correct === selectedAnswer
            ? { ...question, gotRight: true }
            : { ...question }
        )
      );
    }
    setVisibility((visible) => !visible);
  };

  const nextQuestionClick = () => {
    setVisibility((visible) => !visible);
    setCorrectness(() => false);
    if (count < questions.length) {
      setCount((count) => count + 1);
      history.push("/question/" + (count + 1));
    } else {
      history.push("/results");
    }
  };

  return (
    <div>
      {!visible && (
        <div>
          Question {count}
          <div>{question}</div>
          {answers.map((answer, i) => (
            <div key={answer}>
              <button name={answer} onClick={handleOnClick}>
                {i + 1}. {answer}
              </button>
            </div>
          ))}
        </div>
      )}
      {visible && correct && (
        <div className="wrongAnswer">
          <div style={{ color: "green" }}>Great!!</div>
          <div style={{ color: "green" }}>
            <strong style={{ color: "green" }}>
              {questions[count - 1].correct}{" "}
            </strong>
            is the correct answer!
          </div>
          <button onClick={nextQuestionClick}>Next question</button>
        </div>
      )}{" "}
      {visible && !correct && (
        <div className="wrongAnswer">
          <div>Wrong!</div>
          <div>
            Correct answer is{" "}
            <strong style={{ color: "green" }}>
              {questions[count - 1].correct}
            </strong>
          </div>
          <button onClick={nextQuestionClick}>Next question</button>
        </div>
      )}
    </div>
  );
};
