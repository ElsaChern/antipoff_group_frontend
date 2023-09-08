import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : "",
  },

  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("auth", JSON.stringify(state.token));
    },

    deleteToken(state) {
      state.token = "";
      localStorage.removeItem("auth", JSON.stringify(state.token));
    },
  },
});

export const { setToken, deleteToken } = authSlice.actions;
export default authSlice.reducer;
