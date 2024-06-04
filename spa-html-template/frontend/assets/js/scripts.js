var app = $.spapp({
  defaultView: "#home",
  templateDir: "../frontend/pages/",
  pageNotFound: "error_404",
  reloadView: true,
});

app.route({
  view: "services",
  load: "services.html",
  onCreate: function () {},
  onReady: function () {
    ServicesService.getServices();
  },
});
/*
function getServices() {
  $(document).ready(function () {
    $.ajax({
      url: "../frontend/json/services.json",
      dataType: "json",
      success: function (data) {
        const facialTreatments = data.filter(
          (item) => item.category === "facial"
        );
        const bodyTreatments = data.filter((item) => item.category === "body");
        const massageTreatments = data.filter(
          (item) => item.category === "massage"
        );

        populateServices(facialTreatments, "facial_treatment");
        populateServices(bodyTreatments, "body_treatment");
        populateServices(massageTreatments, "massage_treatment");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.error("Error: " + textStatus, errorThrown);
      },
    });
  });
}
function populateServices(treatments, sectionId) {
  const section = document.getElementById(sectionId);
  section.innerHTML = "";
  treatments.forEach((treatment) => {
    const treatmentElement = ` 
          <div class="card" >
          <img src="${treatment.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${treatment.title}</h5>
            <p class="card-text">
              ${treatment.description}
            </p>
            <a href="#app" class="btn btn-primary ">Make an Appointment</a>
            <span class="price">${treatment.price}$</span>
          </div>
        </div>
          `;
    section.innerHTML += treatmentElement;
  });
}*/

app.route({
  view: "home",
  load: "home.html",
  onCreate: function () {},
  onReady: function () {
    CategoryService.getCategories();
    TeamService.getTeameMembers();
  },
});

/*
function getTeamMemebr() {
  $(document).ready(function () {
    $.ajax({
      url: "../frontend/json/team.json",
      dataType: "json",
      success: function (data) {
        const teamMembers = document.querySelector("#teamMembers");
        teamMembers.innerHTML = "";
        data.forEach((member) => {
          const memberElement = `
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div class="member">
            <div class="member-img">
              <img src="${member.image}" class="img-fluid" alt="">
              <div class="social">
                <a href="${member.x}"><i class="bi bi-twitter-x"></i></a>
                <a href="${member.facebook}"><i class="bi bi-facebook"></i></a>
                <a href="${member.instagram}"><i class="bi bi-instagram"></i></a>
                <a href="${member.linkedin}"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h4>${member.name}</h4>
              <span>${member.position}r</span>
            </div>
          </div>
        </div>
            `;
          teamMembers.innerHTML += memberElement;
        });
      },
    });
  });
}

function getCategories() {
  $(document).ready(function () {
    $.ajax({
      url: "../frontend/json/categories.json",
      dataType: "json",
      success: function (data) {
        const categories = document.querySelector("#category");
        categories.innerHTML = "";
        data.forEach((category) => {
          const categoryElement = `
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 ">
          <div class="icon-box">
            <div class="icon"><i class="ri-stack-line" style="color: black;"></i>
            </div>
              <h4 class="title"><a href="#services">${category.title}</a></h4>
              <p class="description"> ${category.description}</p>
          </div>
        </div> `;
          categories.innerHTML += categoryElement;
        });
      },
    });
  });
}*/

app.run();
