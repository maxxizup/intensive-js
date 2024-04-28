export const GAME_STATES = {
	SETTINGS: 'settings',
	IN_PROGRESS: 'in_progress',
	WIN: 'win',
	LOSE: 'lose'
}

const _data = {
	gameState: GAME_STATES.SETTINGS,
	settings: {
		gridSize: {
			x: 4,
			y: 4
		},
		pointsToWin: 5,
		pointsToLose: 5
	},
	pointsCount: 0,
	missCount: 0,
	time: new Date (),
	heroes: {
		google: {
			x: 0,
			y: 0,
		},
		player1: {},
		player2: {}
	},
}

let observer = () => {};

function changeGooglePos() {
	_data.heroes.google.x = getRandomInt(_data.settings.gridSize.x - 1);
	_data.heroes.google.y = getRandomInt(_data.settings.gridSize.y - 1);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

function stopGoogleJump() {
	clearInterval(jumpIntervalId);
}

let jumpIntervalId;
function runGoogleJump() {
	jumpIntervalId = setInterval(() => {
		changeGooglePos();
		_data.missCount++;
		if (_data.missCount === _data.settings.pointsToLose) {
			stopGoogleJump();
			_data.gameState = GAME_STATES.LOSE;
			console.log(_data.gameState)
		}
		observer();
	}, 1000)
}

// сеттеры
export function addEventListener (subscriber) {
	observer = subscriber;
}

export function setGridSize(x, y) {
	if (x < 1) throw new Error('Incorrect X grid size settings');
	if (y < 1) throw new Error('Incorrect Y grid size settings');

	_data.settings.gridSize.x = x;
	_data.settings.gridSize.y = y;
}

export function start() {
	_data.gameState = GAME_STATES.IN_PROGRESS;
	runGoogleJump();
	observer();
	console.log(_data.gameState)
}

export function playAgain() {
	_data.gameState = GAME_STATES.SETTINGS;

	_data.pointsCount = 0;
	_data.missCount = 0;

	observer();
	console.log(_data.gameState)
}

export function catchGoogle() {
	stopGoogleJump();

	_data.pointsCount++;

	if (_data.pointsCount === _data.settings.pointsToWin) {
		_data.gameState = GAME_STATES.WIN;
		console.log(_data.gameState)
	} else {
		changeGooglePos();
		runGoogleJump();
	}

	observer();
}

// геттеры
export function getPointsCount() {
	return _data.pointsCount;
}
export function getMissCount() {
	return _data.missCount;
}

export function getGoogleCoords() {
	return _data.heroes.google;
}
export function getGridSizeSettings () {
	return {..._data.settings.gridSize};
}

export function getGameState() {
	return _data.gameState;
}

