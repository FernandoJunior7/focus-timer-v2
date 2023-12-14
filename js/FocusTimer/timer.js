import state from './state.js';
import pomodoro from './pomodoro-settings.js';
import { minutes, seconds, errorSpan, timeError } from './elements/time.js';
import { kitchenTimer } from './elements/sounds.js';
import { reset } from './actions/timer-actions.js';

export function updateDisplay(minutesValue, secondsValue) {
	/**
	 * Updates the display of the minutes and seconds on the timer.
	 *
	 * @param {number} minutesValue - The value of the minutes to be displayed on the timer.
	 * @param {number} secondsValue - The value of the seconds to be displayed on the timer.
	 * @returns {void}
	 */

	if (state.currentMode === 'pomodoro') {
		minutesValue = minutesValue ?? pomodoro.minutes;
		secondsValue = secondsValue ?? pomodoro.seconds;
	} else {
		minutesValue = 0;
		secondsValue = 0;
	}

	minutes.textContent = String(minutesValue).padStart(2, '0');
	seconds.textContent = String(secondsValue).padStart(2, '0');
}

export function countdown() {
	let minutesValue = parseInt(minutes.textContent);
	let secondsValue = parseInt(seconds.textContent);

	if (minutesValue === 0 && secondsValue === 0) {
		kitchenTimer.play();
		if (!state.isBreak) {
			state.isCounting = false;
			timerBreak();
		} else {
			state.isBreak = false;
		}
		reset();
		return;
	}

	if (!state.isCounting) return;

	if (secondsValue === 0) {
		minutesValue--;
		secondsValue = 59;
	} else {
		secondsValue--;
	}

	updateDisplay(minutesValue, secondsValue);

	setTimeout(countdown, 1000);
}

export function countUp() {
	let minutesValue = Number(minutes.textContent);
	let secondsValue = Number(seconds.textContent);

	if (!state.isCounting) return;

	if (secondsValue === 59) {
		minutesValue++;
		secondsValue = 0;
	} else {
		secondsValue++;
	}

	updateDisplay(minutesValue, secondsValue);

	setTimeout(countUp, 1000);
}

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
	} else if (pomodoro.minutes === 25) {
		message = `Não é permitido o timer possuir menos que ${pomodoro.minutes} minutos`;
	} else {
		message = `Não é permitido o timer possuir mais que ${pomodoro.minutes} minutos`;
	}

	timeError.classList.remove('hide');
	errorSpan.textContent = message;

	setTimeout(() => {
		timeError.classList.add('hide');
	}, 10000);
}
