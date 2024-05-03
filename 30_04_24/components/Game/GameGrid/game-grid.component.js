import {Google} from "./Google/google.component.js";
import {Player} from "./Player/player.component.js";
import {getGoogleCoords, getGridSizeSettings, getPlayer1Coords, getPlayer2Coords} from "../../../data.js";

export function GameGrid() {
	const gridElement = document.createElement('table');

	const gridSize = getGridSizeSettings();

	for (let y = 0; y < gridSize.y; y++) {
		const row = document.createElement('tr');

		for (let x = 0; x < gridSize.x; x++) {
			const cell = document.createElement('td');

			if (x === getGoogleCoords().x && y === getGoogleCoords().y) {
				cell.append(Google());
			}

			if (x === getPlayer1Coords().x && y === getPlayer1Coords().y) {
				cell.append(Player(1));
			}

			if (x === getPlayer2Coords().x && y === getPlayer2Coords().y) {
				cell.append(Player(2));
			}

			row.append(cell);

			// --------------------- CSS -------------------------------
			if (getGridSizeSettings().x > 6 && getGridSizeSettings().y > 6) {
				cell.style.width = '70px';
				cell.style.height = '70px';
			}
			// --------------------- CSS -------------------------------
		}
		gridElement.append(row);
	}



	return gridElement;
}
