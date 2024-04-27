console.log("Script loaded");
var app = $.spapp({
  defaultView: "#home",
  templateDir: "./scss/",
  pageNotFound: "error_404",
  reloadView: true,
});

app.route({
  view: "about",
  load: "about.html",
  onCreate: function () {
    console.log("About is created");
  },
  onReady: function () {
    console.log("About is ready");
    console.log("constants", Constants.API_BASE_URL);
    fetchTeamMembers();
  },
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

//ValidationForContactForm
app.route({
  view: "contact",
  load: "contact.html",
  onCreate: function () {},
  onReady: function () {
    validateContactForm();
  },
});

function validateContactForm() {
  var fullName = document.getElementById("fullName").value.trim();
  var email = document.getElementById("email").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var message = document.getElementById("message").value.trim();

  // Validation for empty fields
  if (fullName == "" || email == "" || subject == "" || message == "") {
    alert("Please fill all required fields");
    return false;
  }

  // Validation for email format
  var emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format");
    return false;
  }

  console.log("Full Name:", fullName);
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);

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

app.route({
  view: "about",
  load: "about.html",
  onCreate: function () {
    console.log("About is created");
  },
  onReady: function () {
    console.log("About is ready");
    console.log("constants", Constants.API_BASE_URL);
    fetchTeamMembers("team_members-about");
  },
});

function fetchTeamMembers(container_id) {
  RestClient.get("get_team_members.php", function (data) {
    console.log("Rest client data: ", data);
    const teamContainer = document.getElementById(container_id);
    console.log("teamContainer", teamContainer);
    teamContainer.innerHTML = "";
    data.forEach((member) => {
      const memberElement = `
                      <div class="col-lg-3 col-md-6">
                          <div class="team card position-relative overflow-hidden border-0 mb-4">
                              <img class="card-img-top" src="${member.image}" alt="${member.name}">
                              <div class="card-body text-center p-0">
                                  <div class="team-text d-flex flex-column justify-content-center bg-light">
                                      <h5>${member.name}</h5>
                                      <i>${member.position}</i>
                                  </div>
                                  <div class="team-social d-flex align-items-center justify-content-center bg-dark">
                                      <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style="width: 36px; height: 36px;" href="${member.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                      <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style="width: 36px; height: 36px;" href="${member.x}" target="_blank"><i class="fab fa-twitter"></i></a>
                                      <a class="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style="width: 36px; height: 36px;" href="${member.ln}"target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                      <a class="btn btn-outline-primary rounded-circle text-center px-0" style="width: 36px; height: 36px;" href="${member.instagram}"target="_blank"><i class="fab fa-instagram"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  `;
      teamContainer.innerHTML += memberElement;
    });
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("../json/plans.json");
    const data = await response.json();
    const pricingCarousel = document.querySelector(".pricing-carousel");

    data.cards.forEach((card) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("bg-white");
      cardDiv.style.minHeight = "300px";

      const headerDiv = document.createElement("div");
      headerDiv.classList.add(
        "d-flex",
        "align-items-center",
        "justify-content-between",
        "border-bottom",
        "border-primary",
        "p-4"
      );

      const priceH1 = document.createElement("h1");
      priceH1.classList.add("display-4", "mb-0");

      const dollarSignSmall = document.createElement("small");
      dollarSignSmall.classList.add(
        "align-top",
        "text-muted",
        "font-weight-medium"
      );
      dollarSignSmall.style.fontSize = "22px";
      dollarSignSmall.style.lineHeight = "45px";
      dollarSignSmall.textContent = "$";

      const priceSpan = document.createElement("span");
      priceSpan.textContent = card.price;

      const perMonthSmall = document.createElement("small");
      perMonthSmall.classList.add(
        "align-bottom",
        "text-muted",
        "font-weight-medium"
      );
      perMonthSmall.style.fontSize = "16px";
      perMonthSmall.style.lineHeight = "40px";
      perMonthSmall.textContent = "/Mo";

      priceH1.appendChild(dollarSignSmall);
      priceH1.appendChild(priceSpan);
      priceH1.appendChild(perMonthSmall);

      const nameH5 = document.createElement("h5");
      nameH5.classList.add("text-primary", "text-uppercase", "m-0");
      nameH5.textContent = card.name;

      headerDiv.appendChild(priceH1);
      headerDiv.appendChild(nameH5);

      const featuresDiv = document.createElement("div");
      featuresDiv.classList.add("p-4");

      card.features.forEach((feature) => {
        const featureP = document.createElement("p");
        const checkIcon = document.createElement("i");
        checkIcon.classList.add("fa", "fa-check", "text-success", "mr-2");
        const featureSpan = document.createElement("span");
        featureSpan.textContent = feature;
        featureP.appendChild(checkIcon);
        featureP.appendChild(featureSpan);
        featuresDiv.appendChild(featureP);
      });

      cardDiv.appendChild(headerDiv);
      cardDiv.appendChild(featuresDiv);
      pricingCarousel.appendChild(cardDiv);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

// Function to fetch data from the JSON file
function fetchData() {
  return fetch("../json/prices.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Function to populate the table with data
function populateTable(data) {
  const tableBody = document.querySelector("#priceTable tbody");
  tableBody.innerHTML = ""; // Clear previous data

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
              <th scope="row">${item.id}</th>
              <td>${item.service}</td>
              <td>${item.price}</td>
          `;
    tableBody.appendChild(row);
  });
}

// Fetch data and populate the table
fetchData().then((data) => {
  if (data) {
    populateTable(data.pricelist);
  }
});
