const questions = [
  {
    question: "When do children go to school?",
    answers: ["7yo", "4yo", "10yo"],
    correct: '7yo',
  },

  {
    question: "When is NY in Russia?",
    answers: ["30 Dec", "31 Dec", "1 Jen"],
    correct: 2,
  },
];

let questionIndex = 0;
let correctAnswers = 0;
let falseAnswers = 0;
const quiz = document.querySelector(".quiz-container")

function showQuestion() {

  const questionData = questions[questionIndex];
  const questionElement = document.createElement('div');
  questionElement.innerHTML =
    `<div>${questionData.question}</div>`;

  let answerNumber = 0;
  questionData.answers.forEach(answer => {
    const answerElement = document.createElement('div'); 
    answerElement.innerHTML =
      `<input class="radio-btn" type="radio" value="${questionData.answers[answerNumber++]}" name="${questionData.answers}"> ${answer}`
    // if(answerElement.value === questions[questionIndex]['correct']) {
 
    // }
    questionElement.appendChild(answerElement)
  });

  //     function clearQuestion() {
  // questionElement.innerHTML = '';
  //     }
  quiz.appendChild(questionElement)
}

const inputError = document.createElement('div')
document.body.append(inputError)

const button = document.createElement('div')
button.innerHTML = `
<div class="container-btn">
<button class="button">next</button>
</div>
`
document.body.append(button)
const radioChecked = document.querySelector('input[type="radio"]:checked')

button.addEventListener('click', () => {

  const radioChecked = document.querySelector('input[type="radio"]:checked')
  console.log(radioChecked)

  if (!radioChecked) {
    inputError.innerHTML = `
<div class="input-error">
<span class="input-error_text">choose the variant</span>
</div>
` } else {
    return inputError.innerText = ""
  };

})


function showResults() {
  const result = document.createElement('div')
  result.innerHTML =
    `
  <div class="result-answers">
  <div class="correct-answers">correct answers:${correctAnswers}</div>
  <div class="false-answers">false answers:${falseAnswers}</div>
  </div>
  `

  document.body.appendChild(result)
}

showQuestion()
showResults()