import {
	forestBtn,
	rainBtn,
	coffeeShopBtn,
	fireBtn,
} from '../elements/sounds-buttons.js';
import {
	forestSound,
	rainSound,
	coffeeShopSound,
	fireSound,
} from '../elements/sounds.js';

forestBtn.addEventListener('click', function () {
	if (forestBtn.classList.contains('active')) {
		forestSound.pause();
	} else {
		forestSound.play();
	}

	forestBtn.classList.toggle('active');
});

rainBtn.addEventListener('click', function () {
	if (rainBtn.classList.contains('active')) {
		rainSound.pause();
	} else {
		rainSound.play();
	}

	rainBtn.classList.toggle('active');
});

coffeeShopBtn.addEventListener('click', function () {
	if (coffeeShopBtn.classList.contains('active')) {
		coffeeShopSound.pause();
	} else {
		coffeeShopSound.play();
	}

	coffeeShopBtn.classList.toggle('active');
});

fireBtn.addEventListener('click', function () {
	if (fireBtn.classList.contains('active')) {
		fireSound.pause();
	} else {
		fireSound.play();
	}

	fireBtn.classList.toggle('active');
});
