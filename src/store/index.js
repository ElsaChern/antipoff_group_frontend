import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import likesSlice from "./slices/likesSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    likes: likesSlice,
  },
});
