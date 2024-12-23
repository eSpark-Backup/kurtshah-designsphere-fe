import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: getLocalStorage("theme") || 0
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.currentTheme = action.payload;
      setLocalStorage("theme", action.payload);
    },
  },
});

export const { changeTheme } = slice.actions;

export default slice.reducer;
