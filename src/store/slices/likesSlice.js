import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "likes",
  initialState: {
    data: localStorage.getItem("likes")
      ? JSON.parse(localStorage.getItem("likes"))
      : {},
  },

  reducers: {
    like(state, action) {
      state.data[action.payload] = true;
      localStorage.setItem("likes", JSON.stringify(state.data));
    },
    unlike(state, action) {
      state.data[action.payload] = false;
      localStorage.setItem("likes", JSON.stringify(state.data));
    },
  },
});

export const { like, unlike } = likeSlice.actions;
export default likeSlice.reducer;
