import state from '../state.js';

const themeButton = document.querySelector('#toggle-theme button');
const rootElement = document.documentElement;

themeButton.addEventListener('click', function () {
	rootElement.classList.toggle('light');
	rootElement.classList.toggle('dark');

	state.currentTheme = state.themeMap[state.currentTheme];
	console.log(state.currentTheme);
});
