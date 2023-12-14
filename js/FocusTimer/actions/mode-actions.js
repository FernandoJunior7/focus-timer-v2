import { pomodoro, stopwatch, timer } from '../elements/mode.js';
import state from '../state.js';
import { updateDisplay } from '../timer.js';
import pomodoroSettings from '../pomodoro-settings.js';

export function changeMode() {
	changeClass();
	if (state.mode === 'pomodoro') {
		state.mode = 'stopwatch';
	} else {
		state.mode = 'pomodoro';
	}
	updateTimerDisplay();
}

function changeClass() {
	pomodoro.classList.toggle('selected');
	stopwatch.classList.toggle('selected');
	timer.classList.toggle('pomodoro');
	timer.classList.toggle('stopwatch');
}

export function updateTimerDisplay() {
	if (state.mode === 'pomodoro') {
		updateDisplay(pomodoroSettings.minutes, pomodoroSettings.seconds);
	} else {
		updateDisplay(0, 0);
	}
}
