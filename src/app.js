/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
function generateExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];
  let answer = [];
  answer = [
    who[Math.floor(Math.random() * who.length)],
    action[Math.floor(Math.random() * action.length)],
    what[Math.floor(Math.random() * what.length)],
    when[Math.floor(Math.random() * when.length)],
  ];
  let result = answer.join(" ");
  const excuseElement = document.getElementById("excuse");
  const generateButton = document.getElementById("generateButton");
  const reloadButton = document.getElementById("reloadButton");
  // generateButton.addEventListener("click", function() {
  reloadButton.classList.remove("hidden");

  // });
  excuseElement.textContent = result;
}
