function validateSignupForm(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;
    const emailError = document.querySelector('#email-error');
    const passwordError = document.querySelector('#password-error');
    const usernameError = document.querySelector('#username-error');
    const confirmPasswordError = document.querySelector('#confirm-password-error');
    let valid = true;
    emailError.textContent = '';
    passwordError.textContent = '';
    usernameError.textContent = '';
    confirmPasswordError.textContent = '';
    if (!username) {
        usernameError.textContent = "Username is required.";
        valid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }
    if (!password || password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    }
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false;
    }
    if (valid) {
        window.location.href = "index.html";
    }
}
document.querySelector('#signup-form').addEventListener('submit', validateSignupForm);