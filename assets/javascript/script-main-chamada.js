const newsletterForm = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const successMessage = document.getElementById("success-message");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  if (!emailValue || !validateEmail(emailValue)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  successMessage.style.display = "block";
  emailInput.value = "";

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
