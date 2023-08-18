import { useEffect, useState } from "react";
import openEye from "../../assets/open_eye.svg";
import closeEye from "../../assets/eye-slash.svg";
import {
  ErrorField,
  FormInput,
  FormInputWrapper,
  FormLabel,
  Icon,
  InputIcon,
} from "./styled";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  style,
  hasIconHiding = false,
  error,
}) => {
  const [passwordType, setPasswordType] = useState(type);
  const [passwordShown, setPasswordShown] = useState(false);

  useEffect(() => {
    if (!name.includes("password")) return;

    if (passwordShown) setPasswordType("text");
    if (!passwordShown) setPasswordType("password");
  }, [passwordShown, name]);

  const handleEye = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <FormInputWrapper>
        <FormInput
          type={name.includes("password") ? passwordType : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={30}
          style={style}
        />
        {hasIconHiding && (
          <InputIcon onClick={handleEye}>
            {<Icon src={passwordShown ? openEye : closeEye} alt="eye" />}
          </InputIcon>
        )}
        <ErrorField>{error}</ErrorField>
      </FormInputWrapper>
    </>
  );
};

export default Input;
