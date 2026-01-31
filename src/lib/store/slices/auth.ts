import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password, callback } = action.payload;
      const user = {
        email: "arc@gmail.com",
        password: "12345678",
      };
      if (user.email === email && user.password === password) {
        state.user = { email, password };
        typeof window !== "undefined" && localStorage.setItem("token", JSON.stringify({ email, password }));
        callback();
      } else {
        toast.error("Invalid credentials");
        state.user = null;
        typeof window !== "undefined" && localStorage.removeItem("token");
      }
    },
    logout: (state) => {
      state.user = null;
      typeof window !== "undefined" && localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = slice.actions;

export default slice.reducer;
