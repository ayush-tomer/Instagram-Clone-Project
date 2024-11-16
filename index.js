// Form Validation for Login Page
function validateLoginForm(event) {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const emailError = document.querySelector('#email-error');
    const passwordError = document.querySelector('#password-error');

    let valid = true;

    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    // Email Validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    // Password Validation
    if (!password || password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
}

// Event Listeners for Login Page
document.querySelector('#login-form').addEventListener('submit', validateLoginForm);