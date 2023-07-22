function getComputerChoice() {
    let weapon = Math.floor(Math.random() * 3);
    return weapon;
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
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
                outcome.textContent = "Tou Won! Rock beats Scissors";
                return 1;
        }
    }
    else if (playerSelection === 1) {
        switch (computerSelection) {
            case 0:
                outcome.textContent = "Tou Won! Paper beats Rock";
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
                outcome.textContent = "Tou Lose! Rock beats Scissors";
                return -1;
            case 1:
                outcome.textContent = "You Won! Scissors beats Paper";
                return 1;
            default:
                outcome.textContent = "Tie Game";
        }
    }
}

// function game() {
//     let roundResult;
//     let playerScore = 0;
//     let cpuScore = 0;
//     for (let i = 0; i < 5; i++) {
//         roundResult = playRound();
//         if (roundResult === 1) {
//             playerScore++;
//             if (playerScore === 3)
//                 return `You Won!\nYour Score:${playerScore}\nCPU Score:${Math.abs(cpuScore)}`;
//         }
//         else if (roundResult === -1) {
//             cpuScore++;
//             if (cpuScore === 3)
//                 return `You Lost!\nYour Score:${playerScore}\nCPU Score:${Math.abs(cpuScore)}`;
//         }
//         else if (roundResult === 0)
//             i--;
//     }
// }


//! Adding event listers to the three buttons

const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

//? Just change the function names and make it call the function "play round"
rockButton.addEventListener("click", (event) => {
    playRound(playerSelection = "rock");
});
paperButton.addEventListener("click", (event) => {
    playRound(playerSelection = "paper");
});
scissorsButton.addEventListener("click", (event) => {
    playRound(playerSelection = "scissors");
});