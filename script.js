function getComputerChoice() {
    let weapon = Math.floor(Math.random() * 3);
    return weapon;
}

function playRound(playerSelection = prompt("Rock, Paper or Scissors?"), computerSelection = getComputerChoice()) {
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
                console.log("Tie Game!");
                return 0;
            case 1:
                console.log("You Lose! Paper beats Rock");
                return -1;
            default:
                console.log("Tou Won! Rock beats Scissors");
                return 1;
        }
    }
    else if (playerSelection === 1) {
        switch (computerSelection) {
            case 0:
                console.log("Tou Won! Paper beats Rock");
                return 1;
            case 1:
                console.log("Tie Game!");
                return 0;
            default:
                console.log("You Lose! Scissors beats Paper");
                return -1;
        }
    }
    else {
        switch (computerSelection) {
            case 0:
                console.log("Tou Lose! Rock beats Scissors");
                return -1;
            case 1:
                console.log("You Won! Scissors beats Paper");
                return 1;
            default:
                console.log("Tie Game!");
        }
    }
}

function game() {
    let roundResult;
    let playerScore = 0;
    let cpuScore = 0;
    for (let i = 0; i < 5; i++) {
        roundResult = playRound("Rock");
        if (roundResult === 1) {
            playerScore++;
            if (playerScore === 3)
                return `You Won!\nYour Score:${playerScore}\nCPU Score:${Math.abs(cpuScore)}`;
        }
        else if (roundResult === -1) {
            cpuScore++;
            if (cpuScore === 3)
                return `You Lost!\nYour Score:${playerScore}\nCPU Score:${Math.abs(cpuScore)}`;
        }
        else if (roundResult === 0)
            i--;
    }
}