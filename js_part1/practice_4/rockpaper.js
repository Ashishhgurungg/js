// let player1 = "rock";
// let player2 = "scissor";


function rockScissor(player1, player2) {
    if (player1 == player2) {
        console.log("draw");
    }
    
    if (player1 == "rock") {
        if (player2 == "scissor") {
            console.log("Player 1 Wins")
        }
        if (player2 == "paper") {
            console.log("Player 2 wins")
        }
    }
    if (player1 == "paper") {
        if (player2 == "rock") {
            console.log("Player 1 Wins")
        }
        if (player2 == "scissor") {
            console.log("Player 2 wins")
        }
    }
    if (player1 == "scissor") {
        if (player2 == "rock") {
            console.log("Player 2 Wins")
        }
        if (player2 == "paper") {
            console.log("Player 1 wins")
        }
    }
}

//Gpt suggestion

function getWinner(player1, player2) {
    if (player1 === player2) {
        return "Draw";
    }

    if (
        (player1 === "rock" && player2 === "scissor") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissor" && player2 === "paper")
    ) {
        return "Player 1 Wins";
    } else {
        return "Player 2 Wins";
    }
}

// Example
console.log(getWinner("rock", "paper"));

