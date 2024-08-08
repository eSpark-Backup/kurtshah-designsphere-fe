import { api } from "./rtk";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/user/sign-in",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
} = authApi;
