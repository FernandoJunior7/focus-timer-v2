import { pomodoro, stopwatch, timer } from '../elements/mode.js';
import state from '../state.js';
import { updateDisplay } from '../timer.js';

export function changeMode() {
	state.currentMode = state.modeMap[state.currentMode];
	console.log(state.currentMode);
	changeClass();
	updateDisplay();
}

function changeClass() {
	pomodoro.classList.toggle('selected');
	stopwatch.classList.toggle('selected');
	timer.classList.toggle('pomodoro');
	timer.classList.toggle('stopwatch');
}
