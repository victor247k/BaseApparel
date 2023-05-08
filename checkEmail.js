const errorCricle = document.querySelector(".errorCricle");
const errorMessage = document.querySelector(".errorMessage");

const submitBtn = document.getElementById("submitBtn");
const emailInput = document.getElementById("email");

submitBtn.addEventListener("click", function () {
  if (emailInput.value.includes("@")) {
    errorCricle.style.display = "none";
    errorMessage.style.display = "none";
    emailInput.value = "";
    return;
  }
  errorCricle.style.display = "flex";
  errorMessage.style.display = "block";
  return;
});
