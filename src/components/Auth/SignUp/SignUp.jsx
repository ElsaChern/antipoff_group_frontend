// import { Link, Navigate, useNavigate } from "react-router-dom";
import FormComponent from "../../../helpers/Form/Form";
import Input from "../../../helpers/Input/Input";

const SignUp = () => {
  const nav = (
    <>
      <span>Уже зарегистрированы?</span>
      {/* <Link to={ROUTES.sign.in}>Войти</Link> */}
    </>
  );

  const handleChange = (e) => {
    e.preventDefault();
    console.log("Changed");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited");
  };

  return (
    <FormComponent
      requestError="Here might be an error"
      formtitle="Регистрация"
      onSubmit={handleSubmit}
      btnText="Зарегистрироваться"
      btnIsValid={false}
      nav={nav}
    >
      <Input
        label="Имя"
        type="text"
        name="name"
        value=""
        onChange={handleChange}
        placeholder="Vova"
      />
      <Input
        label="Электронная почта"
        type="email"
        name="email"
        autoComplete="on"
        value=""
        onChange={handleChange}
        placeholder="example@mail.ru"
      />
      <Input
        label="Пароль"
        type="password"
        name="password"
        autoComplete="on"
        hasIconHiding
        value="1234"
        // error={errors?.password}
        placeholder="******"
        onChange={handleChange}
      />
      <Input
        label="Подтвердите пароль"
        type="password"
        name="passwordConfirmation"
        autoComplete="on"
        hasIconHiding
        value=""
        // error={errors?.passwordConfirmation}
        placeholder="******"
        onChange={handleChange}
      />
    </FormComponent>
  );
};

export default SignUp;
