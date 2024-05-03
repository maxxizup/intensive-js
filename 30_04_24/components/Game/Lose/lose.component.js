import {getMissCount, getPointsCount, playAgain} from "../../../data.js";

export function Lose() {
	const element = document.createElement('div');
	element.className = 'finish__box';

	const playAgainButton = document.createElement('button');
	playAgainButton.className = 'button button__lose'
	playAgainButton.append('Play Again');


	element.innerHTML= (`
	<h2 class="finish__h2">You Lose!</h2>
	<h3 class="finish__h3">You'll be lucky next time</h3>
	<div class="finish__stats">
		<p>Catches:</p>
		<span>${getPointsCount(1)}</span>
	</div>
	<div class="finish__stats">
		<p>Misses:</p>
		<span>${getMissCount()}</span>
	</div>
	`);
	element.append(playAgainButton);

	playAgainButton.addEventListener('click', () => {
		playAgain();
	})
	return element;
}
