function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;

let intervalId = null;

function backgroundColorSwitcher() {
  body.style.backgroundColor = getRandomHexColor();
}

startBtn.addEventListener('click', function () {
  intervalId = setInterval(backgroundColorSwitcher, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener('click', function () {
  clearInterval(intervalId);
  startBtn.disabled = false;
});
