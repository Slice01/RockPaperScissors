const playerButton = document.querySelectorAll('.btn');
let playerScore = 0;
let compScore = 0;
let roundCount = 1;
let result;

//Reset for a new round
 function reset() {
	const pSelection = document.getElementById('pSelection');
	const pScore = document.getElementById('playerScore');
	const cSelection = document.getElementById('cSelection');
	const cScore = document.getElementById('computerScore');
	const round = document.getElementById('currentRound');
	const announcement = document.getElementById('num');
	
	announcement.textContent = '';
	pScore.textContent = playerScore;
	pSelection.removeAttribute('class','slideFromLeft');
	pSelection.textContent = '';
	cScore.textContent = compScore;
	cSelection.removeAttribute('class','slideFromRight');
	cSelection.textContent = '';
	round.textContent = roundCount;
	window.removeEventListener('click',reset);
	playerButton.forEach(key => key.addEventListener('click', chooseWeapon));
}; 

//Reset for new game, resets scores and round
function fullReset() {
	 window.removeEventListener('click', fullReset);
	 
	 const announcement = document.getElementById('num');
	 if (playerScore > compScore) {
		announcement.textContent = 'You are the champion!';
	 } else {
		announcement.textContent = 'You have lost.';
	 };
	 window.addEventListener('click', reset);
	 compScore = 0;
	 playerScore = 0;
	 roundCount = 1;
};

//Set winner and raise score
function announceWinner() {
	const announcement = document.getElementById('num');
	const pScore = document.getElementById('playerScore');
	const cScore = document.getElementById('computerScore');
	announcement.classList.add('results');
	
	if (compSelection === playerSelection) {
		result = 'tie';
	} else { 	//Checks win and lose cases
		switch (compSelection) {
			case 'rock':
				if (playerSelection === 'paper') {
					result = 'win';
				} else {
					result = 'lose';
				}
				break;
			case 'paper':
				if (playerSelection === 'scissors') {
					result = 'win';
				} else {
					result = 'lose';
				}
				break;
			case 'scissors':
				if (playerSelection === 'rock') {
					result = 'win';
				} else {
					result = 'lose';
				};
			};
		};
		
	//Win and loss results
	if (result === 'win') {
		playerScore++;
		roundCount++;
		announcement.textContent = 'You gain a point';
		pScore.textContent = playerScore;
	} else if (result === 'lose') {
		compScore++
		roundCount++;
		announcement.textContent = 'Computer gains a point';
		cScore.textContent = compScore;
	} else if (result === 'tie') {
		announcement.textContent = 'Tie Game!';
	};
	
	//Check end of match
	if (playerScore === 5 || compScore === 5) {
		window.addEventListener('click', fullReset);
	} else {
		window.addEventListener('click', reset);
	}
};
	
//Shows the player and computer choices
function showChoice() {
	const announcement = document.getElementById('num');

	compRandom = Math.floor(Math.random() * 3 + 1);   //* Randomly get a computer selection of either Rock, Paper, or Scissors
	if (compRandom === 1) { 
		compSelection = "rock";
	} else if (compRandom === 2) {
		compSelection = 'scissors';
	} else {
		compSelection = 'paper';
	};

	announcement.textContent = '';  //Remove 'fight' announcement
	
	const pSelection = document.getElementById('pSelection');
	pSelection.setAttribute('class','slideFromLeft');
	pSelection.textContent = 'You have selected ' + playerSelection;

	const cSelection = document.getElementById('cSelection');
	cSelection.setAttribute('class','slideFromRight');
	cSelection.textContent = 'Computer has selected ' + compSelection;
	
	const first = this;  //These are used to reapply the class so the animation will repeat with the next number in the countdown
	const second = first.cloneNode(true);
	first.parentNode.replaceChild(second, first);
	
	pSelection.addEventListener('animationend', announceWinner)
};

function countdown() {  //Start countdown to throw hands out
	const announcement = document.getElementById('num');
	
	announcement.setAttribute('class','countdown');
	announcement.textContent = '3';
	num.addEventListener('animationend', function () {
		const announcement = document.getElementById('num');
		announcement.textContent = '2';
		
		const first = this;  //These are used to reapply the class so the animation will repeat with the next number in the countdown
		const second = first.cloneNode(true);
		first.parentNode.replaceChild(second, first);

		num.addEventListener('animationend', function (){
			const announcement = document.getElementById('num');
			announcement.textContent = '1';

			const first = this;  //These are used to reapply the class so the animation will repeat with the next number in the countdown
			const second = first.cloneNode(true);
			first.parentNode.replaceChild(second, first);

			num.addEventListener('animationend', function () {
				const announcement = document.getElementById('num');
				announcement.textContent = 'FIGHT!';
				announcement.classList.add('shake');
	
				const first = this;  //These are used to reapply the class so the animation will repeat with the next number in the countdown
				const second = first.cloneNode(true);
				first.parentNode.replaceChild(second, first);
	
				num.addEventListener('animationend', showChoice);
			});
		});
	});
};

function chooseWeapon() {
	playerButton.forEach(key => key.removeEventListener('click', chooseWeapon));
	
	const first = document.getElementById('num');  //These are used to reapply the class so the animation will repeat with the next number in the countdown
	const second = first.cloneNode(true);
	first.parentNode.replaceChild(second, first);
	
	const round = document.getElementById('currentRound');
	round.textContent = roundCount;
	playerSelection = this.getAttribute('id');
	
	countdown();
}

playerButton.forEach(key => key.addEventListener('click', chooseWeapon));