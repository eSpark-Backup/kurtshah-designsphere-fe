import { createSlice } from "@reduxjs/toolkit";
import { projectApi } from "@/services/projects";

const initialState = {
  allProjects: [],
  total: 0,
};

const slice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      projectApi.endpoints.getAllprojects.matchFulfilled,
      (state, { payload }) => {
        state.allProjects = payload?.result?.data || [];
        state.total = payload?.result?.totalRecords || 0;
      }
    );
  },
});

export default slice.reducer;
