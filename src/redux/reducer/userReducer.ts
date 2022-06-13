import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    accessToken: null,
    displayName: null,
    photoURL: null,
    uid: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
      state.uid = action.payload.uid;
    },
    clearUser: (state) => {
      state.accessToken = null;
      state.displayName = null;
      state.photoURL = null;
      state.uid = null;
    },
  },
});

export const { setUser, clearUser } = userReducer.actions;
export default userReducer.reducer;
