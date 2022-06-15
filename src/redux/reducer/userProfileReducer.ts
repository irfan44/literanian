import { createSlice } from "@reduxjs/toolkit";

const userProfileReducer = createSlice({
  name: "userProfile",
  initialState: {
    uid: null,
    displayName: null,
    photoURL: null,
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
    },
    clearUserProfile: (state) => {
      state.uid = null;
      state.displayName = null;
      state.photoURL = null;
    },
  },
});

export const { setUserProfile, clearUserProfile } = userProfileReducer.actions;
export default userProfileReducer.reducer;
