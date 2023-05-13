const buttonChangeEl = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

buttonChangeEl.addEventListener("click", handleSubmit);

function handleSubmit(event) {
bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanColorEl.textContent = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
