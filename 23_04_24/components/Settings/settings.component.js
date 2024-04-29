import {start} from "../../data.js";

export function Settings() {
	const element = document.createElement('div');
	element.className = 'button__box';

	const startButton = document.createElement('button');
	startButton.className = 'button start__button';
	startButton.append('Start Game');


	startButton.addEventListener('click', () => {
		start();
	})
	element.append(startButton);

	return element;
}

