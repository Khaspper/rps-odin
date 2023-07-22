const body = document.querySelector('body');
body.style.backgroundImage = "url(./img/pokemon-encounter.gif)";
body.style.backgroundPosition = "TOP";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "90%";

function threeSecondsPassed() {
    body.style.backgroundImage = "url(./img/battle_field.jpeg)";
    addContent();
}

setTimeout(threeSecondsPassed, 2300);
function addContent() {

    const contestant = document.createElement('div');
    contestant.setAttribute('id', 'contestant');

    const playerOneDiv = document.createElement('div');
    playerOneDiv.setAttribute('id', 'player_one');
    playerOneDiv.textContent = "You";
    contestant.appendChild(playerOneDiv);

    const cpuDiv = document.createElement('div');
    cpuDiv.setAttribute('id', 'cpu');
    cpuDiv.textContent = "CPU";
    contestant.appendChild(cpuDiv);

    const pointsDiv = document.createElement('div');
    pointsDiv.setAttribute('id', 'points');

    const playersPointDiv = document.createElement('div');
    playersPointDiv.setAttribute('id', 'playersPoint');
    playersPointDiv.textContent = 0;
    pointsDiv.appendChild(playersPointDiv);

    const cpuPointsDiv = document.createElement('div');
    cpuPointsDiv.setAttribute('id', 'cpuPointsDiv');
    cpuPointsDiv.textContent = 0;
    pointsDiv.appendChild(cpuPointsDiv);

    const scoreBoard = document.getElementById('scoreBoard');
    scoreBoard.appendChild(contestant);
    scoreBoard.appendChild(pointsDiv);

    const rockButton = document.createElement('button');
    rockButton.textContent = "Rock";
    rockButton.setAttribute('id', 'rockButton');

    const paperButton = document.createElement('button');
    paperButton.textContent = "Paper";
    paperButton.setAttribute('id', 'paperButton');

    const scissorsButton = document.createElement('button');
    scissorsButton.textContent = "Scissors";
    scissorsButton.setAttribute('id', 'scissorsButton');

    const weaponsDiv = document.querySelector('#weapons');
    weaponsDiv.appendChild(rockButton);
    weaponsDiv.appendChild(paperButton);
    weaponsDiv.appendChild(scissorsButton);
}

function getComputerChoice() {
    let weapon = Math.floor(Math.random() * 3);
    return weapon;
}

function playRound(playerSelection, computerSelection = 0, userScore, comScore) {
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

function updateScoreBoard(userScore, comScore) {    
    playersPointDiv.textContent = `${userScore}`;
    cpuPointsDiv.textContent = `${comScore}`;
}

function playerWins() {
    const scoreBoardDiv = document.getElementById("scoreBoard");
    while (scoreBoardDiv.firstChild) {
        scoreBoardDiv.removeChild(scoreBoardDiv.firstChild);
    }
    const outcome = document.createElement("div");
    outcome.textContent = "You WON!!!!";
    scoreBoardDiv.appendChild(outcome);
}

function cpuWins() {
    const scoreBoardDiv = document.getElementById("scoreBoard");
    while (scoreBoardDiv.firstChild) {
        scoreBoardDiv.removeChild(scoreBoardDiv.firstChild);
    }
    const outcome = document.createElement("div");
    outcome.textContent = "You LOST!!!!";
    scoreBoardDiv.appendChild(outcome);
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
        else if(cpuScore === 5) cpuWins();
        else updateScoreBoard(playerScore, cpuScore);
    });
    paperButton.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "paper");
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) cpuWins();
        else updateScoreBoard(playerScore, cpuScore);
    });
    scissorsButton.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "scissors");
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) cpuWins();
        else updateScoreBoard(playerScore, cpuScore);
    });
}


game()