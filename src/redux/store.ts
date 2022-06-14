import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from "./reducer/userProfileReducer";
import userStatusReducer from "./reducer/userStatusReducer";

const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
    userStatus: userStatusReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
