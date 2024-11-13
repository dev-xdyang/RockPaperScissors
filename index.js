let items = ["rock", "paper", "scissors"];
const allItemsString = items.join(", ");

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return items[randomIndex];
}

function getHumanChoice() {
    let result = prompt(
        `Please choice one, you can input:\n ${allItemsString}`,
    );

    while (!items.includes(result?.toLowerCase() ?? "")) {
        result = prompt(
            `Input wrong! please choice one, you can input:\n ${allItemsString}`,
        );
    }

    return result;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    /**
     * play the game a round
     *
     * @param {string} humanChoice
     * @param {string} computerChoice
     */
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        let isHumanWin = false;
        if (humanChoice === computerChoice) {
            console.log("Your choice is the same");
            return;
        } else if (
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "rock" && computerChoice === "scissors")
        ) {
            isHumanWin = true;
        } else {
            isHumanWin = false;
        }

        if (isHumanWin) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            ++humanScore;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            ++computerScore;
        }
    }

    for (let i = 0; i < 5; ++i) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(
            `Game is over, You win! you wined ${humanScore} round${humanScore > 1 ? "s" : ""} Congratulations🎉`,
        );
    } else if (humanScore < computerScore) {
        console.log(
            `Game is over, You lose! you wined ${humanScore} round${humanScore > 1 ? "s" : ""} please try the game again`,
        );
    } else {
        console.log("You two have tied");
    }
}

playGame();
