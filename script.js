function getComputerChoice() {
    let weapon = Math.floor(Math.random() * 3);
    return weapon;
}

function playRound(playerSelection, computerSelection = getComputerChoice(), userScore, comScore) {
    const resultsDIV = document.getElementById("results");
    //! This is how you remove the child element from the parent and update it
    //! So it's a different result reach time
    while (resultsDIV.firstChild) {
        resultsDIV.removeChild(resultsDIV.firstChild);
    }
    const outcome = document.createElement("div");
    resultsDIV.appendChild(outcome);
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
                outcome.textContent = "Tie Game!";
                return 0;
            case 1:
                outcome.textContent = "You Lose! Paper beats Rock";
                return -1;
            default:
                outcome.textContent = "You Won! Rock beats Scissors";
                return 1;
        }
    }
    else if (playerSelection === 1) {
        switch (computerSelection) {
            case 0:
                outcome.textContent = "You Won! Paper beats Rock";
                return 1;
            case 1:
                outcome.textContent = "Tie Game";
                return 0;
            default:
                outcome.textContent = "You Lose! Scissors beats Paper";
                return -1;
        }
    }
    else {
        switch (computerSelection) {
            case 0:
                outcome.textContent = "You Lose! Rock beats Scissors";
                return -1;
            case 1:
                outcome.textContent = "You Won! Scissors beats Paper";
                return 1;
            default:
                outcome.textContent = "Tie Game";
        }
    }
}

function updateScore(userScore, comScore) {

}

function playerWins() {
    const resultsDIV = document.getElementById("results");
    while (resultsDIV.firstChild) {
        resultsDIV.removeChild(resultsDIV.firstChild);
    }
    const outcome = document.createElement("div");
    outcome.textContent = "You WON!!!!";
    resultsDIV.appendChild(outcome);
}

function cpuWins() {
    const resultsDIV = document.getElementById("results");
    while (resultsDIV.firstChild) {
        resultsDIV.removeChild(resultsDIV.firstChild);
    }
    const outcome = document.createElement("div");
    outcome.textContent = "You LOST!!!!";
    resultsDIV.appendChild(outcome);
}

function game() {
    let roundResult = 0;
    let playerScore = 0;
    let cpuScore = 0;

    const rockButton = document.getElementById("rockButton");
    const paperButton = document.getElementById("paperButton");
    const scissorsButton = document.getElementById("scissorsButton");

    rockButton.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "rock");
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) playerWins();
    });
    paperButton.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "paper");
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) playerWins();
    });
    scissorsButton.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "scissors");
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) playerWins();
    });
}

game()
//! Adding event listers to the three buttons

//? Just change the function names and make it call the function "play round"

// TODO: INSTEAD OF ROCK PAPER SCISSORS DOOOO POKEMON!!!!! CHARMANDER SQUIRTLE AND BULBASAUR