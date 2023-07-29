const button = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", onClick);

function onClick(evt) {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
