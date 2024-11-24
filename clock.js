
let interval;
let isRunning = false;

function startClock() {
    if (isRunning) return;
    isRunning = true;

    updateClock(); // Первоначальное обновление

    interval = setInterval(updateClock, 1000);
}

function pauseClock() {
    clearInterval(interval);
    isRunning = false;
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');

    // Расчет углов для поворота стрелок
    const hourAngle = 30 * (hours % 12) + 0.5 * minutes; // Часовая стрелка
    const minuteAngle = 6 * minutes + 0.1 * seconds; // Минутная стрелка
    const secondAngle = 6 * seconds; // Секундная стрелка

    // Установка поворота стрелок
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

// Обработчики событий для кнопок
document.getElementById('startButton').addEventListener('click', startClock);
document.getElementById('pauseButton').addEventListener('click', pauseClock);