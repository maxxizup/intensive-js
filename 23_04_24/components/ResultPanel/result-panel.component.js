import {getMissCount, getPointsCount} from "../../data.js";

export function ResultPanel() {
	const element = document.createElement('span');

	element.append('Catch: ' + getPointsCount() + ' Miss: ' + getMissCount());

	return element;
}
