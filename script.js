function getComputerChoice() {
    let weapon = Math.floor(Math.random() * 3);
    return weapon;
}

function startGame(playerSelection = prompt("Rock, Paper or Scissors?"), computerSelection = getComputerChoice()) {
    switch (playerSelection.toLowerCase()) {
        case "rock":
            playerSelection = 0;
            break;
        case "paper":
            playerSelection = 1;
            break;
        case "scissors":
            playerSelection = 2;
            break;
        default:
            break;
    }

    if (playerSelection === 0) {
        switch (computerSelection) {
            case 0:
                return "Tie Game!";
            case 1:
                return "You Lose! Paper beats Rock";
            default:
                return "Tou Win! Rock beats Scissors";
        }
    }
    else if (playerSelection === 1) {
        switch (computerSelection) {
            case 0:
                return "Tou Win! Paper beats Rock";
            case 1:
                return "Tie Game!";
            default:
                return "You Lose! Scissors beats Paper";
        }
    }
    else {
        switch (computerSelection) {
            case 0:
                return "Tou Lose! Rock beats Scissors";
            case 1:
                return "You Win! Scissors beats Paper";
            default:
                return "Tie Game!";
        }
    }
}