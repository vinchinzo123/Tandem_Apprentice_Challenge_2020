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

export const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
