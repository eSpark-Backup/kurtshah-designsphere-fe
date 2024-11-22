import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: typeof window !== "undefined" && localStorage.getItem("theme") || 0
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.currentTheme = action.payload;
      typeof window !== "undefined" && localStorage.setItem("theme", action.payload);
    },
  },
});

export const { changeTheme } = slice.actions;

export default slice.reducer;
