// lear
// Word Scramble

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("blurred");

  const switchBtn = document.querySelector(".switch-btn");
  const refreshBtn = document.querySelector(".refresh-btn");
  const checkBtn = document.querySelector(".check-btn");
  const randomLetters = document.querySelector(".random-letters");
  const inputField = document.getElementById("input-field");
  const words = [
    "HELLO",
    "LOWER",
    "GAME",
    "NEIGHBOUR",
    "CLOWN",
    "FUNNY",
    "BOMB",
    "LOCATION",
    "CODE",
    "LUCK",
  ];
  let newWord = "";

  // Switching Background Color
  function ChangeBackground() {
    document.body.classList.toggle("dark-body");
    switchBtn.innerHTML =
      switchBtn.innerHTML == '<i class="fa fa-moon-o"></i>'
        ? '<i class="fa fa-sun-o"></i>'
        : '<i class="fa fa-moon-o"></i>';
  }

  // Refreshing Word
  function RefreshWord() {
    newWord = words[Math.floor(Math.random() * words.length)];
    let randomWord = "";
    let newArray = [];

    while (newArray.length != newWord.length) {
      let index = Math.floor(Math.random() * newWord.length);
      if (!newArray.includes(index)) {
        randomWord += newWord[index];
        newArray.push(index);
      }
    }

    inputField.value = "";
    randomLetters.innerHTML = randomWord;
  }

  // Checking Word
  function CheckWord() {
    if (!inputField.value) {
      alert("You must fill out the input field!");
      return;
    } else if (inputField.value.toLowerCase() == newWord.toLowerCase()) {
      alert("You guessed the word! Congratulations!");
      RefreshWord();
    } else {
      alert("Oops, Wrond Answer!");
    }

    inputField.value = "";
  }

  switchBtn.addEventListener("click", ChangeBackground);
  refreshBtn.addEventListener("click", RefreshWord);
  checkBtn.addEventListener("click", CheckWord);
});
