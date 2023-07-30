const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.target.elements;

    const formData = {
        email: email.value,
        password: password.value
    }

    if (email.value === "" || password.value === "") {
        return console.log("Заповніть логін та пароль!");
    }
    // console.log(`Ваш логін ${email.value}, ваш пароль ${password.value}`);
    console.log(formData);
    
    evt.currentTarget.reset();
}
