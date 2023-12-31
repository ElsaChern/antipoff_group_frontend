import { useNavigate } from "react-router-dom";
import heart from "../../assets/heart.svg";
import heartFill from "../../assets/heart-fill.svg";
import down from "../../assets/box-arrow-right.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { like, unlike } from "../../store/slices/likesSlice";
import { useSelector } from "react-redux";
import fetchUsers from "../../api/fetchUsers";
import { usersPageText } from "../../helpers/Users/usersPageConstants";
import { deleteToken } from "../../store/slices/authSlice";
import {
  DownIcon,
  Header,
  HeaderBtn,
  HeaderIcon,
  HeaderText,
  HeaderTextWrapper,
  HeaderTitle,
  InputHeartIcon,
  ShowMoreBtn,
  ShowMoreBtnWrapper,
  UserCard,
  UserCardPhoto,
  UserCardText,
  UserWrapper,
} from "./styled";

const Users = () => {
  const likesData = useSelector((state) => state.likes.data);
  const tokenData = useSelector((state) => state.auth.token);

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (tokenData) {
      const getUsers = async () => {
        try {
          const usersResult = await fetchUsers(currentPage);
          setUsers([...users, ...usersResult]);
        } catch (e) {
          setError(true);
          setUsers([]);
        }
      };
      getUsers();
    } else {
      navigate("/signin");
    }
    // eslint-disable-next-line
  }, [currentPage]);

  const handleClickShowMore = () => {
    setCurrentPage((prevstate) => prevstate + 1);
  };

  const toggleLike = (e, userId) => {
    if (likesData[userId] === true) {
      dispatch(unlike(userId));
    } else {
      dispatch(like(userId));
    }
  };

  const signOut = () => {
    dispatch(deleteToken());
    navigate("/signin");
  };

  return (
    <>
      <Header>
        <HeaderBtn onClick={signOut}>Выход</HeaderBtn>
        <HeaderIcon onClick={signOut}></HeaderIcon>
        <HeaderTextWrapper>
          <HeaderTitle>{usersPageText.title}</HeaderTitle>
          <HeaderText>{usersPageText.header}</HeaderText>
        </HeaderTextWrapper>
      </Header>
      <UserWrapper>
        {error ? (
          <p>Ошибка получения данных</p>
        ) : (
          users.map((user) => {
            return (
              <UserCard key={user.id}>
                <a href={`/users/${user.id}`}>
                  <UserCardPhoto src={user.avatar} key={user.id} />
                </a>
                <UserCardText>
                  {user.first_name} {user.last_name}
                </UserCardText>
                <InputHeartIcon
                  onClick={(event) => {
                    toggleLike(event, user.id);
                  }}
                >
                  {
                    <img
                      src={likesData[user.id] ? heartFill : heart}
                      alt="heart"
                    />
                  }
                </InputHeartIcon>
              </UserCard>
            );
          })
        )}
      </UserWrapper>
      <ShowMoreBtnWrapper>
        {users.length < 12 && (
          <ShowMoreBtn onClick={handleClickShowMore}>
            Показать еще
            <DownIcon> {<img src={down} alt="arrow" />}</DownIcon>
          </ShowMoreBtn>
        )}
      </ShowMoreBtnWrapper>
    </>
  );
};

export default Users;
