import { changeMode } from '../actions/mode-actions.js';
import { pomodoro, stopwatch } from '../elements/mode.js';

pomodoro.addEventListener('click', changeMode);

stopwatch.addEventListener('click', changeMode);
