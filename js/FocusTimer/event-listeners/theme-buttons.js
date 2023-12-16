import { themeControl } from '../elements.js';
import * as actions from '../actions/theme-actions.js';

export function registerThemeControls() {
	themeControl.addEventListener('click', (event) => {
		const button = event.target.closest('button');

		if (!button) return;

		const action = button.dataset.action;

		if (typeof actions[action] != 'function') return;

		actions[action]();
	});
}
