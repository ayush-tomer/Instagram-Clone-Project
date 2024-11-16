// Forgot Password Form Validation
function validateForgotPasswordForm(event) {
    event.preventDefault();  // Prevent form submission to stay on the page

    const email = document.querySelector('#email').value;
    const emailError = document.querySelector('#email-error');
    let valid = true;

    // Reset error messages
    emailError.textContent = '';

    // Email Validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    // If form is valid, redirect to the login page
    if (valid) {
        // Here you can implement your API call to send a password reset link, for now, we simulate the success
        alert('Password reset link sent to ' + email); // Simulate reset link sent

        window.location.href = "index.html";  // Redirect to login page after successful submission
    }
}

// Event Listener for Forgot Password Form
document.querySelector('#forgot-password-form').addEventListener('submit', validateForgotPasswordForm);