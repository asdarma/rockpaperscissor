// 1. Setup the project structure
console.log("Welcome to Rock Paper Scissor game");

// 2. Write the logic to get the computer choice
function getComputerChoice() {
    const compRandom = Math.floor(Math.random() * 3);
    if ( compRandom === 1) {
        return 'rock';
    } else if ( compRandom === 2) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

// 3. Write the logic to get the human choice
function getHumanChoice() {
    const humanInput = prompt('Enter your choice: rock, paper or scissor').toLowerCase();
    return humanInput;
}

// 4. Declare the players score variables
let humanScore = 0;
let compScore = 0;

// 5. Write the logic to play a single round
// 6. Write the logic to play the entire game
function playGame() {
    const rounds = 6;
    for ( let round = 1; round < rounds; round++ ) {
    console.log(`Round: ${round}`)
    


    function playRound(humanChoice, compChoice) {
        if ( humanChoice === compChoice ) {
            return 'Its a Tie round';
        } else if (
            ( humanChoice === 'rock' && compChoice === 'paper') ||
            ( humanChoice === 'paper' && compChoice === 'scissor') ||
            ( humanChoice === 'scissor' && compChoice === 'rock')
        ) {
            compScore++
            return 'You lose this round'
        } else {
            humanScore++
            return 'You win this round'
        };
    };

    const humanSelection = getHumanChoice();
    const compSelection = getComputerChoice();

    console.log('Result: '+ playRound(humanSelection, compSelection));
    console.log('Your choice is: ' + humanSelection);
    console.log('Computer choice is: ' + compSelection);
    console.log('Your score: ' + humanScore);
    console.log('Computer score: ' + compScore);

    };
};
playGame();

if ( compScore < humanScore ) {
    console.log('Congratulations! You are the CHAMPION')
} else {
    console.log('Unfortunately, Computer is the Champion.')
};