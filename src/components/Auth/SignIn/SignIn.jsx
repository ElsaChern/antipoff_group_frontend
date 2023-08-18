// import { Link, Navigate, useNavigate } from "react-router-dom";
import FormComponent from "../../../helpers/Form/Form";
import Input from "../../../helpers/Input/Input";
// import { useState } from "react";

const SignIn = () => {
  const nav = (
    <>
      <span>Впервые здесь?</span>
      {/* <Link to="/signup">Зарегистрируйтесь</Link> */}
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
      formtitle="Вход"
      onSubmit={handleSubmit}
      btnText="Войти"
      btnIsValid={false}
      nav={nav}
    >
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
    </FormComponent>
  );
};

export default SignIn;
