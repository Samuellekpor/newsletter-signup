const container = document.querySelector(".container");
const success_page = document.querySelector(".success-page");
const submit_btn = document.querySelector(".submit-button");
const emailInput = document.getElementById("email");
const enteredEmail = emailInput.innerHTML;

function validateEmail(email) {
  //regular expression for email validation
  const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

submit_btn.addEventListener('click', () => {
  const isValidEmail = validateEmail(enteredEmail);

  if(isValidEmail) {
    container.style.display = 'none';
    success_page.style.display = 'block';
  } else {

  }
})
