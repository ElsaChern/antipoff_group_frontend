// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/userSlice";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import usersReducer from "./slices/usersSlice";
import authSlice from "./slices/authSlice";
import likesSlice from "./slices/likesSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    auth: authSlice,
    likes: likesSlice,
  },
});
