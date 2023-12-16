import * as sounds from '../elements.js';

export function playSound(button) {
	const sound = button.dataset.sound;

	if (button.classList.contains('active')) {
		sounds[sound].pause();
	} else {
		sounds[sound].play();
	}

	button.classList.toggle('active');
}
