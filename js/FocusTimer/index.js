import * as timer from './timer.js';

export function start(minutes, seconds) {
  timer.updateDisplay(minutes, seconds);
}