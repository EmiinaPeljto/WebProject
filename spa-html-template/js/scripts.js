// Add this import statement
/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

var app = $.spapp({
  defaultView: "#home",
  templateDir: "./scss/",
  pageNotFound: "error_404",
  reloadView: true,
});

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// Fetch categories from JSON file
function getCategories(baseURL) {
  fetch(baseURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const categories = document.querySelector("#category");
      categories.innerHTML = "";
      data.forEach((category) => {
        const categoryElement = `
        <div class="service-item">
          <div class="w3-card-4">
            <a href="#services"  style="text-decoration:none">
              <img class="images" src="${category.image}">
            </a>
          <div class="w3-container w3-center">
            <a href="#services"  style="text-decoration:none">
              <h4>${category.title}</h4>
            </a>
          </div>
          </div>
        </div>
        `;
        categories.innerHTML += categoryElement;
      });
    });
}

// Fetch team members from JSON file

function getTeamMembers(baseURL) {
  fetch(baseURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const teamMembers = document.querySelector("#team-members");
      teamMembers.innerHTML = "";
      console.log("teamMembers" + teamMembers);
      data.forEach((member) => {
        const memberElement = `
        <div class="col-lg-4">
        <div class="team-member">
          <img
            class="mx-auto rounded-circle"
            src="${member.image}"
            alt="..."
          />
          <h4>${member.name}</h4>
          <p class="text-muted">${member.position}</p>
          <a
            class="btn btn-dark btn-social mx-2"
            href="${member.x}"
            aria-label="Parveen Anand Twitter Profile"
            target="_blank"
            ><i class="fab fa-twitter"></i
          ></a>
          <a
            class="btn btn-dark btn-social mx-2"
            href="${member.facebook}"
            aria-label="Parveen Anand Facebook Profile"
            target="_blank"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a
            class="btn btn-dark btn-social mx-2"
            href="${member.linkedin}"
            aria-label="Parveen Anand LinkedIn Profile"
            target="_blank"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </div>
        `;
        teamMembers.innerHTML += memberElement;
      });
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
  getCategories("../json/categories.json");
  getTeamMembers("get_team_members.php");
});

//ValidationForAppointmentForm
app.route({
  view: "makeApp",
  load: "makeApp.html",
  onCreate: function () {},
  onReady: function () {
    validateAppForm();
  },
});
function validateAppForm() {
  // Fetching values from all input fields and storing them in variables
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var service = document.getElementById("service").value;
  var time = document.getElementById("time").value;
  var date = document.getElementById("date").value;

  // Validation for empty fields
  if (
    firstName == "" ||
    lastName == "" ||
    email == "" ||
    phoneNumber == "" ||
    service == "Select A Service" ||
    time == "" ||
    date == ""
  ) {
    alert("Please fill all required fields");
    return false;
  }

  // Validation for email format
  var emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return false;
  }

  // Validation for phone number format
  var phoneRegex = /^[0-9]+$/;
  if (!phoneRegex.test(phoneNumber)) {
    alert("Phone number should contain only digits");
    return false;
  }

  console.log("First Name: " + firstName);
  console.log("Last Name: " + lastName);
  console.log("Email: " + email);
  console.log("Phone Number: " + phoneNumber);
  console.log("Service: " + service);
  console.log("Time: " + time);
  console.log("Date: " + date);

  // If all validations pass, return true for form submission
  return true;
}

//ValidationForLoginForm
app.route({
  view: "login",
  load: "logIn.html",
  onCreate: function () {},
  onReady: function () {
    validateLoginForm();
  },
});

function validateLoginForm(event) {
  4;
  event.preventDefault(); // Prevent form submission

  // Reset previous error messages
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Fetch input values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate email
  if (!email) {
    document.getElementById("emailError").textContent = "Email is required";
    return;
  }

  // Validate password
  if (!password) {
    document.getElementById("passwordError").textContent =
      "Password is required";
    return;
  }

  // If both email and password are provided, log them to console
  console.log("Email:", email);
  console.log("Password:", password);
}

app.route({
  view: "signup",
  load: "signup.html",
  onCreate: function () {},
  onReady: function () {
    validateSignUpForm();
  },
});

function validateSignUpForm(event) {
  event.preventDefault(); // Prevent form submission

  // Reset previous error messages
  document.getElementById("firstNameError").textContent = "";
  document.getElementById("lastNameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  // Fetch input values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Validate first name
  if (!firstName) {
    document.getElementById("firstNameError").textContent =
      "First name is required";
    return;
  }

  // Validate last name
  if (!lastName) {
    document.getElementById("lastNameError").textContent =
      "Last name is required";
    return;
  }

  // Validate email
  if (!email) {
    document.getElementById("emailError").textContent = "Email is required";
    return;
  }

  // Validate phone number
  if (!phone) {
    document.getElementById("phoneError").textContent =
      "Phone number is required";
    return;
  }

  // Validate password
  if (!password) {
    document.getElementById("passwordError").textContent =
      "Password is required";
    return;
  }

  // Validate confirm password
  if (!confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Please confirm your password";
    return;
  }

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";
    return;
  }

  // If all validations pass, log the inputs to the console
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Password:", password);
}
