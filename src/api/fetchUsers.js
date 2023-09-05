// import userSlice from "../store/slices/userSlice";
import apiInstance from "./apiInstance";

const fetchUrl = "/users";

// const fetchUsers =
//   (page = 1) =>
//   async (dispatch) => {
//     const params = { page };
//     // try {
//     dispatch(userSlice.actions.setUser());
//     const response = await apiInstance.get(fetchUrl, params);
//     dispatch(userSlice.actions.setUserSuccess(response.data.data));
//     // } catch (e) {
//     //   dispatch(userSlice.actions.setUserError("Ошибка"));
//     // }
//   };
// export default fetchUsers;

const fetchUsers = async (page) => {
  const params = { page };
  const response = await apiInstance.get(fetchUrl, params);

  return response.data.data;
};

export default fetchUsers;
