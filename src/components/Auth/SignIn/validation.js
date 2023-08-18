import { emailRegexp, errorsText } from "../../../helpers/Validation/constants";

const validation = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = errorsText.required;
  } else if (!values.email.match(emailRegexp)) {
    errors.email = errorsText.formatData;
  }

  if (!values.password) {
    errors.password = errorsText.required;
  }

  return errors;
};

export default validation;
