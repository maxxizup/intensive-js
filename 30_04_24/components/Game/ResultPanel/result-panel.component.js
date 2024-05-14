import {getPointsCount} from "../../../data.js";
import {Timer} from "./Timer/timer.component.js";

export function ResultPanel() {
	const element = document.createElement('div');
	element.classList.add('resultPanel');

	const textP1Element = document.createElement('p');
	const textP2Element = document.createElement('p');

	const elementP1Points = document.createElement('span')
	const elementP2Points = document.createElement('span')

	elementP1Points.append(getPointsCount(1));
	elementP2Points.append(getPointsCount(2));

	const timerElement = Timer();

	textP1Element.append('PLAYER1: ', elementP1Points);
	textP2Element.append('PLAYER2: ', elementP2Points);

	element.append(textP1Element, textP2Element, timerElement);

	return element;
}


// АВТОМАТИЗИРОВАТЬ ❗❗❗❗❗❗❗❗
