const body = document.querySelector('body');
body.style.backgroundImage = "url(./img/pokemon-encounter.gif)";
body.style.backgroundPosition = "TOP";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "90%";

function threeSecondsPassed() {
    body.style.backgroundImage = "url(./img/battle_field.jpeg)";
    addContent();
    game();
}

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

    const charmanderDIV = document.createElement('button');
    charmanderDIV.textContent = "Charmander";
    charmanderDIV.setAttribute('id', 'charmanderButton');

    const squirtleDIV = document.createElement('button');
    squirtleDIV.textContent = "Squirtle";
    squirtleDIV.setAttribute('id', 'squirtleButton');

    const bulbasaurDIV = document.createElement('button');
    bulbasaurDIV.textContent = "Bulbasaur";
    bulbasaurDIV.setAttribute('id', 'bulbasaurButton');

    const pikachuDIV = document.createElement('button');
    pikachuDIV.textContent = "Pikachu";
    pikachuDIV.setAttribute('id', 'pikachuButton');

    const weaponsDiv = document.querySelector('#weapons');
    weaponsDiv.appendChild(charmanderDIV);
    weaponsDiv.appendChild(squirtleDIV);
    weaponsDiv.appendChild(bulbasaurDIV);
    weaponsDiv.appendChild(pikachuDIV);
}

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

function updateScoreBoard(userScore, comScore) {    
    const playersPointDiv = document.getElementById("playersPoint");
    const cpuPointsDiv = document.getElementById("cpuPointsDiv");
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

    const charmander = document.getElementById("charmanderButton");
    const squirtle = document.getElementById("squirtleButton");
    const bulbasaur = document.getElementById("bulbasaurButton");
    const pikachu = document.querySelector("#pikachuButton");
    
    console.log(charmander);
    console.log(squirtle);
    console.log(bulbasaur);
    console.log(pikachu);

    pikachu.addEventListener("click", (event) => alert("PIKACHU DOESN'T WANT TO FIGHT :("))

    charmander.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "rock");
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) cpuWins();
        else updateScoreBoard(playerScore, cpuScore);
    });
    squirtleButton.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "paper");
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) cpuWins();
        else updateScoreBoard(playerScore, cpuScore);
    });
    bulbasaur.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "scissors");
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) cpuWins();
        else updateScoreBoard(playerScore, cpuScore);
    });
}


setTimeout(threeSecondsPassed, 2300);