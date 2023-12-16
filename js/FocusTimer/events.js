import { registerTimerControls } from './event-listeners/timer-buttons.js';
import { registerModeControls } from './event-listeners/select-mode.js';
import { registerSoundControls } from './event-listeners/sounds-buttons.js';
import { registerThemeControls } from './event-listeners/theme-buttons.js';

export function registerControls() {
	registerTimerControls();
	registerModeControls();
	registerSoundControls();
	registerThemeControls();
}
