import { Link, useNavigate } from "react-router-dom";
import FormComponent from "../../../helpers/Form/Form";
import Input from "../../../helpers/Input/Input";
import { useEffect, useState } from "react";
import validation from "../SignUp/validation";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../store/slices/authSlice";
import authRequest from "../../../api/authRequest";

const SignUp = () => {
  const tokenData = useSelector((state) => state.auth.token);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [errors, setErrors] = useState({});
  const [requestError, setRequestError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validation(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length) {
      return;
    }

    try {
      const result = await authRequest(
        "register",
        values.email,
        values.password,
      );
      dispatch(setToken(result.token));
      navigate("/users");
    } catch (err) {
      setRequestError(
        err.message || ` ${err.slice(5)}. Enter a specific e-mail`,
      );
    }
  };

  useEffect(() => {
    if (tokenData) {
      navigate("/users");
    }
    // eslint-disable-next-line
  }, [tokenData]);

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
