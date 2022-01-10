var emailInput = document.getElementById('email');
var emailErrorParagraph = document.getElementById('email-error');
var notifyForm = document.getElementById('notify-form');
var emailRegEx = /\S+@\S+\.\S+/;
function validateEmail(_email) {
    return emailRegEx.test(_email.toLocaleLowerCase());
}
function setEmailErrorMessage(message) {
    emailErrorParagraph.innerText = message;
}
function validateForm(event) {
    var email = emailInput.value;
    if (email === '' || email === null) {
        setEmailErrorMessage('Whoops! It looks like you forgot to add your email');
        emailInput.classList.add('email-input--error');
        event.preventDefault();
        return false;
    }
    if (!validateEmail(email)) {
        setEmailErrorMessage('Please provide a valid email address');
        emailInput.classList.add('email-input--error');
        event.preventDefault();
        return false;
    }
    emailInput.classList.remove('email-input--error');
    setEmailErrorMessage('');
    return true;
}
notifyForm.addEventListener('submit', validateForm);
