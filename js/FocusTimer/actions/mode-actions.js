import { pomodoro, stopwatch, timer } from '../elements.js';
import state from '../state.js';
import { updateDisplay } from '../timer.js';

export function toggleMode() {
	state.currentMode = state.modeMap[state.currentMode];
	changeClass();
	updateDisplay();
}

function changeClass() {
	pomodoro.classList.toggle('selected');
	stopwatch.classList.toggle('selected');
	timer.classList.toggle('pomodoro');
	timer.classList.toggle('stopwatch');
}
