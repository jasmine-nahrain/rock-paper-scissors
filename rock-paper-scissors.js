let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compterScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_div = document.getElementById("reset");


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter == 'r') {
    return "Rock";
  }
  if(letter == 'p') {
    return "Paper";
  }
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compterScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats  ${convertToWord(computerChoice)}${smallCompWord} You Win!`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}


function loses(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  compterScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats  ${convertToWord(userChoice)}${smallUserWord} You Lose.`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);

}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = `${convertToWord(computerChoice)} equals  ${convertToWord(userChoice)}. You Tie.`;
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('grey-glow'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      loses(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;

  }
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  compterScore_span.innerHTML = computerScore;
  result_p.innerHTML = `Welcome back to Rock-Paper-Scissors`;
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
  reset_div.addEventListener('click', () => resetGame());
}

main();
