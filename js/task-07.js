const inputElement = document.querySelector('#font-size-control')
const textElement = document.querySelector("#text")

const changeSize = () => {
    textElement.style.fontSize = inputElement.value + "px"
}

inputElement.addEventListener("input", changeSize)