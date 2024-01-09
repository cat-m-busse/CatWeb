// Multi-page website

// Account page

document.getElementById("accountBtn").addEventListener("click", btnClicked);

function btnClicked() {
  // HTML variables
  let username = document.getElementById("usernameInput");
  let contact = document.getElementById("contactInput");
  let password = document.getElementById("passwordInput");
  let confirm = document.getElementById("passwordConfirm");

  // If statement for blank input boxes
  // Start with username variable, red border if  <4 || >10 characters
  if (username.value.length < 4 || username.value.length > 10) {
    username.style.borderColor = "red";
  } else {
    username.style.borderColor = "green";
  }

  if (contact.value.length === 0) {
    contact.style.borderColor = "red";
  } else {
    contact.style.borderColor = "green";
  }

  if (password.value.length === 0) {
    password.style.borderColor = "red";
  } else {
    password.style.borderColor = "green";
  }

  if (confirm.value.length === 0) {
    confirm.style.borderColor = "red";
  } else if (confirm.value === password.value) {
    confirm.style.borderColor = "green";
  } else {
    confirm.style.borderColor = "red";
  }

  // create an if statement for pop up alert if all fields are green
  if (
    username.style.borderColor === "green" &&
    contact.style.borderColor === "green" &&
    password.style.borderColor === "green" &&
    confirm.style.borderColor === "green"
  ) {
    alert("Sign Up Successful!");
  } else {
    alert("Invalid Information, Please Try Again.");
  }
}
