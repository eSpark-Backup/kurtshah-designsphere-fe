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
    getContacts: builder.mutation({
      query: ({ page, pageSize, name }) => ({
        url: `/v1/contact/GetContacts?page=${page}&pageSize=${pageSize}&name=${name}`,
        method: "GET",
      }),
    }),
    addContacts: builder.mutation({
      query: (credentials) => ({
        url: `/v1/contact/AddContact`,
        method: "POST",
        body: credentials,
      }),
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/v1/contact/DeleteContactById?id=${id}`,
        method: "DELETE",
      }),
    }),
    isContributorAdded: builder.mutation({
      query: (credentials) => ({
        url: `/v1/contributer/IsContributerExist?contactId=${credentials.contactId}&projectId=${credentials.projectId}`,
        method: "GET",
      }),
    }),
    updateContributor: builder.mutation({
      query: ({ id, roleId }) => ({
        url: `/v1/contributer/UpdateProjectContributer?projectContributerId=${id}&projectRoleId=${roleId}`,
        method: "PATCH",
      }),
    }),
    deleteContributor: builder.mutation({
      query: (id) => ({
        url: `v1/contributer/RemoveProjectContributer?contributerId=${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useCreateCollaboratorMutation,
  useGetProjectCollaboratorMutation,
  useGetContactsMutation,
  useAddContactsMutation,
  useDeleteContactMutation,
  useIsContributorAddedMutation,
  useUpdateContributorMutation,
  useDeleteContributorMutation,
} = collaboratorsApi;
