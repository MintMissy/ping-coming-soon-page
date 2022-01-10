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
        event.preventDefault();
        return false;
    }
    if (!validateEmail(email)) {
        setEmailErrorMessage('Please provide a valid email address');
        event.preventDefault();
        return false;
    }
    return true;
}
notifyForm.addEventListener('submit', validateForm);
