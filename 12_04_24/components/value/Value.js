import {data} from "../../data/dataCounter.js";

export function Value() {
	const valueElement = document.createElement('div');
	valueElement.innerText = data.count;
	return valueElement;
}