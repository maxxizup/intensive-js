import {catchGoogle} from "../../../data.js";

export function Google() {
	const element = document.createElement('img');

	element.src = './components/GameGrid/Google/google.svg';

	element.addEventListener('click', catchGoogle);

	return element;
}