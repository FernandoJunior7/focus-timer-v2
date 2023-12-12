import { changeMode } from '../actions/mode-actions.js';
import { pomodoro, stopwatch } from '../elements/mode.js';

pomodoro.addEventListener('click', function () {
	changeMode();
});

stopwatch.addEventListener('click', function () {
	changeMode();
});
