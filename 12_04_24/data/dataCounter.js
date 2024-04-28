export const data = {
	title: 'Counter',
	count: 0
}

// setInterval( () => {
// 	data.count++;
// 	renderCounter(data)
// 	console.log(data.count)
// }, 1000);


let changeDataCallBack = function () {

}

export function setChangeDataCallBack(newCallBack) {
	changeDataCallBack = newCallBack
}
export function increaseCount() {
	data.count++;
	// renderCounter(data);
	changeDataCallBack()
}
export function decreaseCount() {
	data.count--;
	// renderCounter(data);
	changeDataCallBack()
}