import { createSlice } from "@reduxjs/toolkit";

const userStatusReducer = createSlice({
  name: "userStatus",
  initialState: {
    premium: null,
    premiumExpiry: null,
    points: null,
  },
  reducers: {
    setUserStatus: (state, action) => {
      state.premium = action.payload.premium;
      state.premiumExpiry = action.payload.premiumExpiry;
      state.points = action.payload.points;
    },
    clearUserStatus: (state) => {
      state.premium = null;
      state.premiumExpiry = null;
      state.points = null;
    },
  },
});

export const { setUserStatus, clearUserStatus } = userStatusReducer.actions;
export default userStatusReducer.reducer;
