import styled from "styled-components";
import logOut from "../../../assets/log-out.svg";
import back from "../../../assets/arrow-left.svg";

const Header = styled.div`
  background-color: rgba(81, 38, 137, 1);
  color: rgba(248, 248, 248, 1);
`;

const HeaderBtnBack = styled.button`
  position: absolute;
  top: 40px;
  left: 120px;
  background-color: rgba(81, 38, 137, 1);
  color: rgba(248, 248, 248, 1);
  border: 1px solid #f8f8f8;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;

  @media only screen and (max-width: 1000px) {
    left: 70px;
  }

  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

const HeaderIconBack = styled.button`
  display: none;

  @media only screen and (max-width: 890px) {
    display: block;
    background-image: url("${back}");
    position: absolute;
    top: 25px;
    left: 50px;
    padding: 15px;
    background-color: rgba(81, 38, 137, 1);
    border: none;
  }

  @media only screen and (max-width: 500px) {
    top: 15px;
    left: 20px;
  }
`;

const HeaderTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 660px) {
    align-items: center;
  }
`;

const UserCarInfo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-left: 200px;

  @media only screen and (max-width: 1080px) {
    margin-left: 170px;
  }

  @media only screen and (max-width: 1000px) {
    margin-left: 120px;
  }

  @media only screen and (max-width: 890px) {
    margin-left: 50px;
  }

  @media only screen and (max-width: 660px) {
    flex-direction: column;
    margin: 0;
    align-items: center;
  }
`;

const UserPhoto = styled.img`
  margin: 39px;
  width: 185px;
  height: 185px;
  background-size: cover;
  border-radius: 100px;

  @media only screen and (max-width: 660px) {
    margin: 0;
    margin-bottom: 64px;
  }
`;

const HeaderTitle = styled.p`
  margin-bottom: 5px;
  font-size: 65px;
  line-height: 75px;

  @media only screen and (max-width: 1080px) {
    font-size: 55px;
  }

  @media only screen and (max-width: 800px) {
    font-size: 36px;
  }

  @media only screen and (max-width: 660px) {
    line-height: 42px;
  }
`;

const HeaderText = styled.p`
  font-size: 20px;
  line-height: 23px;

  @media only screen and (max-width: 660px) {
    margin: 16px;
  }
`;

const HeaderBtnOut = styled.button`
  position: absolute;
  top: 40px;
  right: 120px;
  background-color: rgba(81, 38, 137, 1);
  color: rgba(248, 248, 248, 1);
  border: 1px solid #f8f8f8;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;

  @media only screen and (max-width: 1000px) {
    right: 70px;
  }

  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

const HeaderIconOut = styled.button`
  display: none;

  @media only screen and (max-width: 890px) {
    display: block;
    background-image: url("${logOut}");
    position: absolute;
    top: 25px;
    right: 50px;
    padding: 15px;
    background-color: rgba(81, 38, 137, 1);
    border: none;
  }

  @media only screen and (max-width: 500px) {
    top: 15px;
    right: 20px;
  }
`;

const UserCardWrapper = styled.div`
  margin: 49px 80px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;

  @media only screen and (max-width: 1000px) {
    display: block;
  }
`;

const UserCardText = styled.p`
  font-size: 16px;
  max-width: 630px;
  line-height: 25px;
`;

const UserCardContactWrapper = styled.div`
  width: 250px;
  font-size: 16px;
`;

const UserCardContact = styled.p`
  margin-bottom: 25px;
`;

const UserContactIcon = styled.span`
  padding-right: 10px;
`;

export {
  Header,
  HeaderBtnBack,
  HeaderIconBack,
  UserCarInfo,
  UserPhoto,
  HeaderTextWrapper,
  HeaderTitle,
  HeaderText,
  HeaderBtnOut,
  HeaderIconOut,
  UserCardWrapper,
  UserCardText,
  UserCardContactWrapper,
  UserCardContact,
  UserContactIcon,
};
