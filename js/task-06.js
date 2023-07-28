const validationInput = document.querySelector("#validation-input")

// console.log(validationInput);

validationInput.addEventListener("blur", onBlur)

function onBlur(evt) {
    const inputBlur = evt.currentTarget;
    
   if (inputBlur.value.trim().length === Number(validationInput.dataset.length)) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid")
    } else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid")
        
    }
    
}

