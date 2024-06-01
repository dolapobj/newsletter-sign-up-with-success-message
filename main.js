const form = document.getElementById("form");
const dismissButton = document.getElementById("dismiss-button");
const successMessage = document.getElementById("success");
const newsletterContent = document.getElementById("main-content");

//submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const errorMessage = document.getElementById("email-error");

  console.log(email);

  if (!validateEmail(email)) {
    errorMessage.style.display = "block";
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    emailInput.style.color = "hsl(4, 100%, 67%)";
    emailInput.style.backgroundColor = "hsl(4, 100%, 95%)";
  } else {
    newsletterContent.style.display = "none";
    successMessage.style.display = "block";
    const userEmail = document.getElementById("user-email");
    userEmail.textContent = email + ".";
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// dismiss message

dismissButton.addEventListener("click", (e) => {
    successMessage.style.display = "none";
  newsletterContent.style.display = "block";
  const mainContent = document.getElementById("main-content")
  mainContent.style.display = 'flex';
});
