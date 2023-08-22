let playerScore = 0;
let computerScore = 0;
const results = [
              // Rock  , Paper , Scissors
/* Rock */      ["tie", "lose", "win"],
/* Paper */     ["win", "tie", "lose"],
/* Scissors */  ["lose", "win", "tie"],
];

function playRound(playerMove) {
  const computerMove = Math.floor(Math.random() * 3);

  if (playerScore >= 5 || computerScore >= 5) return;

  const result = results[playerMove][computerMove];
  if (result === "win") playerScore++;
  else if (result === "lose") computerScore++;

  updateScore();
  updateMoves(playerMove, computerMove);
}

function updateScore() {
  const score = document.querySelector("#score strong");
  const result = document.querySelector("#result p");
  score.textContent = `${playerScore} - ${computerScore}`;

  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) result.textContent = "Player wins!";
    else result.textContent = "Computer wins";
    showReloadButton();
  }
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

const images = document.querySelectorAll("#game img");
images.forEach(image => {
  image.ondragstart = () => false;
});

const buttons = document.querySelectorAll("#game > button");
buttons.forEach((button, key) =>
  button.addEventListener("click", () => playRound(key))
);
