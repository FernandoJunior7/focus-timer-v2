const themeButton = document.querySelector('#toggle-theme button');
const rootElement = document.documentElement;

themeButton.addEventListener('click', function () {
	rootElement.classList.toggle('light');
	rootElement.classList.toggle('dark');
});
