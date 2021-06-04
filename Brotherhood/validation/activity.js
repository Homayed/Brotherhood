const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateActivityInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.wannabe = !isEmpty(data.wannabe) ? data.wannabe : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Student Title or Job Title field is required";
  }

  if (Validator.isEmpty(data.wannabe)) {
    errors.wannabe = "Want to be/Current Job field is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
