const dataStart = document.querySelector("[data-start]");
const dataStop = document.querySelector("[data-stop]");
const bodyRandom = document.querySelector("body");

let timerAll = null;

dataStart.addEventListener("click", onStart);
dataStop.addEventListener("click", offStart);
dataStop.disabled = true;

function onStart() {
    timerAll = setInterval(getBgColor, 800)

    dataStart.disabled = true;
    dataStop.disabled = false;
}

function offStart() {
    clearInterval(timerAll);

    dataStart.disabled = false;
    dataStop.disabled = true;

}


function getBgColor() {
    bodyRandom.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}