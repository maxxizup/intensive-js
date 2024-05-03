import {getMissCount, getPointsCount} from "../../../data.js";

export function ResultPanel() {
	const element = document.createElement('div');
	element.className = 'resultPanel';

	const pointsCountPlayer1 = getPointsCount(1);
	const pointsCountPlayer2 = getPointsCount(2);
	const missCount = getMissCount();

	element.innerHTML = `<p>PLAYER1: <span class="resultPanel__counters">${pointsCountPlayer1}</span><p>PLAYER2: <span class="resultPanel__counters">${pointsCountPlayer2}</span><p>Misses: <span class="resultPanel__counters">${missCount}</span></p>`;

	return element;
}
