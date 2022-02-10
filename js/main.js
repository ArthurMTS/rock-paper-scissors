let playerScore = 0;
let computerScore = 0;
const results = [
  ["Tie", "You lose", "You win"],
  ["You win", "Tie", "You lose"],
  ["You lose", "You win", "Tie"],
];

function computerPlay() {
  return (Math.floor(Math.random() * 3));
}

function updateScore() {
  const score = document.querySelector("#score strong");
  score.textContent = `${playerScore} - ${computerScore}`;

  if (playerScore >= 5 || computerScore >= 5)
    showReloadButton();
}

function updateMoves(playerMove, computerMove) {
  const moves = ["Rock", "Paper", "Scissors"];
  const playerMoves = document.querySelector("div#player ul");
  const computerMoves = document.querySelector("div#computer ul");
    
  const playerPlay = document.createElement("li");
  playerPlay.textContent = moves[playerMove];
  const computerPlay = document.createElement("li");
  computerPlay.textContent = moves[computerMove];

  playerMoves.appendChild(playerPlay);
  computerMoves.appendChild(computerPlay);
}

function showReloadButton() {
  const result = document.querySelector("#result");
    
  const button = document.createElement("button");
  button.textContent = "Play again";
  button.addEventListener("click", () => location.reload());

  result.appendChild(button);
}

function playRound(playerMove) {
  const computerMove = computerPlay();

  if (playerScore >= 5 || computerScore >= 5) return;

  if (results[playerMove][computerMove] === "You win")
    playerScore++;
  else if (results[playerMove][computerMove] === "You lose")
    computerScore++;

  updateScore();
  updateMoves(playerMove, computerMove);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button, key) => 
  button.addEventListener("click", () => playRound(key))
);