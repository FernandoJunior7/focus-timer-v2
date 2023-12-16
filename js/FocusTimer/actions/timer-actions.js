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
	} else {
		timer.startCountUp();
	}
}

export function reset() {
	elements.buttonPress.play();
	state.isCounting = false;
	if (
		state.currentMode === 'stopwatch' &&
		Number(elements.minutes.textContent) > 0
	) {
		stopwatch.endTime = new Date();
		timer.timerBreak(stopwatch.endTime);
	} else {
		timer.updateDisplay();
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
