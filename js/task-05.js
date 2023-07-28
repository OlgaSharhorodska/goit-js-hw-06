const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener("input", onInput);

function onInput(evt) {
    output.textContent = evt.currentTarget.value.trim();
    if (evt.currentTarget.value.trim() === "") {
        output.textContent = "Anonymous"
    }
}

