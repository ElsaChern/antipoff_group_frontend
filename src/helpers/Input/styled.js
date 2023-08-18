import styled from "styled-components";

const FormLabel = styled.label`
  margin-bottom: 8px;
  display: block;
  font-size: 16px;
  line-height: 23px;
`;

const FormInputWrapper = styled.div`
  margin-bottom: 16px;
`;

const FormInput = styled.input`
  height: 48px;
  width: 95%;
  background-color: rgba(248, 248, 248, 1);
  border: 1px solid rgba(248, 248, 248, 1);
  border-radius: 8px;
  font-size: 16px;
  padding-left: 15px;
`;

const InputIcon = styled.span`
  position: relative;
  left: -35px;
  top: 20px;

  @media only screen and (max-width: 550px) {
    left: 270px;
    top: -35px;
  }
`;

const Icon = styled.img`
  position: absolute;
`;

const ErrorField = styled.p`
  color: red;
  font-size: 10px;
  margin: 0;
`;

export { ErrorField, FormInput, FormInputWrapper, FormLabel, Icon, InputIcon };
