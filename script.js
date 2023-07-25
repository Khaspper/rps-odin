const body = document.querySelector('body');
body.style.backgroundImage = "url(./img/pokemon-encounter.gif)";
body.style.backgroundPosition = "TOP";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "90%";

function secondsPassed() {
    body.style.backgroundImage = "url(./img/battle_field.jpeg)";
    addContent();
    game();
}

function addContent() {
//! scoreBoard DIV 
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

    const roundResultText = document.createElement('div');
    roundResultText.setAttribute('id', 'roundResultText');
    roundResultText.textContent = "";

    const scoreBoard = document.getElementById('scoreBoard');
    scoreBoard.appendChild(contestant);
    scoreBoard.appendChild(pointsDiv);
    scoreBoard.appendChild(roundResultText);
//! weapons DIV
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
        case "charmander":
            playerSelection = 0;
            break;
        case "squirtle":
            playerSelection = 1;
            break;
        case "bulbasaur":
            playerSelection = 2;
            break;
        default:
            break;
    }
    const roundResultText = document.getElementById('roundResultText');
    if (playerSelection === 0) { //! Player's Weapon: Charmander
        switch (computerSelection) {
            case 0:
                roundResultText.textContent = "You both used Charmander! Tie round!";
                return 0;
            case 1:
                roundResultText.textContent = "Opponent used Squirtle! Squirtle used water gun and was super effective!";
                return -1;
            default:
                roundResultText.textContent = "Opponent used Bulbasaur! Your Charmander used ember! And was super effective!";
                return 1;
        }
    }
    else if (playerSelection === 1) { //! Player's Weapon: squirtle
        switch (computerSelection) {
            case 0:
                roundResultText.textContent = "Opponent used Charmander! Your Squirtle used water gun and was super effective!";
                return 1;
            case 1:
                roundResultText.textContent = "You both used Squirtle! Tie round!";
                return 0;
            default:
                roundResultText.textContent = "Opponent used Bulbasaur! Bulbasaur used vine whip! And was super effective!";
                return -1;
        }
    }
    else {
        switch (computerSelection) { //! Player's Weapon: bulbasaur
            case 0:
                roundResultText.textContent = "Opponent used Charmander! Charmander used ember! And was super effective!";
                return -1;
            case 1:
                roundResultText.textContent = "Opponent used Squirtle! Your Bulbasaur used vine whip! And was super effective!";
                return 1;
            default:
                roundResultText.textContent = "You both used Bulbasaur! Tie round!";
                return 0;
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
    const restartButton = document.createElement("button");
    const outcome = document.createElement("div");
    while (scoreBoardDiv.firstChild) {
        scoreBoardDiv.removeChild(scoreBoardDiv.firstChild);
    }
    outcome.textContent = "You WON!!!!";
    restartButton.textContent = "Play Again?";
    restartButton.style.backgroundColor = "#ee1515";
    restartButton.style.padding = "15px 20px";
    restartButton.style.borderRadius = "10px";

    scoreBoardDiv.appendChild(outcome);
    scoreBoardDiv.appendChild(restartButton);

    restartButton.addEventListener("click", () => {window.location.reload()});
}

function cpuWins() {
    const scoreBoardDiv = document.getElementById("scoreBoard");
    const restartButton = document.createElement("button");
    const outcome = document.createElement("div");
    while (scoreBoardDiv.firstChild) {
        scoreBoardDiv.removeChild(scoreBoardDiv.firstChild);
    }
    outcome.textContent = "You LOST!!!!";
    restartButton.textContent = "Play Again?";
    restartButton.style.backgroundColor = "#ee1515";
    restartButton.style.padding = "15px 20px";
    restartButton.style.borderRadius = "10px";

    scoreBoardDiv.appendChild(outcome);
    scoreBoardDiv.appendChild(restartButton);

    restartButton.addEventListener("click", () => {window.location.reload()});
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

    pikachu.addEventListener("click", (event) => {
        const roundResultText = document.getElementById("roundResultText");
        roundResultText.textContent = "PIKACHU DOESN'T WANT TO FIGHT :(";
    })

    charmander.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "charmander");
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) cpuWins();
        else updateScoreBoard(playerScore, cpuScore);
    });
    squirtle.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "squirtle");
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) cpuWins();
        else updateScoreBoard(playerScore, cpuScore);
    });
    bulbasaur.addEventListener("click", (event) => {
        roundResult = playRound(playerSelection = "bulbasaur");
        console.log(roundResult);
        if(roundResult === 1) playerScore++;
        else if(roundResult === -1) cpuScore++;
        if(playerScore === 5) playerWins();
        else if(cpuScore === 5) cpuWins();
        else updateScoreBoard(playerScore, cpuScore);
    });
}


setTimeout(secondsPassed, 2300);

// TODO: All I'm missing is the name of the pokemon the level and the photos of the pokemon