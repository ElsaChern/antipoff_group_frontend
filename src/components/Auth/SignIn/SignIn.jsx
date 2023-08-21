import { Link, useNavigate } from "react-router-dom";
import FormComponent from "../../../helpers/Form/Form";
import Input from "../../../helpers/Input/Input";
import { useState } from "react";
import validation from "./validation";
import login from "../../../api/login";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
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
      const result = await login(values.email, values.password);
      dispatch(setUser({ token: result.token }));
      navigate("/users");
    } catch (err) {
      setRequestError(err);
    }
  };

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
        // autoComplete="on"
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
        // autoComplete="on"
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
