function getComputerChoice() {
    let weapon = Math.floor(Math.random() * 3);
    return weapon;
}

function playRound(playerSelection, computerSelection = getComputerChoice(), userScore, comScore) {
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
                return 0;
            case 1:
                return -1;
            default:
                return 1;
        }
    }
    else if (playerSelection === 1) {
        switch (computerSelection) {
            case 0:
                return 1;
            case 1:
                return 0;
            default:
                return -1;
        }
    }
    else {
        switch (computerSelection) {
            case 0:
                return -1;
            case 1:
                return 1;
            default:
        }
    }
}

function updateScore(userScore, comScore) {
    const playersPoint = document.querySelector('#playersPoint');
    const cpuPoints = document.querySelector('#cpuPoints');
    
    playersPoint.textContent = `${userScore}`;
    cpuPoints.textContent = `${comScore}`;
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
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) playerWins();
        else updateScore(playerScore, cpuScore);
    });
    paperButton.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "paper");
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) playerWins();
        else updateScore(playerScore, cpuScore);
    });
    scissorsButton.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "scissors");
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) playerWins();
        else updateScore(playerScore, cpuScore);
    });
}



game()
//! Adding event listers to the three buttons

//? Just change the function names and make it call the function "play round"

// TODO: INSTEAD OF ROCK PAPER SCISSORS DO POKEMON!!!!! CHARMANDER SQUIRTLE AND BULBASAUR