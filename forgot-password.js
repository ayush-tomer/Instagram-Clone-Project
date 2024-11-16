function validateForgotPasswordForm(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const emailError = document.querySelector('#email-error');
    let valid = true;
    emailError.textContent = '';
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }
    if (valid) {
        alert('Password reset link sent to ' + email);
        window.location.href = "index.html";
    }
}
document.querySelector('#forgot-password-form').addEventListener('submit', validateForgotPasswordForm);