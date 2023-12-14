import * as sounds from '../elements/sounds.js';
import state from '../state.js';
import pomodoro from '../pomodoro-settings.js';
import * as timer from '../timer.js';
import { minutes } from '../elements/time.js';

export function start() {
	if (state.isCounting) return;
	sounds.buttonPress.play();
	state.isCounting = true;
	if (state.mode === 'pomodoro') {
		timer.countdown();
	} else {
		timer.countUp();
	}
}

export function reset() {
	sounds.buttonPress.play();
	state.isCounting = false;
	if (state.mode === 'stopwatch' && Number(minutes.textContent) > 0) {
		timer.timerBreak(minutes.textContent);
	} else {
		updateDisplay();
	}
}

export function addTime() {
	if (state.isCounting || state.isBreak || pomodoro.minutes === 60) {
		timer.timerError();
		return;
	}
	pomodoro.minutes += 5;
	minutes.textContent = pomodoro.minutes.toString().padStart(2, '0');
}

export function subtractTime() {
	if (state.isCounting || state.isBreak || pomodoro.minutes === 25) {
		timer.timerError();
		return;
	}
	pomodoro.minutes -= 5;
	minutes.textContent = pomodoro.minutes.toString().padStart(2, '0');
}
