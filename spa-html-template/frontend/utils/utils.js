var Utils = {
  // SPAPP
  init__spapp: function () {
    var app = $.spapp({
      defaultView: "#home",
      templateDir: "../frontend/pages/",
      pageNotFound: "error_404",
      reloadView: true,
    });
    app.run();
  },
  block_ui: function (element) {
    $(element).block({
      message: '<div class="spinner-border text-primary" role="status"></div>',
      css: {
        backgroundColor: "transparent",
        border: "0",
      },
      overlayCSS: {
        backgroundColor: "#000",
        opacity: 0.25,
      },
    });
  },
  unblock_ui: function (element) {
    $(element).unblock();
  },
};
