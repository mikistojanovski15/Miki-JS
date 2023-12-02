function register() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (password === confirmPassword) {
    var message = "Registration Successful!\n\n";
    message += "Name: " + firstName + " " + lastName + "\n";
    message += "Email: " + email;
    alert(message);
  } else {
    alert("Passwords do not match. Please try again.");
  }
}
