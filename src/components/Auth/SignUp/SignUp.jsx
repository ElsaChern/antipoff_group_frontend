import { Link, useNavigate } from "react-router-dom";
import FormComponent from "../../../helpers/Form/Form";
import Input from "../../../helpers/Input/Input";
import { useState } from "react";
import validation from "../SignUp/validation";
import { useDispatch } from "react-redux";
import register from "../../../api/register";
import { setLoggedIn } from "../../../store/slices/authSlice";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [errors, setErrors] = useState({});
  const [requestError, setRequestError] = useState("");

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validation(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length) {
      return;
    }

    try {
      const result = await register(values.email, values.password);
      dispatch(setLoggedIn({ token: result.token }));
      navigate("/users");
    } catch (err) {
      setRequestError(` ${err.slice(5)}. Enter a specific e-mail`);
    }
  };

  const nav = (
    <>
      <span>
        Уже зарегистрированы? Выполните <Link to="/signin">вход</Link>
      </span>
    </>
  );

  return (
    <FormComponent
      requestError={requestError}
      formtitle="Регистрация"
      onSubmit={handleSubmit}
      btnText="Зарегистрироваться"
      btnIsValid={false}
      nav={nav}
    >
      <Input
        label="Имя"
        type="name"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Иван"
        style={errors.name && { borderColor: "red" }}
        error={errors.name}
      />
      <Input
        label="Электронная почта"
        type="email"
        name="email"
        autoComplete="on"
        value={values.email}
        onChange={handleChange}
        placeholder="example@mail.ru"
        style={errors.email && { borderColor: "red" }}
        error={errors.email}
      />
      <Input
        label="Пароль"
        type="password"
        name="password"
        autoComplete="on"
        hasIconHiding
        value={values.password}
        style={errors.password && { borderColor: "red" }}
        error={errors.password}
        placeholder="******"
        onChange={handleChange}
      />
      <Input
        label="Подтвердите пароль"
        type="password"
        name="passwordConfirmation"
        autoComplete="on"
        hasIconHiding
        value={values.passwordConfirmation}
        onChange={handleChange}
        placeholder="******"
        style={errors.passwordConfirmation && { borderColor: "red" }}
        error={errors.passwordConfirmation}
      />
    </FormComponent>
  );
};

export default SignUp;
