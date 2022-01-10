const emailInput = <HTMLInputElement>document.getElementById('email');
const emailErrorParagraph = document.getElementById('email-error');
const notifyForm = document.getElementById('notify-form');

const emailRegEx = /\S+@\S+\.\S+/;

function validateEmail(_email: string) {
  return emailRegEx.test(_email.toLocaleLowerCase());
}

function setEmailErrorMessage(message: string) {
  emailErrorParagraph.innerText = message;
}

function validateForm(event) {
  const email = emailInput.value;

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
