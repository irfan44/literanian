import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    displayName: null,
    photoURL: null,
    uid: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
      state.uid = action.payload.uid;
    },
    clearUser: (state) => {
      state.displayName = null;
      state.photoURL = null;
      state.uid = null;
    },
  },
});

export const { setUser, clearUser } = userReducer.actions;
export default userReducer.reducer;
