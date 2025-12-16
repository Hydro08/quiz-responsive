const choices_id = ["choice-a", "choice-b", "choice-c", "choice-d"];
const frames_id = [
  "choices-first-frame",
  "choices-second-frame",
  "choices-third-frame",
  "choices-fourth-frame",
];

const choices = choices_id.map((id) => document.getElementById(id));
const frames = frames_id.map((id) => document.getElementById(id));
const number_question = document.getElementById("question-number");

let ansOne = null;

frames.forEach((frame, index) => {
  frame.addEventListener("click", () => {
    frames.forEach((f) => (f.style.background = "none"));
    choices.forEach((c) => (c.style.color = "black"));

    frame.style.background = "teal";
    choices[index].style.color = "white";

    localStorage.setItem(
      "q1",
      JSON.stringify({
        question: 1,
        answer: choices[index].innerText,
      })
    );

    ansOne = JSON.parse(localStorage.getItem("q1"));
    console.log(`${ansOne.question}. ${ansOne.answer}`);
  });
});

function tstBtn() {
  ansOne = JSON.parse(localStorage.getItem("q1"));
  console.log(`${ansOne.question}. ${ansOne.answer}`);
}

fetch("quiz.json")
  .then((response) => response.json())
  .then((quiz) => {
    number_question.innerText = quiz.question_one;
    choices[0].innerText = quiz.alpha;
    choices[1].innerText = quiz.beta;
    choices[2].innerText = quiz.charlie;
    choices[3].innerText = quiz.dance;
  })
  .catch((error) => console.log("error"));
