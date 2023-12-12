import { pomodoro, stopwatch, timer } from '../elements/mode.js';

export function changeMode() {
	pomodoro.classList.toggle('selected');
	stopwatch.classList.toggle('selected');
	timer.classList.toggle('pomodoro');
	timer.classList.toggle('stopwatch');
}
