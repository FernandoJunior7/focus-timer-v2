import state from './state.js';
import { minutes, seconds, resetBtn } from './elements.js';
import { kitchenTimer } from './sounds.js';

export function updateDisplay(minutesValue, secondsValue) {
  /**
   * Updates the display of the minutes and seconds on the timer.
   * 
   * @param {number} minutesValue - The value of the minutes to be displayed on the timer.
   * @param {number} secondsValue - The value of the seconds to be displayed on the timer.
   * @returns {void}
   */
  minutesValue = minutesValue ?? state.minutes;
  secondsValue = secondsValue ?? state.seconds;

  minutes.textContent = String(minutesValue).padStart(2, '0');
  seconds.textContent = String(secondsValue).padStart(2, '0');
}

export function countdown() {
  let minutesValue = parseInt(minutes.textContent);
  let secondsValue = parseInt(seconds.textContent);

  if (minutesValue === 0 && secondsValue === 0) {
    kitchenTimer.play();
    if (!state.isBreak) {
      state.isCounting = false;
      timerBreak();
    }
    resetBtn.click();
    return;
  }

  if (!state.isCounting) return;

  if (secondsValue === 0) {
    minutesValue--;
    secondsValue = 59;
  } else {
    secondsValue--;
  }

  updateDisplay(minutesValue, secondsValue);

  setTimeout(countdown, 1000);
}

export function timerBreak() {
  state.isBreak = true;
  let breakMinute = state.minutes / 5;

  minutes.textContent = String(breakMinute).padStart(2, '0');
  countdown();
}