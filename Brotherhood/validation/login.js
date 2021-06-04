const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.studentid = !isEmpty(data.studentid) ? data.studentid : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isNumeric(data.studentid)) {
    errors.studentid = "Student ID invalid";
  }

  if (Validator.isEmpty(data.studentid)) {
    errors.studentid = "Student ID field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
