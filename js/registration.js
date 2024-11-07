document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorText = document.getElementById("errorText");

    if (password !== confirmPassword) {
      errorText.textContent = "Пароли не совпадают";
      errorText.style.display = "block";
      document.getElementById("confirmPassword").style.borderColor = "red";
    } else {
      errorText.style.display = "none";
      document.getElementById("confirmPassword").style.borderColor = "#ddd";
      alert("Регистрация успешна!");
    }
  });
