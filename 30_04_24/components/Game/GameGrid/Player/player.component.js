import {validatePlayerNumberOrThrow} from "../../../../data.js";

export function Player(playerNumber) {
	validatePlayerNumberOrThrow(playerNumber);

	const element = document.createElement('img');

	element.src = `./images/player${playerNumber}.svg`;

	return element;
}