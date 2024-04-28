export function ButtonInc(someTitle, someOnClickHandler) {
	const buttonElement = document.createElement('button');
	buttonElement.innerText = someTitle;
	buttonElement.addEventListener('click', someOnClickHandler);
	return buttonElement;
}
