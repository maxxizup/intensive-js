export const GAME_STATES = {
	SETTINGS: 'settings',
	IN_PROGRESS: 'in_progress',
	WIN: 'win',
	LOSE: 'lose'
}

export const MOVING_DIRECTIONS = {
	UP: 'up',
	DOWN: 'down',
	LEFT: 'left',
	RIGHT: 'right',
}


const _data = {
	gameState: GAME_STATES.IN_PROGRESS,
	settings: {
		gridSize: {
			x: 4,
			y: 4
		},
		pointsToWin: 5,
		pointsToLose: 5,
		googleJumpInterval: 1000
	},
	pointsCount: {
		player1: 0,
		player2: 0
	},
	missCount: 0,
	time: new Date (),
	heroes: {
		google: {
			x: 0,
			y: 0,
		},
		player1: {x:1, y: 1},
		player2: {x:2, y: 2}
	},
}

let _observer = () => {};

function _changeGooglePos() {

	let newX = _data.heroes.google.x;
	let newY = _data.heroes.google.y;


	do {
		newX = _getRandomInt(_data.settings.gridSize.x - 1);
		newY = _getRandomInt(_data.settings.gridSize.y - 1);

		var newCoordsMatchWithPlayer1Coords = newX === _data.heroes.player1.x && newY === _data.heroes.player1.y
		var newCoordsMatchWithPlayer2Coords = newX === _data.heroes.player2.x && newY === _data.heroes.player2.y
		var newCoordsMatchWithGoogleCoords = newX === _data.heroes.google.x && newY === _data.heroes.google.y

	} while ( newCoordsMatchWithPlayer1Coords || newCoordsMatchWithPlayer2Coords || newCoordsMatchWithGoogleCoords ) // true

	_data.heroes.google.x = newX;
	_data.heroes.google.y = newY;
}

function _getRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

function _stopGoogleJump() {
	clearInterval(jumpIntervalId);
}

let jumpIntervalId;
function _runGoogleJump() {
	jumpIntervalId = setInterval(() => {
		_changeGooglePos();
		_data.missCount++;
		if (_data.missCount === _data.settings.pointsToLose) {
			_stopGoogleJump();
			_data.gameState = GAME_STATES.LOSE;
			console.log(_data.gameState)
		}
		_observer();
	}, 1000)
}

function catchGoogle(playerNumber) {
	_stopGoogleJump();

	_data.pointsCount[`player${playerNumber}`]++;

	if (_data.pointsCount[`player${playerNumber}`] === _data.settings.pointsToWin) {
		_data.gameState = GAME_STATES.WIN;
		console.log(_data.gameState)
	} else {
		_changeGooglePos();
		_runGoogleJump();
	}

	_observer();
}

function _checkIsCoordsInValidRange (coords) {
	const xIsCorrect = coords.x >= 0 && coords.x < _data.settings.gridSize.x;
	const yIsCorrect = coords.y >= 0 && coords.y < _data.settings.gridSize.y;

	return xIsCorrect && yIsCorrect;
}

function _coordsMatchWithOtherPlayer(coords) {
	const player1IsInThisCell = coords.x === _data.heroes.player1.x && coords.y === _data.heroes.player1.y;

	const player2IsInThisCell = coords.x === _data.heroes.player2.x && coords.y === _data.heroes.player2.y;

	return player1IsInThisCell || player2IsInThisCell
}

function _coordsMatchWithGoogle(coords) {
	const googleIsInThisCell = coords.x === _data.heroes.google.x && coords.y === _data.heroes.google.y;

	return googleIsInThisCell
}

// сеттеры
export function addEventListener (subscriber) {
	_observer = subscriber;
}

export function setGridSize(x, y) {
	if (x < 1) throw new Error('Incorrect X grid size settings');
	if (y < 1) throw new Error('Incorrect Y grid size settings');

	_data.settings.gridSize.x = x;
	_data.settings.gridSize.y = y;
}

export function setPointsToWin(value) {
	if (value < 1) throw new Error ('Incorrect win points value')

	_data.settings.pointsToWin = value;
}

export function setPointsToLose(value) {
	if (value < 1) throw new Error ('Incorrect lose points value')

	_data.settings.pointsToLose = value;
}

export function start() {
	if (_data.gameState !== GAME_STATES.SETTINGS) {
		throw new Error ('Game cannot be started from state: ' + _data.gameState)
	}

	_data.gameState = GAME_STATES.IN_PROGRESS;
	_runGoogleJump();
	_observer();
	console.log(_data.gameState)
}

export function playAgain() {
	_data.gameState = GAME_STATES.SETTINGS;

	_data.pointsCount.player1 = 0;
	_data.pointsCount.player2 = 0;
	_data.missCount = 0;

	_data.heroes.player1.x = 1;
	_data.heroes.player1.y = 1;

	_data.heroes.google.x = 0;
	_data.heroes.google.y = 0;

	_observer();
	console.log(_data.gameState)
}

export function movePlayer(playerNumber, direction) {
	validatePlayerNumberOrThrow(playerNumber);

	const newCoords = {..._data.heroes[`player${playerNumber}`]};
	switch (direction) {
		case MOVING_DIRECTIONS.LEFT: {
			newCoords.x--;
			break;
		}
		case MOVING_DIRECTIONS.RIGHT: {
			newCoords.x++;
			break;
		}
		case MOVING_DIRECTIONS.UP: {
			newCoords.y--;
			break;
		}
		case MOVING_DIRECTIONS.DOWN: {
			newCoords.y++;
			break;
		}
	}

	const isValid = _checkIsCoordsInValidRange(newCoords);
	if (!isValid) return;

	const isMatchWithOtherPlayer = _coordsMatchWithOtherPlayer(newCoords);
	if (isMatchWithOtherPlayer) return;

	const isMatchWithGoogle = _coordsMatchWithGoogle(newCoords);
	if (isMatchWithGoogle) {
		catchGoogle(playerNumber);
	}

	_data.heroes[`player${playerNumber}`] = newCoords;

	_observer();
}

// геттеры
export function getPointsCount(number) {
	return _data.pointsCount[`player${number}`];
}
export function getMissCount() {
	return _data.missCount;
}

export function getGoogleCoords() {
	return {
		..._data.heroes.google
	}
}

export function getPlayer1Coords() {
	return {
		..._data.heroes.player1
	}
}
export function getPlayer2Coords() {
	return {
		..._data.heroes.player2
	}
}

export function getGridSizeSettings () {
	return {
		..._data.settings.gridSize
	}
}

export function getGameState() {
	return _data.gameState;
}

export function validatePlayerNumberOrThrow (playerNumber) {
	if (![1, 2].some(number => number === playerNumber)) {
		throw new Error ('Incorrect player number');
	}
}
