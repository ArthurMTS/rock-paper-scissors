const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', e => playRound(e.target.textContent)));

let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = '';

function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function updateScore() {
    const score = document.querySelector('#score strong');

    score.textContent = `${playerScore} - ${computerScore}`;

    if (playerScore > 4 || computerScore > 4) {
        reloadButton();
    }
}

function updateMoves(playerSelection, computerSelection) {
    const player = document.querySelector('div#player ul');
    const computer = document.querySelector('div#computer ul');
    
    const playerMove = document.createElement('li');
    playerMove.textContent = playerSelection;
    const computerMove = document.createElement('li');
    computerMove.textContent = computerSelection;

    player.appendChild(playerMove);
    computer.appendChild(computerMove);
}

function updateInfo(resultText) {
    const result = document.querySelector('#result p');
    result.textContent = resultText;
}

function reloadButton() {
    const result = document.querySelector('#result');
    
    const button = document.createElement('button');
    button.textContent = 'Play again';
    button.addEventListener('click', () => location.reload());

    result.appendChild(button);
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();

    if (playerScore > 4 || computerScore > 4) return;

    if (playerSelection === computerSelection) {
        updateInfo('Tie');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        updateInfo('You win! Rock beats Scissors.')
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        updateInfo('You lose! Paper beats Rock.');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        updateInfo('You win! Paper beats Rock.');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        updateInfo('You lose! Scissors beats Paper.');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        updateInfo('You win! Scissors beats Paper.');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        updateInfo('You lose! Rock beats Scissors.');
    } else {
        updateInfo('Hm... something is not right.');
    }

    updateScore();
    updateMoves(playerSelection, computerSelection);
}