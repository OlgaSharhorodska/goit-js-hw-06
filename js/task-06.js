const validationInput = document.getElementById("validation-input")

// console.log(validationInput);

validationInput.addEventListener("blur", onBlur)

function onBlur(evt) {
    const inputBlur = evt.currentTarget;
    
    if (inputBlur.value.trim().lenght === Number(inputBlur.dataset.lenght)){
        validationInput.classList.remove("invalid")
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.remove("valid")
        validationInput.classList.add("invalid");
    }
    
}

