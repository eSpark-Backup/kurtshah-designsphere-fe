import { projectApiFunc } from "./rtk";

export const projectApi = projectApiFunc.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (credentials) => ({
        url: "/v1/project/CreateProject",
        method: "POST",
        body: credentials,
      }),
    }),
    getAllprojects: builder.mutation({
      query: ({ page, pageSize }) => ({
        url: `/v1/project/GetAllProjects?page=${page}&pageSize=${pageSize}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateProjectMutation, useGetAllprojectsMutation } =
  projectApi;
