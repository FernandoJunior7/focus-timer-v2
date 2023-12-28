import state from '../state.js';
import pomodoro from '../pomodoro-settings.js';
import stopwatch from '../stopwatch-settings.js';
import * as timer from '../timer.js';
import * as elements from '../elements.js';

export function start() {
	if (state.isCounting) return;
	elements.buttonPress.play();
	state.isCounting = true;
	if (state.currentMode === 'pomodoro') {
		timer.startCountdown();
	}
	if (state.currentMode === 'stopwatch') {
		timer.startCountUp();
	}
}

export function reset() {
	elements.buttonPress.play();
	state.isCounting = false;
	if (state.currentMode === 'pomodoro') {
		timer.updateDisplay();
	}
	if (state.currentMode === 'stopwatch') {
		timer.timerBreak();
	}
}

export function addTime() {
	if (state.isCounting || state.isBreak || pomodoro.minutes === 60) {
		timer.timerError();
		return;
	}
	pomodoro.minutes += 5;
	elements.minutes.textContent = pomodoro.minutes.toString().padStart(2, '0');
}

export function subtractTime() {
	if (state.isCounting || state.isBreak || pomodoro.minutes === 25) {
		timer.timerError();
		return;
	}
	pomodoro.minutes -= 5;
	elements.minutes.textContent = pomodoro.minutes.toString().padStart(2, '0');
}
