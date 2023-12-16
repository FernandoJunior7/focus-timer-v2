import state from '../state.js';

export function toggleTheme() {
	const rootElement = document.documentElement;

	rootElement.classList.toggle('light');
	rootElement.classList.toggle('dark');

	state.currentTheme = state.themeMap[state.currentTheme];
}
