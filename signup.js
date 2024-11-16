// Form Validation for Signup Page
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

    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';
    usernameError.textContent = '';
    confirmPasswordError.textContent = '';

    // Username Validation
    if (!username) {
        usernameError.textContent = "Username is required.";
        valid = false;
    }

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

    // Confirm Password Validation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        valid = false;
    }

    if (valid) {
        window.location.href = "index.html";
    }
}

// Event Listeners for Signup Page
document.querySelector('#signup-form').addEventListener('submit', validateSignupForm);