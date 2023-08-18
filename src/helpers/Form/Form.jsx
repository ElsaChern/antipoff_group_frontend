import {
  Form,
  FormButton,
  FormControl,
  FormTitle,
  FormWrapper,
  LoginText,
  RequestErrorField,
} from "./styled";

const FormComponent = ({
  children,
  requestError,
  formtitle,
  onSubmit,
  btnText,
  btnIsValid,
  nav,
}) => {
  return (
    <FormWrapper>
      <RequestErrorField>{requestError}</RequestErrorField>
      <Form onSubmit={onSubmit} noValidate>
        <FormTitle>{formtitle}</FormTitle>
        <FormControl>{children}</FormControl>
        <FormButton type="submit">{btnText}</FormButton>
      </Form>
      <LoginText>{nav}</LoginText>
    </FormWrapper>
  );
};

export default FormComponent;
