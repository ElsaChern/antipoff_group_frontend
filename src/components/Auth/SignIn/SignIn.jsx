import { Link, useNavigate } from "react-router-dom";
import FormComponent from "../../../helpers/Form/Form";
import Input from "../../../helpers/Input/Input";
import { useEffect, useState } from "react";
import validation from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../store/slices/authSlice";
import authRequest from "../../../api/authRequest";

const SignIn = () => {
  const tokenData = useSelector((state) => state.auth.token);

  const [values, setValues] = useState({
    email: "",
    password: "",
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
      const result = await authRequest("login", values.email, values.password);
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
        Впервые здесь? <Link to="/signup">Зарегистрируйтесь</Link>
      </span>
    </>
  );

  return (
    <FormComponent
      requestError={requestError}
      formtitle="Вход"
      onSubmit={handleSubmit}
      btnText="Войти"
      nav={nav}
    >
      <Input
        label="Электронная почта"
        type="email"
        name="email"
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
        hasIconHiding
        value={values.password}
        style={errors.password && { borderColor: "red" }}
        error={errors.password}
        placeholder="******"
        onChange={handleChange}
      />
    </FormComponent>
  );
};

export default SignIn;
