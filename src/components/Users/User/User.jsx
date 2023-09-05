import phone from "../../../assets/telephone.svg";
import email from "../../../assets/envelope.svg";
import { useNavigate, useParams } from "react-router-dom";
import fetchSingleUser from "../../../api/fetchSingleUser";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedOut } from "../../../store/slices/authSlice";
import {
  Header,
  HeaderBtnBack,
  HeaderBtnOut,
  HeaderIconBack,
  HeaderIconOut,
  HeaderText,
  HeaderTextWrapper,
  HeaderTitle,
  UserCarInfo,
  UserCardContact,
  UserCardContactWrapper,
  UserCardText,
  UserCardWrapper,
  UserContactIcon,
  UserPhoto,
} from "./styled";

const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(setLoggedOut());
    navigate("/signin");
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const userResult = await fetchSingleUser(id);
        setUser(userResult);
      } catch {
        setUser({});
      }
    };
    getUser({});
  }, [id]);

  return (
    <>
      <Header>
        <HeaderBtnBack onClick={() => navigate(-1)}>Назад</HeaderBtnBack>
        <HeaderIconBack onClick={() => navigate(-1)}></HeaderIconBack>
        <UserCarInfo>
          <HeaderTextWrapper>
            <HeaderTitle>
              {user.first_name} {user.last_name}
            </HeaderTitle>
            <HeaderText>Партнер</HeaderText>
          </HeaderTextWrapper>
          <UserPhoto src={user.avatar} />
        </UserCarInfo>
        <HeaderBtnOut onClick={signOut}>Выход</HeaderBtnOut>
        <HeaderIconOut onClick={signOut}></HeaderIconOut>
      </Header>
      <UserCardWrapper>
        <UserCardContactWrapper>
          <UserCardContact>
            <UserContactIcon>
              <img src={phone} alt="phone" />
            </UserContactIcon>
            8 (800) 555-35-35
          </UserCardContact>
          <UserCardContact>
            <UserContactIcon>
              <img src={email} alt="envelope" />
            </UserContactIcon>
            {user.email}
          </UserCardContact>
        </UserCardContactWrapper>
        <UserCardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute iruredolor in.
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </UserCardText>
      </UserCardWrapper>
    </>
  );
};

export default User;
