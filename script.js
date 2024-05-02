const start = document.getElementById('start');
const time = document.getElementById('time');
const stop = document.getElementById('stop');
const restart = document.getElementById('restart');
const intervalButton = document.getElementById('interval');
const intervalTimes = document.getElementById('interval-times');

let interval;
let i = 0;
let intervalCounter = 1; // Счетчик для нумерации интервалов

start.onclick = () =>{
    start.disabled = true;
    interval = setInterval(()=>{
        i += 0.01;
        time.textContent = i.toFixed(2);
    }, 10);
};

stop.onclick = () =>{
    clearInterval(interval);
    start.disabled = false;
};

restart.onclick = () => {
    clearInterval(interval);
    start.disabled = false;
    i = 0;
    time.textContent = i;
    intervalCounter = 1; // Сбрасываем счетчик при рестарте
    intervalTimes.innerHTML = ''; // Очищаем контейнер для интервальных времен
};

intervalButton.onclick = () => {
    const currentTime = parseFloat(time.textContent); // Получаем текущее время из элемента 'time'
    const intervalTimeElement = document.createElement('div'); // Создаем новый элемент для отображения интервального времени
    intervalTimeElement.textContent = `Интервал ${intervalCounter}: ${currentTime.toFixed(2)}`; // Задаем текст элементу с нумерацией
    intervalTimes.appendChild(intervalTimeElement); // Добавляем элемент в контейнер для интервальных времен
    intervalCounter++; // Увеличиваем счетчик
};

