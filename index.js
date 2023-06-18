const container = document.querySelector(".container");
const success_page = document.querySelector(".success-page");
const submit_btn = document.querySelector(".submit-button");
const dismiss_btn = document.querySelector(".dismiss-button");
const error_message = document.querySelector(".error-message");
const emailInput = document.getElementById("email");
const emailField = document.querySelector(".the-email");
const form = document.querySelector(".small-form");

function validateEmail(email) {
  //regular expression for email validation
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(email);
}

submit_btn.addEventListener('click', (e) => {
  e.preventDefault();
  const enteredEmail = emailInput.value;
  const isValidEmail = validateEmail(enteredEmail);
  if(isValidEmail) {
    //hide the container and show the success_page
    container.style.display = 'none';
    success_page.style.display = 'block';
    emailField.innerHTML = enteredEmail;
  } else {
    emailInput.className = 'red';
    error_message.style.display = "block";
  }
})

dismiss_btn.addEventListener('click', () => {
  container.style.display = 'flex';
  success_page.style.display = 'none';
  emailInput.value = '';
  emailInput.classList.remove('red');
  error_message.style.display = "none";
})
