// Usage: FormValidation.validate('#form_id', {rules}, function(data){console.log(data)})
// Description: This is a utility function to validate the form and submit the form data to the server.
// The function takes three arguments:
// 1. form_selecter: The form selecter to validate
// 2. form_rules: The rules to validate the form
// 3. form_submint_handler_callback: The callback function to handle the form submit

var FormValidation = {
  serialize_form: function (form) {
    let result = {};
    // Serialize the form data
    $.each(form.serializeArray(), function () {
      // Check if the key already exists
      result[this.name] = this.value;
    });
    return result;
  },
  validate: function (
    form_selecter,
    form_rules,
    form_submint_handler_callback
  ) {
    var form_object = $(form_selecter);
    var error = $(".alert-danger", form_object);
    var success = $(".alert-success", form_object);

    $(form_object).validate({
      rules: form_rules,
      submitHandler: function (form, event) {
        event.preventDefault();
        success.show();
        error.hide();
        if (form_submint_handler_callback) {
          form_submint_handler_callback(
            FormValidation.serialize_form(form_object)
          );
        }
      },
    });
  },
};
