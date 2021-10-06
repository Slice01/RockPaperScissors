let compResult;
let compHand;
let playerHand;
let nonLoseResult;
let loseResult;
let win;
let startAgain;

function compSelect() {  //* Randomly get a computer selection of either Rock, Paper, or Scissors
	compResult = Math.floor(Math.random() * 3 +1);
	if (compResult === 1) { 
		compHand = "rock";
	} else if (compResult === 2) {
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
		playGame();
	}
}

function playGame() { //* Compares computer to player choice, gives a win/lose message
	compSelect();
	playerSelect();
	nonLoseResult = 'You chose ' + playerHand + ' and the computer chose ' + compHand + '.'; 
	loseResult = 'The computer chose ' + compHand + ' and you chose ' + playerHand + '.';
	win = null;
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
		playAgain();
	} else if (win === false) {
		alert(loseResult);
		alert('You lose... :(');
		playAgain();
	}
	if (compHand === playerHand) {
		playGame();
	}
}	