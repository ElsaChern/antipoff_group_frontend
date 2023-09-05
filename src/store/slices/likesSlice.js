import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "likes",
  initialState: {
    data: {},
  },

  reducers: {
    like(state, action) {
      state.data[action.payload] = true;
    },
    unlike(state, action) {
      state.data[action.payload] = false;
    },
  },
});

export const { like, unlike } = likeSlice.actions;
export default likeSlice.reducer;
