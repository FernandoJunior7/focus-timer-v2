import { startBtn, resetBtn, addTimeBtn, subtractTimeBtn, minutes, seconds } from "./elements.js";
import { start, reset, addTime, subtractTime } from './actions.js';

startBtn.addEventListener('click', start); 

resetBtn.addEventListener('click', reset);

addTimeBtn.addEventListener('click', addTime);

subtractTimeBtn.addEventListener('click', subtractTime);
