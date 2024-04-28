import {start} from "../../data.js";

export function Settings() {
	const element = document.createElement('div');

	const startButton = document.createElement('button');
	startButton.append('Start Game');

	startButton.addEventListener('click', () => {
		start();
	})
	element.append(startButton);

	return element;
}

