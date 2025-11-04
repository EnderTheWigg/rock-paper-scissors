function getComputerChoice(){
    let choice = Math.ceil(Math.random() * 3);
    if(choice == 1)
        return "rock";
    else if(choice == 2)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Enter rock, paper, or scissors")
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
    computerChoice = getComputerChoice().toUpperCase();
    humanChoice = getHumanChoice().toUpperCase();

    if(humanChoice === "ROCK" && computerChoice === "ROCK"){
        console.log("Tie! Rock and Rock!");
    }
    else if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        console.log("You Lose! Paper beats Rock!");
        computerScore+=1;
    }
    else if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        console.log("You Win! Rock beats Scissors!");
        humanScore+=1;
    }

    else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        console.log("You Win! Paper beats Rock!");
        humanScore+=1;
    }
    else if(humanChoice === "PAPER" && computerChoice === "PAPER"){
        console.log("Tie! Paper and Paper!");
    }
    else if(humanChoice === "PAPER" && computerChoice === "SCISSORS"){
        console.log("You Lose! Paper beats Rock!");
        computerScore+=1;
    }

    else if(humanChoice === "SCISSORS" && computerChoice === "ROCK"){
        console.log("You Lose! Rock beats Scissors!");
        computerScore+=1;
    }
    else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        console.log("You Win! Scissors beats Paper!");
        humanScore+=1;
    }
    else if(humanChoice === "SCISSORS"&& computerChoice === "SCISSORS"){
        console.log("Tie! Paper and Paper!");
    }
}

function playGame(){
    let rounds = 5;
    for(let i = 0; i < rounds; i++){
        playRound();
    }
    console.log(`Your Score: ${humanScore}. Computer Score: ${computerScore}`);
}

playGame();