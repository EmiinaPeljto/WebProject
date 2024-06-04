var CategoryService = {
  getCategories: function () {
    RestClient.get(
      "categories",
      function (data) {
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
      function (error) {
        console.error("Error fetching categories: " + error);
      }
    );
  },
};
