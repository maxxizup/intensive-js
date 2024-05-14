import {getMissCount, getPointsCount, playAgain} from "../../../data.js";

export function Win() {
	const element = document.createElement('div');
	element.classList.add('finish__box');

	const titleH2 = document.createElement('h2');
	titleH2.classList.add('finish__h2');
	titleH2.append('You win!');

	const titleH3 = document.createElement('h3');
	titleH3.classList.add('finish__h3');
	titleH3.append('Congratulations');

	const catchesBox = document.createElement('div');
	catchesBox.classList.add('finish__stats');

	const catchesBoxText = document.createElement('p');
	catchesBoxText.append('Catches:');

	const catchesBoxValue = document.createElement('span');
	catchesBoxValue.append();

	const timeBox = document.createElement('div');
	timeBox.classList.add('finish__stats');

	const timeBoxText = document.createElement('p');
	timeBoxText.append('Time:');

	const timeBoxValue = document.createElement('span');
	timeBoxValue.append('');





	const playAgainButton = document.createElement('button');
	playAgainButton.classList.add('button button__win');
	playAgainButton.append('Play Again');

	const winElement = document.getElementsByClassName('finish__h2');

	const p1Points = getPointsCount(1);
	const p2Points = getPointsCount(2);



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


	// element.innerHTML= (`
	// <h2 class="finish__h2">You Win!</h2>
	// <h3 class="finish__h3">Congratulations</h3>
	// <div class="finish__stats">
	// 	<p>Catches:</p>
	// 	<span>${getPointsCount(1)}</span>
	// </div>
	// <div class="finish__stats">
	// 	<p>Misses:</p>
	// 	<span>${getMissCount()}</span>
	// </div>
	// `);
