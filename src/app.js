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

  return result;
}

const generateButton = document.getElementById("generateButton");
const excuse = document.getElementById("excuse");
generateButton.addEventListener("click", function() {
  excuse.textContent = generateExcuse();
  const reloadButton = document.getElementById("reloadButton");
  reloadButton.classList.remove("hidden");
});

const reloadButton = document.getElementById("reloadButton");
reloadButton.addEventListener("click", function() {
  location.reload();
});

