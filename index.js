const container = document.querySelector(".container");
const success_page = document.querySelector(".success-page");
const submit_btn = document.querySelector(".submit-button");
const error_message = document.querySelector(".error-message");
const emailInput = document.getElementById("email");
const emailField = document.querySelector(".the-email");
const enteredEmail = emailInput.innerHTML;
const form = document.querySelector(".small-form");

function validateEmail(email) {
  //regular expression for email validation
  const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

submit_btn.addEventListener('click', (e) => {
  const isValidEmail = validateEmail(enteredEmail);

  if(isValidEmail) {
    container.style.display = 'none';
    success_page.style.display = 'block';
    emailField.innerHTML = enteredEmail;
    console.log(enteredEmail);
  } else {
    emailInput.className = 'red';
    error_message.style.display = "block";
  }
})
