import {Header} from "./header/Header.js";
import {Value} from "./value/Value.js";
import {ButtonInc} from "./button/ButtonInc.js";
import {decreaseCount, increaseCount} from "../data/dataCounter.js";

export function renderCounter() {

	document.body.innerHTML = ''

	// Header
	const header = Header();

	// Value
	const value = Value();

	// Button
	const buttonInc = ButtonInc('inc', increaseCount);
	const buttonDecr = ButtonInc('dec', decreaseCount);


	document.body.append(
		header,
		value,
		buttonInc,
		buttonDecr
	)
}