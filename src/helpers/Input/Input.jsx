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
  const [isEyeClicked, setIsEyeClicked] = useState(true);

  useEffect(() => {
    if (!name.includes("password")) return;

    if (isEyeClicked) setPasswordType("password");
    if (!isEyeClicked) setPasswordType("text");
  }, [isEyeClicked, name]);

  const handleEye = () => {
    setIsEyeClicked(!isEyeClicked);
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
          style={style} /// ?
        />
        {hasIconHiding && (
          <InputIcon onClick={handleEye}>
            {<Icon src={isEyeClicked ? closeEye : openEye} alt="eye" />}
          </InputIcon>
        )}
        <ErrorField>{error}</ErrorField>
      </FormInputWrapper>
    </>
  );
};

export default Input;
