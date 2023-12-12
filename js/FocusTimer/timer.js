import state from './state.js';
import { minutes, seconds } from './elements.js';

export function updateDisplay(minutesValue, secondsValue) {
  minutesValue = minutesValue ?? state.minutes;
  secondsValue = secondsValue ?? state.seconds;

  minutes.textContent = String(minutesValue).padStart(2, '0');
  seconds.textContent = String(secondsValue).padStart(2, '0');
}

export function countdown() {
  let minutesValue = parseInt(minutes.textContent);
  let secondsValue = parseInt(seconds.textContent);

  // parar quando chegar em 0
  if (minutesValue === 0 && secondsValue === 0) {
      kitchenTimer.play();
      state.isCounting = false;
      return;
  }

  // parar quando clicar no botão resetar (isCounting = false)
  if (!state.isCounting) {
      return;
  }

  if (secondsValue === 0) {
      minutesValue--;
      secondsValue = 59;
  } else {
      secondsValue--;
  }

  updateDisplay(minutesValue, secondsValue);
  
  setTimeout(countdown, 1000);
}