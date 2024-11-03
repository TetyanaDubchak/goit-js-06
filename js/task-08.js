const loginForm = document.querySelector(".login-form");


const handleForm = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const email = form.elements.email;
    const password = form.elements.password;

    if (email.value === '' || password.value === '') {
        return alert("Please fill in all the fields!");
    }

    const allValues = {
        [email.name]: email.value,
        [password.name]: password.value,
    }

    console.log(allValues);
    form.reset();
}

loginForm.addEventListener('submit', handleForm)