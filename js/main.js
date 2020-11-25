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

function playerPlay() {
    return window.prompt('Write Rock, Paper or Scissors.').toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You win! Rock beats Scissors.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return 'You lose! Scissors beats Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You win! Scissors beats Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return 'You lose! Rock beats Scissors.';
    } else {
        return 'Hm... something is not right.';
    }
}

function game() {
    console.clear();

    for (let i = 0; i < 5; i++) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();

        console.log(`Round#${i + 1}: ${playRound(playerSelection, computerSelection)}`);
        console.log(`Player: ${playerScore}.\nComputer: ${computerScore}.`);
    }

    if (playerScore > computerScore) {
        alert('Player wins!');
        console.log('Player wins!');
    } else if (playerScore < computerScore) {
        alert('Computer wins!');
        console.log('Computer wins!');
    } else {
        alert('Tie.');
        console.log('Tie.');
    }
}

game();