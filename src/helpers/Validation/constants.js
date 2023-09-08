const emailRegexp =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const errorsText = {
  required: "Поле не может быть пустым",
  formatData: "Неверный формат",
  passwordConfirmation: "Пароли не совпадают",
};

export { emailRegexp, errorsText };
