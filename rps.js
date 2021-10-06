let scoreAlert;
let roundAlert;
let nonLoseResult;
let loseResult;
let win;
let compRandom;
let compHand;
let playerHand;
let startAgain;
let playerScore;
let compScore;
let roundCount;

alert('Rock, Paper, Scissors JS console game.  rps() to begin.')

function update() { //* Update round variables for ease
	scoreAlert = 'The score is ' + playerScore + ' to ' + compScore + '.';
	roundAlert = 'Preparing for round number ' + roundCount + '.';
	nonLoseResult = 'You chose ' + playerHand + ' and the computer chose ' + compHand + '.';
	loseResult = 'The computer chose ' + compHand + ' and you chose ' + playerHand + '.';
	win = null;
}

function compSelect() { //* Randomly get a computer selection of either Rock, Paper, or Scissors
	compRandom = Math.floor(Math.random() * 3 + 1);
	if (compRandom === 1) { 
		compHand = "rock";
	} else if (compRandom === 2) {
		compHand = 'scissors';
	} else {
		compHand = 'paper';
	}
}

function playerSelect() {  //* Stores players choice, rejects unvarified response and asks again
	playerHand = prompt('Choose wisely.......Rock, Paper, or Scissors?').toLowerCase();
	if (playerHand !== 'rock' && playerHand !== 'paper' && playerHand !== 'scissors') {
		alert('You have not chosen wisely.... Choose again.');
		playerSelect();
	}
}


function playAgain() { //* Asks if you would like to start a new game
	alert('Would you like to play again?');
	startAgain = prompt('Yes or no?').toLowerCase();
	if (startAgain !== 'yes' && startAgain !== 'no') {
		alert('Come again? I did not understand.');
		playAgain();
	} else if (startAgain === 'no') {
		alert ('Well then, until next time, good sir!');
	} else {
		playerScore = 0;
		compScore = 0;
		roundCount = 1;
		rps();
	}
}

function playGame() {  //* Compares computer to player choice, gives a win/lose message
	update();
	alert(scoreAlert);
	alert(roundAlert);
	alert('Computer has made their choice.')
	compSelect();
	playerSelect();
	update();
	if (compHand === playerHand) {
		alert(nonLoseResult);
		alert('It\'s a tie!');
	} else {
		switch (compHand) {
			case 'rock':
				if (playerHand === 'paper') {
					win = true;
				} else {
					win = false;
				}
				break;
			case 'paper':
				if (playerHand === 'scissors') {
					win = true;
				} else {
					win = false;
				}
				break;
			case 'scissors':
				if (playerHand === 'rock') {
					win = true;
				} else {
					win = false;
				}
		}
	} 
	if (win === true) {
		alert(nonLoseResult);
		alert('You win!!!');
		playerScore++;
		roundCount++;
	} else if (win === false) {
		alert(loseResult);
		alert('You lose...  :(');
		compScore++;
		roundCount++;
	} else {
		playGame();
	}
}

function rps() {
	playerScore = 0;
	compScore = 0;
	roundCount = 1;
	for (let i = 0; i < 5; i++){
		playGame();
	}
	if(playerScore > compScore) {
		alert('Congratulations!  You won ' + playerScore + ' out of ' + (roundCount - 1) + ' games!');
		playAgain();
	} else {
		alert('Too bad, your opponent has bested you once again.');
		alert('You lost by ' + (compScore - playerScore) + '!');
		playAgain();
	}
}	