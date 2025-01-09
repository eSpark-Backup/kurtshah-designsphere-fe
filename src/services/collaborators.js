import { projectApiFunc } from "./rtk";

export const collaboratorsApi = projectApiFunc.injectEndpoints({
  endpoints: (builder) => ({
    createCollaborator: builder.mutation({
      query: (credentials) => ({
        url: "/v1/contributer/AddContributer",
        method: "POST",
        body: credentials,
      }),
    }),
    getProjectCollaborator: builder.mutation({
      query: ({ page, pageSize, id }) => ({
        url: `/v1/contributer/GetProjectContributers?page=${page}&pageSize=${pageSize}&projectId=${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateCollaboratorMutation,
  useGetProjectCollaboratorMutation,
} = collaboratorsApi;
