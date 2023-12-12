import {
	startBtn,
	resetBtn,
	addTimeBtn,
	subtractTimeBtn,
} from '../elements/timer-buttons.js';
import {
	start,
	reset,
	addTime,
	subtractTime,
} from '../actions/timer-actions.js';

startBtn.addEventListener('click', start);

resetBtn.addEventListener('click', reset);

addTimeBtn.addEventListener('click', addTime);

subtractTimeBtn.addEventListener('click', subtractTime);
