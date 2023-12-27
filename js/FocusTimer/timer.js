import state from './state.js';
import pomodoro from './pomodoro-settings.js';
import stopwatch from './stopwatch-settings.js';
import { reset } from './actions/timer-actions.js';
import { timeError, errorMessage, kitchenTimer } from './elements.js';

export function updateDisplay(minutesValue, secondsValue) {
	/**
	 * Updates the display of the minutes and seconds on the timer.
	 *
	 * @param {number} minutesValue - The value of the minutes to be displayed on the timer.
	 * @param {number} secondsValue - The value of the seconds to be displayed on the timer.
	 * @returns {void}
	 */

	if (state.isCounting) return;

	if (state.currentMode === 'pomodoro') {
		minutesValue = minutesValue ?? pomodoro.minutes;
		secondsValue = secondsValue ?? pomodoro.seconds;
	} 

	minutes.textContent = String(minutesValue).padStart(2, '0');
	seconds.textContent = String(secondsValue).padStart(2, '0');
}

const MINUTE_IN_MILLISECONDS = 60000;
const SECOND_IN_MILLISECONDS = 1000;

export function startCountdown() {
	if (!state.isBreak) {
		pomodoro.targetTime = new Date(
			Date.now() + pomodoro.minutes * MINUTE_IN_MILLISECONDS
		);
	} else {
		pomodoro.targetTime = new Date(
			Date.now() + (pomodoro.minutes / 5) * MINUTE_IN_MILLISECONDS
		);
	}
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

	if (timeDifference <= 0) {
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
			reset();
		}
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

	let minutesValue = Math.floor(timeDifference / MINUTE_IN_MILLISECONDS);
	let secondsValue = Math.floor(
		(timeDifference % MINUTE_IN_MILLISECONDS) / SECOND_IN_MILLISECONDS
	);

	if (!state.isCounting) return;

	updateDisplay(minutesValue, secondsValue);

	clearTimeout(state.countUpID);
	state.countUpID = setTimeout(countUp, 1000);
}

// TODO: FIX TIMER BREAK (NOW USING THE DATE OBJECT)
export function timerBreak() {
	let breakMinute;

	state.isBreak = true;

	if (state.currentMode === 'pomodoro') {
		breakMinute = pomodoro.minutes;
	}
	if (state.currentMode === 'stopwatch') {
		const timeDifference = Date.now() - stopwatch.startTime;
		breakMinute = Math.floor(timeDifference / MINUTE_IN_MILLISECONDS);
	}

	breakMinute /= Math.floor(breakMinute / 5);

	updateDisplay(breakMinute);
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
