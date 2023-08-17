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

const RequestErrorField = styled.p`
    color: red;
    font-size: 16px;
`;

const FormButton = styled.button`
    width: 100%;
    cursor: pointed;
    background: rgba(81, 38, 137, 1);
    border: 1px solid rgba(81, 38, 137, 1);
    border-radius: 8px;
    color: rgba(255, 255, 255, 1);
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
    FormWrapper,
    Form,
    FormTitle,
    FormControl,
    FormLabel,
    FormInputWrapper,
    FormInput,
    InputIcon,
    Icon,
    ErrorField,
    RequestErrorField,
    FormButton,
    LoginText
};
