const adminUser = { name: "admin", password: "1234" };

// Sign Up function (multiple users)
function signup(event) {
  event.preventDefault();
  const name = document.getElementById("signupName").value;
  const phone = document.getElementById("signupPhone").value;
  const password = document.getElementById("signupPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ name, phone, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Sign Up successful! You can now login.");
}

// Login function
function login(event) {
  event.preventDefault();
  const name = document.getElementById("loginName").value;
  const password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Admin login
  if (name === adminUser.name && password === adminUser.password) {
    let output = "<h3>All Signed Up Users:</h3><ul>";
    users.forEach(u => {
      output += "<li>" + u.name + " (" + u.phone + ")</li>";
    });
    output += "</ul><p><strong>Total Users:</strong> " + users.length + "</p>";
    document.getElementById("welcomeMessage").innerHTML = output;
    return;
  }

  // Normal user login
  const foundUser = users.find(u => u.name === name && u.password === password);
  if (foundUser) {
    document.getElementById("welcomeMessage").innerText = "Hello, " + foundUser.name + "!";
  } else {
    alert("Invalid login details!");
  }
}
