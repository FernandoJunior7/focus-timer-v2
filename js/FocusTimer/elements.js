// TOGGLE THEME

export const themeControl = document.getElementById('toggle-theme');

// TOGGLE MODE

export const modeControl = document.getElementById('select-mode');

export const pomodoro = document.getElementById('pomodoro-button');
export const stopwatch = document.getElementById('stopwatch-button');
export const timer = document.getElementById('timer');

// TIMER

export const minutes = document.getElementById('minutes');
export const seconds = document.getElementById('seconds');
export const timeError = document.getElementById('time-error');
export const errorMessage = document.querySelector('#time-error span');

// TIMER BUTTONS

export const timerControls = document.getElementById('timer-controls');

// SOUND BUTTONS

export const soundControls = document.getElementById('sounds-controls');

// SOUNDS

export const forestSound = new Audio('./assets/forest.wav');
export const rainSound = new Audio('./assets/rain.wav');
export const coffeeShopSound = new Audio('./assets/coffeeShop.wav');
export const fireSound = new Audio('./assets/fire.wav');
export const kitchenTimer = new Audio('./assets/kitchenTimer.mp3');
export const buttonPress = new Audio('./assets/buttonPress.wav');

forestSound.loop = true;
rainSound.loop = true;
coffeeShopSound.loop = true;
fireSound.loop = true;
