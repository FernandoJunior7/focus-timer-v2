import { soundControls } from '../elements.js';
import * as actions from '../actions/sound-actions.js';

// TODO: MAKE A CODE TO REGISTER ALL CONTROLS IN ONE FUNCTION USING THE DATASET
export function registerSoundControls() {
	soundControls.addEventListener('click', (event) => {
		const button = event.target.closest('button');

		if (!button) return;

		const action = button.dataset.action;

		if (typeof actions[action] != 'function') return;

		actions[action](button);
	});
}
