import { pomodoro, stopwatch, timer } from './elements.js';

pomodoro.addEventListener('click', function() {
  pomodoro.classList.toggle('selected');
  stopwatch.classList.toggle('selected');
  timer.classList.toggle('pomodoro');
  timer.classList.toggle('stopwatch');
});

stopwatch.addEventListener('click', function() {
  pomodoro.classList.toggle('selected');
  stopwatch.classList.toggle('selected');
  timer.classList.toggle('pomodoro');
  timer.classList.toggle('stopwatch');
});