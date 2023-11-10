// Array to store user information
const users = [];

function signup() {
  // Get the input values
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  // Create a user object
  const user = {
    name: name,
    email: email,
    password: password,
  };

  // Add the user to the array
  users.push(user);

  // Clear the signup form
  document.getElementById("signup-name").value = "";
  document.getElementById("signup-email").value = "";
  document.getElementById("signup-password").value = "";
  console.log(users);
}

function login() {
  // Get the input values
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  // Check if the email and password match the stored values
  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (foundUser) {
    alert("Login successful!");
  } else {
    alert("Invalid email or password!");
  }

  // Clear the login form
  document.getElementById("login-email").value = "";
  document.getElementById("login-password").value = "";
}
function log() {
  const box1 = document.querySelector(".box1");
  const box2 = document.querySelector(".box1:last-child");

  box2.style.left = 0;
  box1.style.left = "-200%"
}
function sign() {
  const box1 = document.querySelector(".box1");
  const box2 = document.querySelector(".box1:last-child");

  box2.style.left = "200%";
  box1.style.left = "0%"
}
