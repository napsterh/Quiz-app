const quizData = [
  {
    question: "¿Cuál es el lenguaje de programación más utilizado en 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "¿Quién es el presidente de los Estados Unidos?",
    a: "Florin Pop",
    b: "Joe Biden",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "¿Qué significa HTML?",
    a: "Lenguaje de marcas de hipertexto",
    b: "Hoja de estilo en cascada",
    c: "Notación de objetos JSON",
    d: "Terminales de helicópteros, barcos y Lamborghinis",
    correct: "a",
  },
  {
    question: "¿En qué año se lanzó JavaScript?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "ninguna de las anteriores",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

const deselectAnswer = () => {
  answerEls.forEach((answerEl) =>{
    answerEl.checked = false;
  })
}

const loadQuiz = () => {
  const currentQuizData = quizData[currentQuiz]

  questionEl.innerHTML = currentQuizData.question
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;

  deselectAnswer()
}

loadQuiz()

const getSelected = () => {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });

  return answer
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected()

  if(answer){
    if(answer === quizData[currentQuiz].correct ){
      score++;
    }

    currentQuiz++;
    if(currentQuiz < quizData.length){
      loadQuiz()
    }else{
      quiz.innerHTML = `
        <h2>Tus respuestas correctas son ${score}/${quizData.length} preguntas.</h2>    
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
})
