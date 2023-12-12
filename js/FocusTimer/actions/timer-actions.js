import * as sounds from '../elements/sounds.js';
import state from '../state.js';
import pomodoro from '../pomodoro-settings.js';
import * as timer from '../timer.js';
import { minutes, seconds } from '../elements/time.js';

export function start() {
	if (state.isCounting) return;
	sounds.buttonPress.play();
	state.isCounting = true;
	timer.countdown();
}

export function reset() {
	sounds.buttonPress.play();
	state.isCounting = false;
	minutes.textContent = String(pomodoro.minutes).padStart(2, '0');
	seconds.textContent = String(pomodoro.seconds).padStart(2, '0');
}

// TODO: A MODAL ERROR DISPLAYING IT CANNOT BE ABOVE 60 MINUTES
export function addTime() {
	if (state.isCounting || pomodoro.minutes === 60) return;
	pomodoro.minutes += 5;
	minutes.textContent = pomodoro.minutes.toString().padStart(2, '0');
}

// TODO: A MODAL ERROR DISPLAYING IT CANNOT BE UNDER 25 MINUTES
export function subtractTime() {
	if (state.isCounting || pomodoro.minutes === 25) return;
	pomodoro.minutes -= 5;
	minutes.textContent = pomodoro.minutes.toString().padStart(2, '0');
}
