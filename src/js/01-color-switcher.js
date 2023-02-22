const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.body;

let intervalId;

btnStart.addEventListener('click', function () {
  intervalId = setInterval(function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = '#' + randomColor;
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(intervalId);
});
