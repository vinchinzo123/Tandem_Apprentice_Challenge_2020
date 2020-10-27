export const fillArrayWith10Questions = (questionList) => {
  let arr = [];
  while (arr.length < 10) {
    let num = Math.floor(Math.random() * 20);
    if (!arr.includes(questionList[num])) {
      let question = questionList[num];
      question.completed = false;
      question.gotRight = false;
      arr.push(question);
    }
  }
  return arr;
};
