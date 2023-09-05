// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   id: "",
//   isLoading: false,
//   error: "",
//   isLiked: false,
//   token: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUser(state) {
//       state.isLoading = true;
//     },
//     setUserSuccess(state, action) {
//       state.users = action.payload;
//       state.isLoading = false;
//       state.error = "";
//       state.isLiked = false;
//       state.token = action.payload.token;
//     },
//     setUserError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     signOutUser(state) {
//       state.token = null;
//     },
//     likedUser(state, action) {
//       state.users = action.payload;
//       state.isLoading = false;
//       state.error = "";
//       state.isLiked = true;
//       state.token = action.payload.token;
//     },
//   },
// });

// export const { setUser, setUserSuccess, setUserError, signOutUser, likedUser } =
//   userSlice.actions;

// export default userSlice.reducer;
