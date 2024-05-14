import {getGameTimeSettings} from "../../../../data.js";

export function Timer () {
	const element = document.createElement('p');

	const spanElement = document.createElement('span');
	spanElement.append(getGameTimeSettings());

	element.append('Time: ', spanElement);

	return element;
}