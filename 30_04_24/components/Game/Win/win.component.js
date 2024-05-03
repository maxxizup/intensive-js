import {getMissCount, getPointsCount, playAgain} from "../../../data.js";

export function Win() {
	const element = document.createElement('div');
	element.className = 'finish__box';

	const playAgainButton = document.createElement('button');
	playAgainButton.className = 'button button__win'
	playAgainButton.append('Play Again');

	const winElement = document.getElementsByClassName('finish__h2');

	const p1Points = getPointsCount(1);
	const p2Points = getPointsCount(2);


	element.innerHTML= (`
	<h2 class="finish__h2"></h2>
	<h3 class="finish__h3">Congratulations</h3>
	<div class="finish__stats">
		<p>Catches:</p>
		<span>${getPointsCount(1)}</span>
	</div>
	<div class="finish__stats">
		<p>Misses:</p>
		<span>${getMissCount()}</span>
	</div>
	`);

	if (p1Points > p2Points) {
		winElement.innerHTML = 'Player1 Win!';
	} else if (p1Points < p2Points) {
		winElement.innerHTML = 'Player2 Win!';
	}

	element.append(playAgainButton);





	playAgainButton.addEventListener('click', () => {
		playAgain();
	})
	return element;
}
