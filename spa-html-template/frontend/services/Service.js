var ServicesService = {
  getServices: function () {
    RestClient.get("services", function (data) {
      console.log(data);
      const facialTreatments = data.filter((item) => item.category_id === "1");
      const bodyTreatments = data.filter((item) => item.category_id === "2");
      const massageTreatments = data.filter((item) => item.category_id === "3");

      ServicesService.populateServices(facialTreatments, "facial_treatment");
      ServicesService.populateServices(bodyTreatments, "body_treatment");
      ServicesService.populateServices(massageTreatments, "massage_treatment");
    });
  },
  populateServices: function (treatments, sectionId) {
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
  },
};
