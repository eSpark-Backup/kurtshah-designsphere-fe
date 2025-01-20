import { projectApiFunc } from "./rtk";

export const projectApi = projectApiFunc.injectEndpoints({
  endpoints: (builder) => ({
    getProjectPlans: builder.mutation({
      query: ({ page, pageSize, projectId }) => ({
        url: `/v1/plan/GetPlansByProjectId?page=${page}&pageSize=${pageSize}&projectId=${projectId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProjectPlansMutation } =
  projectApi;
