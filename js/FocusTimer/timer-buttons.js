import * as timer from './timer.js';
import { startBtn, resetBtn, addTimeBtn, subtractTimeBtn, minutes, seconds } from "./elements.js";
import * as sounds from './sounds.js';
import state from './state.js';


startBtn.addEventListener('click', function() {
  if (state.isCounting) {
      return;
  }
  sounds.buttonPress.play();
  state.isCounting = true;
  timer.countdown();
}); 

resetBtn.addEventListener('click', function() {
  sounds.buttonPress.play();
  state.isCounting = false;
  minutes.textContent = String(state.minutes).padStart(2, '0');
  seconds.textContent = String(state.seconds).padStart(2, '0');
});

addTimeBtn.addEventListener('click', function() {
  if (state.isCounting) {
      return;
  }
  let minutesValue = parseInt(minutes.textContent);
  minutesValue += 5;
  minutes.textContent = minutesValue.toString().padStart(2, "0");
});

subtractTimeBtn.addEventListener('click', function() {
  if(state.isCounting) {
      return;
  }
  let minutesValue = parseInt(minutes.textContent);
  minutesValue -= 5;
  minutes.textContent = minutesValue.toString().padStart(2, "0");
});
