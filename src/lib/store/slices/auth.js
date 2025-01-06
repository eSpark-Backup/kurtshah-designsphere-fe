import { createSlice } from "@reduxjs/toolkit";
import { removeLocalStorage } from "@/utils";

const initialState = {
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null;
      removeLocalStorage("token")
      removeLocalStorage("email_mfa")
      removeLocalStorage("google_mfa")
      removeLocalStorage("authed")
    },
    updateProfile: (state, action) => {
      state.user = action.payload
    },
  },
});

export const { login, logout, updateProfile } = slice.actions;

export default slice.reducer;
