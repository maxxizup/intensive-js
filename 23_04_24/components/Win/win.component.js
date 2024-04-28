import {playAgain} from "../../data.js";

export function Win() {
	const element = document.createElement('div');

	element.append('You win');

	const playAgainButton = document.createElement('button');
	playAgainButton.append('Play Again');


	element.append(playAgainButton);

	playAgainButton.addEventListener('click', () => {
		playAgain();
	})
	return element;
}