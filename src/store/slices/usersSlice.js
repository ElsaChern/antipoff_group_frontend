import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [1, 2, 3, 4],
  },

  reducers: {
    setUsersData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setUsersData } = usersSlice.actions;
export default usersSlice.reducer;
