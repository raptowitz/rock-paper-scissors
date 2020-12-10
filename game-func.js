function computerPlay(){
    let randomNum = Math.floor(Math.random()*3);
    if (randomNum === 0) {
        return ("Rock");
    }
    else if (randomNum === 1) {
        return ("Paper");
    }
    else {
        return ("Scissors");
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return (0);
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper" || 
            playerSelection === "Paper" && computerSelection === "Scissors" ||
            playerSelection === "Scissors" && computerSelection === "Rock"){
        return (-1);
    }
    else{
        return (1);
    }
}

function playGame(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    computerMove.textContent = "Computer chose " + computerSelection;
    let match = playRound(playerSelection, computerSelection); 
    
    if (match === 1 && playerScore<4){
        playerScore++;
        return playerScoreDiv.textContent = "Player score is " + playerScore;
    }
    else if (match === -1 && computerScore<4){
        computerScore++;
        return computerScoreDiv.textContent = "Computer score is " + computerScore;
    }
    //game point scenario
    else if (match === 1) {
        playerScore++;
        playerScoreDiv.textContent = "Your score is " + playerScore;
        buttons.forEach(button =>button.setAttribute("disabled",""));
        buttons.forEach(button =>button.style.visibility = "hidden");
        generateQuote();
        return gameResult.textContent = "Player wins!";
    }

    else if (match === -1){
        computerScore++;
        computerScoreDiv.textContent = "Computer score is " + computerScore;
        buttons.forEach(button =>button.setAttribute("disabled",""));
        buttons.forEach(button =>button.style.visibility = "hidden");
        generateQuote();
        return gameResult.textContent = "Computer wins!";
    }
}

function generateQuote(){
    let randomNumber = Math.floor(Math.random()* cowboySayings.length);
    quote.textContent = cowboySayings[randomNumber];
    return quote.classList.add("quoteAppear");
}

const buttons = document.querySelectorAll("input");
buttons.forEach(button => button.addEventListener("click", playGame));


let playerScore = 0;
let computerScore = 0;

//create DOM elements
let computerMove = document.querySelector(".computerMove");
let playerScoreDiv = document.querySelector(".playerScore");
let computerScoreDiv = document.querySelector(".computerScore");
let gameResult = document.querySelector(".gameResult");
let quote = document.querySelector(".quote");

let cowboySayings = [
   "If you find yourself in a hole, the first thing to do is stop digging.",
   "Just 'cause trouble comes visiting doesn't mean you have to offer it a place to sit down.",
   "Lettin' the cat outta the bag is a whole lot easier than puttin' it back.",
   "Nature gave us all something to fall back on, and sooner or later we all land flat on it.",
   "Sometimes you get and sometimes you get got.",
   "When you're throwin' your weight around, be ready to have it thrown around by somebody else.",
   "If you haven’t fallen off a horse, then you haven’t been ridin’ long enough.",
   "If you climb in the saddle, be ready for the ride.",
   "When in doubt, let your horse do the thinkin'.",
   "The horse stopped with a jerk-- and the jerk fell off!"
];
