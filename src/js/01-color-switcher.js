const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let colorInterval = null;
// const btnStartExamin = btnStart.disabled = false;
// const btnStopExamin = btnStop.disabled = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

function onStart() {
   colorInterval = setInterval(() => {
        document.querySelector('body').style.backgroundColor = getRandomHexColor();
   }, 1000);
    examinationStart();
};

function onStop() {
    clearInterval(colorInterval);
    examinationStop();
};

function examinationStart() {
    btnStart.disabled = true;
    btnStop.disabled = false;
};

function examinationStop() {
    btnStart.disabled = false;
    btnStop.disabled = true;
};