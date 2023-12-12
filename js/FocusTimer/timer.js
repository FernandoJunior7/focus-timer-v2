import state from './state.js';
import pomodoro from './pomodoro-settings.js';
import { minutes, seconds } from './elements/time.js';
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
	minutesValue = minutesValue ?? pomodoro.minutes;
	secondsValue = secondsValue ?? pomodoro.seconds;

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

export function timerBreak() {
	state.isBreak = true;
	let breakMinute = state.minutes / 5;

	minutes.textContent = String(breakMinute).padStart(2, '0');
	countdown();
}
