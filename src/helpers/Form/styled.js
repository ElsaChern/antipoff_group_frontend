import styled from "styled-components";

const FormWrapper = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  min-width: 500px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 16px;

  @media only screen and (max-width: 550px) {
    min-width: 300px;
  }
`;

const FormTitle = styled.span`
  font-size: 20px;
  line-height: 23px;
`;

const FormControl = styled.div`
  margin-top: 16px;
`;

const RequestErrorField = styled.p`
  color: red;
  font-size: 16px;
`;

const FormButton = styled.button`
  width: 100%;
  background: ${(props) =>
    props.disabled ? "rgba(238, 238, 238, 1)" : "rgba(81, 38, 137, 1)"};
  border: ${(props) =>
    props.disabled
      ? "1px solid rgba(81, 38, 137, 0,5)"
      : "1px solid rgba(81, 38, 137, 1)"};
  border-radius: 8px;
  color: ${(props) =>
    props.disabled ? "rgba(81, 38, 137, 0,5)" : "rgba(255, 255, 255, 1)"};
  padding: 8px 12px;
  height: 48px;
  margin-top: 8px;
  font-size: 16px;
  line-height: 23px;
`;

const LoginText = styled.p`
  margin-top: 8px;
  font-size: 16px;
  line-height: 23px;
`;

export {
  Form,
  FormButton,
  FormControl,
  FormTitle,
  FormWrapper,
  LoginText,
  RequestErrorField,
};
