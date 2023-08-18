import { errorsText, emailRegexp } from "../../../helpers/Validation/constants";

const validation = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = errorsText.required;
  }

  if (!values.email) {
    errors.email = errorsText.required;
  } else if (!values.email.match(emailRegexp)) {
    errors.email = errorsText.formatData;
  }

  if (!values.password) {
    errors.password = errorsText.required;
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = errorsText.required;
  }

  if (values.password && values.passwordConfirmation) {
    if (values.password !== values.passwordConfirmation) {
      errors.passwordConfirmation = errorsText.passwordConfirmation;
    }
  }
  return errors;
};

export default validation;
