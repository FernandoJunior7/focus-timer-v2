import state from './state.js';
import pomodoro from './pomodoro-settings.js';
import stopwatch from './stopwatch-settings.js';
import { reset } from './actions/timer-actions.js';
import { timeError, errorMessage } from './elements.js';

export function updateDisplay(minutesValue, secondsValue) {
	/**
	 * Updates the display of the minutes and seconds on the timer.
	 *
	 * @param {number} minutesValue - The value of the minutes to be displayed on the timer.
	 * @param {number} secondsValue - The value of the seconds to be displayed on the timer.
	 * @returns {void}
	 */

	if (!state.isCounting) {
		if (state.currentMode === 'pomodoro') {
			minutesValue = minutesValue ?? pomodoro.minutes;
			secondsValue = secondsValue ?? pomodoro.seconds;
		} else {
			minutesValue = 0;
			secondsValue = 0;
		}
	}

	minutes.textContent = String(minutesValue).padStart(2, '0');
	seconds.textContent = String(secondsValue).padStart(2, '0');
}

const MINUTE_IN_MILLISECONDS = 60000;
const SECOND_IN_MILLISECONDS = 1000;

export function startCountdown() {
	pomodoro.targetTime = new Date(
		Date.now() + pomodoro.minutes * MINUTE_IN_MILLISECONDS
	);
	countdown();
}

export function countdown() {
	const now = new Date();

	if (!state.isCounting) return;

	const timeDifference = pomodoro.targetTime - now;

	let minutesValue = Math.floor(timeDifference / MINUTE_IN_MILLISECONDS);
	let secondsValue = Math.floor(
		(timeDifference % MINUTE_IN_MILLISECONDS) / SECOND_IN_MILLISECONDS
	);

	if (timeDifference === 0) {
		try {
			kitchenTimer.play();
		} catch (error) {
			console.error('Failed to play kitchen timer sound:', error);
		}
		if (!state.isBreak) {
			state.isCounting = false;
			timerBreak();
		} else {
			state.isBreak = false;
		}
		reset();
		return;
	}

	updateDisplay(minutesValue, secondsValue);

	clearTimeout(state.countDownID);
	state.countDownID = setTimeout(countdown, 1000);
}

export function startCountUp() {
	stopwatch.startTime = new Date();
	countUp();
}

export function countUp() {
	const now = new Date();

	const timeDifference = now - stopwatch.startTime;

	let minutesValue = Math.floor(timeDifference / 60000);
	let secondsValue = Math.floor((timeDifference % 60000) / 1000);

	if (!state.isCounting) return;

	updateDisplay(minutesValue, secondsValue);

	clearTimeout(state.countUpID);
	state.countUpID = setTimeout(countUp, 1000);
}

// TODO: FIX TIMER BREAK (NOW USING THE DATE OBJECT)
export function timerBreak(currentMinutes) {
	let breakMinute;

	state.isBreak = true;

	if (state.mode === 'pomodoro') {
		breakMinute = pomodoro.minutes / 5;
	} else {
		breakMinute = Number(currentMinutes) / 5;
	}

	minutes.textContent = String(breakMinute).padStart(2, '0');
	seconds.textContent = '00';
	countdown();
}

export function timerError() {
	let message;

	if (state.isCounting || state.isBreak) {
		message = `Não é permitido adicionar ou subtrair tempo enquanto o timer está ativo`;
	}
	if (pomodoro.minutes === 25) {
		message = `Não é permitido o timer possuir menos que ${pomodoro.minutes} minutos`;
	}
	if (pomodoro.minutes === 60) {
		message = `Não é permitido o timer possuir mais que ${pomodoro.minutes} minutos`;
	}

	timeError.classList.remove('hide');
	errorMessage.textContent = message;

	setTimeout(() => {
		timeError.classList.add('hide');
	}, 10 * SECOND_IN_MILLISECONDS);
}
