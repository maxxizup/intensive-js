import {addEventListener} from "./data.js";
import {Game} from "./components/Game/game.component.js";

export function rerender () {
	const rootElement = document.getElementById('root');

	rootElement.innerHTML = '';

	rootElement.append(Game());
}

rerender();

addEventListener(rerender);

/*
TODO 1: FIX ALL COMPONENTS WITH INNER.HTML ❌
TODO 2: DO PERFECT HTML CODE ❌
TODO 3: THINK ABOUT SELECTORS COMPONENT REALIZATION ❌
TODO *: refactor code and make it ideal perfect
 */