// branch rps-ui
// 1.b. remove logic that plays exactly five rounds.
// function playGame() {
//     const rounds = 6;
//     for ( let round = 1; round < rounds; round++ ) {
//     console.log(`Round: ${round}`)
//     }
// }

// 2.b. Create three buttons; rock, paper, scissor.
// Add event listener that call playRound()
// Done in index.html file

// 3.b. Add a <div> for displaying result and change all console.log into DOM
// console.log('Result: '+ playRound(humanSelection, compSelection));
// console.log('Your choice is: ' + humanSelection);
// console.log('Computer choice is: ' + compSelection);
// console.log('Your score: ' + humanScore);
// console.log('Computer score: ' + compScore);
// 1. Setup the project structure
// console.log("Welcome to Rock Paper Scissor game");
// 3. Write the logic to get the human choice

// 4.b. Display the running score and annouce a winner once reach 5 point
// 5.b. Rework/rewrite original code

const buttons = document.querySelectorAll(".buttons button");
const resultText = document.getElementById("resultText");
const resultHuman = document.getElementById("resultHuman");
const resultComp = document.getElementById("resultComp");
const winner = document.getElementById("winner");

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

// 4. Declare the players score variables
let humanScore = 0;
let compScore = 0;
  
    function playRound(humanChoice, compChoice) {

        if ( humanChoice === 5 ) {
            winner.textContent = 'YOU ARE THE WINNER';
        } else if ( compScore === 5 ) {
            winner.textContent = 'COMPUTER IS THE WINNER';
        } else {

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
    };

buttons.forEach( button => {
    button.addEventListener('click', () => {

        const humanChoice = button.id;
        const compChoice = getComputerChoice();
        const result = playRound(humanChoice, compChoice);

        resultHuman.textContent = `YOUR choice: ${humanChoice}. [score: ${humanScore}]`;
        resultComp.textContent = `COMPUTER choice: ${compChoice}. [score: ${compScore}]`;
        resultText.textContent = `GAME RESULT: ${result}`;

    });
});

// if ( compScore < humanScore ) {
//     console.log('Congratulations! You are the CHAMPION')
// } else {
//     console.log('Unfortunately, Computer is the Champion.')
// };