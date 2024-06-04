var TeamService = {
  getTeameMembers: function () {
    RestClient.get(
      "team",
      function (data) {
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
              <span>${member.position}</span>
            </div>
          </div>
        </div>
            `;
          teamMembers.innerHTML += memberElement;
        });
      },
      function (error) {
        console.error("Error fetching categories: " + error.message);
      }
    );
  },
};
