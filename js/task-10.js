
const btnCreate = document.querySelector('.js-create');
const btnDestroy = document.querySelector('.js-destroy');
const input = document.querySelector('.js-input');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', handlerCreate);
btnDestroy.addEventListener('click', handlerDestroy);

let size = 20;

function handlerCreate() {
  const count = Number(input.value);
  
  const elements = [];

  for (let i = 0; i < count; i += 1){
    size += 10;
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.background = getRandomHexColor();

    input.value = 0;
    elements.push(div);
  }
  boxes.append(...elements);
}

function handlerDestroy() {
  boxes.innerHTML = "";
  size = 20;
  input.value = 0;
}








function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
