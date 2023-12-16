import * as actions from '../actions/mode-actions.js';
import { modeControl } from '../elements.js';

export function registerModeControls() {
	modeControl.addEventListener('click', (event) => {
		const button = event.target.closest('button');

		if (!button) return;

		const action = button.dataset.action;

		if (typeof actions[action] != 'function') return;

		actions[action]();
	});
}
