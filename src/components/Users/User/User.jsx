import phone from "../../../assets/telephone.svg";
import email from "../../../assets/envelope.svg";
import { useNavigate, useParams } from "react-router-dom";
import fetchSingleUser from "../../../api/fetchSingleUser";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../../../store/slices/authSlice";
import { userPageText } from "../../../helpers/User/userPageConstants";
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
  const tokenData = useSelector((state) => state.auth.token);

  const { id } = useParams();
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(deleteToken());
    navigate("/signin");
  };

  useEffect(() => {
    if (tokenData) {
      const getUser = async () => {
        try {
          const userResult = await fetchSingleUser(id);
          setUser(userResult);
        } catch {
          setUser({});
        }
      };
      getUser({});
    } else {
      navigate("/signin");
    }
    // eslint-disable-next-line
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
            <HeaderText>{userPageText.header}</HeaderText>
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
            {userPageText.phone}
          </UserCardContact>
          <UserCardContact>
            <UserContactIcon>
              <img src={email} alt="envelope" />
            </UserContactIcon>
            {user.email}
          </UserCardContact>
        </UserCardContactWrapper>
        <UserCardText>{userPageText.description}</UserCardText>
      </UserCardWrapper>
    </>
  );
};

export default User;
