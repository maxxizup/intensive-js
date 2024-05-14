import {GAME_STATES, getGameState, movePlayer, MOVING_DIRECTIONS} from "../../data.js";
import {ResultPanel} from "./ResultPanel/result-panel.component.js";
import {GameGrid} from "./GameGrid/game-grid.component.js";
import {Selectors} from "./Settings/Selectors/selectors.component.js";
import {Settings} from "./Settings/settings.component.js";
import {Win} from "./Win/win.component.js";
import {Lose} from "./Lose/lose.component.js";

window.addEventListener('keyup', (event) => {
	switch (event.code) {
		case "ArrowLeft": {
			movePlayer(1, MOVING_DIRECTIONS.LEFT)
			break;
		}
		case "ArrowRight": {
			movePlayer(1, MOVING_DIRECTIONS.RIGHT)
			break;
		}
		case "ArrowUp": {
			movePlayer(1, MOVING_DIRECTIONS.UP)
			break;
		}
		case "ArrowDown": {
			movePlayer(1, MOVING_DIRECTIONS.DOWN)
			break;
		}
		case "KeyA": {
			movePlayer(2, MOVING_DIRECTIONS.LEFT)
			break;
		}
		case "KeyD": {
			movePlayer(2, MOVING_DIRECTIONS.RIGHT)
			break;
		}
		case "KeyW": {
			movePlayer(2, MOVING_DIRECTIONS.UP)
			break;
		}
		case "KeyS": {
			movePlayer(2, MOVING_DIRECTIONS.DOWN)
			break;
		}
	}

})

export function Game() {
	const element = document.createElement('div');
	element.classList.add('container');

	const gameState = getGameState();

	switch (gameState) {
		case GAME_STATES.IN_PROGRESS: {
			element.append(ResultPanel(), GameGrid());
			break;
		}
		case GAME_STATES.SETTINGS: {
			element.append(Selectors(), Settings());
			// element.append(Settings());
			break;
		}
		case GAME_STATES.WIN: {
			element.append(Win());
			break;
		}
		case GAME_STATES.LOSE: {
			element.append(Lose());
			break;
		}
		default: {
			throw new Error ('Not supported State')
		}
	}
	return element;
}