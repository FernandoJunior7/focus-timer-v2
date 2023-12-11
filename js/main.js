let isCounting = false;

// select mode button
const selectMode = document.getElementById('select-mode')
const pomodoro = document.getElementById('pomodoro-button');
const stopwatch = document.getElementById('stopwatch-button');

// timer
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// timer button

const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const addTimeBtn = document.getElementById('add-time');
const subtractTimeBtn = document.getElementById('subtract-time');

// themes button
const themeButton = document.querySelector('#toggle-theme button');
const rootElement = document.documentElement;

// sounds button

const forestBtn = document.getElementById('forest');
const rainBtn = document.getElementById('rain');
const coffeeShopBtn = document.getElementById('coffee-shop');
const fireBtn = document.getElementById('fire');

// sounds
const forestSound = new Audio('./assets/forest.wav');
const rainSound = new Audio('./assets/rain.wav');
const coffeeShopSound = new Audio('./assets/coffeeShop.wav');
const fireSound = new Audio('./assets/fire.wav');
const buttonPress = new Audio('./assets/buttonPress.wav');
const kitchenTimer = new Audio('./assets/kitchenTimer.mp3');

forestSound.loop = true;
rainSound.loop = true;
coffeeShopSound.loop = true;
fireSound.loop = true;

// TIMER FUNCTION 

function countdown() {
    let minutesValue = parseInt(minutes.innerHTML);
    let secondsValue = parseInt(seconds.innerHTML);


    // parar quando chegar em 0
    if (minutesValue === 0 && secondsValue === 0) {
        kitchenTimer.play();
        isCounting = false;
        return;
    }

    // parar quando clicar no botão resetar (isCounting = false)
    if (!isCounting) {
        return;
    }

    if (secondsValue === 0) {
        minutesValue--;
        secondsValue = 59;
    } else {
        secondsValue--;
    }

    minutes.innerHTML = minutesValue.toString().padStart(2, '0');
    seconds.innerHTML = secondsValue.toString().padStart(2, '0');
    
    setTimeout(countdown, 1000);
}

// SELECT MODE EVENT LISTENER

// acho que da pra melhorar, ta repetindo aqui
pomodoro.addEventListener('click', function() {
    pomodoro.classList.toggle('selected');
    stopwatch.classList.toggle('selected');
    selectMode.classList.toggle('pomodoro');
    selectMode.classList.toggle('stopwatch');
});

stopwatch.addEventListener('click', function() {
    pomodoro.classList.toggle('selected');
    stopwatch.classList.toggle('selected');
    selectMode.classList.toggle('pomodoro');
    selectMode.classList.toggle('stopwatch');
});

// TIMER EVENT LISTENER

startBtn.addEventListener('click', function() {
    if (isCounting) {
        return;
    }
    buttonPress.play();
    isCounting = true;
    countdown();
}); 

resetBtn.addEventListener('click', function() {
    buttonPress.play();
    isCounting = false;
    minutes.innerHTML = '25';
    seconds.innerHTML = '00';
});

addTimeBtn.addEventListener('click', function() {
    if (isCounting) {
        return;
    }
    let minutesValue = parseInt(minutes.innerHTML);
    minutesValue += 5;
    minutes.innerHTML = minutesValue.toString().padStart(2, "0");
});

subtractTimeBtn.addEventListener('click', function() {
    if(isCounting) {
        return;
    }
    let minutesValue = parseInt(minutes.innerHTML);
    minutesValue -= 5;
    minutes.innerHTML = minutesValue.toString().padStart(2, "0");
});

// THEMES EVENT LISTENER
themeButton.addEventListener('click', function () {
    rootElement.classList.toggle('light');
    rootElement.classList.toggle('dark');
});

// SOUNDS EVENT LISTENER

forestBtn.addEventListener('click', function () {
    if(forestBtn.classList.contains('active')) {
        forestSound.pause();
    } else {
        forestSound.play();
    }

    forestBtn.classList.toggle('active');
});

rainBtn.addEventListener('click', function () {
    if(rainBtn.classList.contains('active')) {
        rainSound.pause();
    } else {
        rainSound.play();
    }

    rainBtn.classList.toggle('active');
});

coffeeShopBtn.addEventListener('click', function () {
    if(coffeeShopBtn.classList.contains('active')) {
        coffeeShopSound.pause();
    } else {
        coffeeShopSound.play();
    }

    coffeeShopBtn.classList.toggle('active');
});

fireBtn.addEventListener('click', function () {
    if(fireBtn.classList.contains('active')) {
        fireSound.pause();
    } else {
        fireSound.play();
    }

    fireBtn.classList.toggle('active');
});