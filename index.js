function validateLoginForm(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const emailError = document.querySelector('#email-error');
    const passwordError = document.querySelector('#password-error');
    let valid = true;
    emailError.textContent = '';
    passwordError.textContent = '';
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }
    if (!password || password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    }
    if (valid) {
        window.location.href = "home.html";
    }
}
document.querySelector('#login-form').addEventListener('submit', validateLoginForm);