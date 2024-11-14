import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTheme: 7,
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { changeTheme } = slice.actions;

export default slice.reducer;
