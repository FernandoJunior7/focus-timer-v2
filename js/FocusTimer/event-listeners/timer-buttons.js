import * as actions from '../actions/timer-actions.js';
import { timerControls } from '../elements.js';

export function registerTimerControls() {
	timerControls.addEventListener('click', (event) => {
		const button = event.target.closest('button');
		
		if (!button) return;

		const action = button.dataset.action;

		if (typeof actions[action] != 'function') return;

		actions[action]();
	});
}
