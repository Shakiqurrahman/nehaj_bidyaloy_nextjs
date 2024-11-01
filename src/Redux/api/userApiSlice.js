import { API_URL } from "@/utils/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApiSlice = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}`,
        credentials: 'include',
        prepareHeaders: (headers) => {
            // const token = Cookies.get("authToken");
            // if (token) {
            //     headers.set("Authorization", `Bearer ${token}`);
            // }
            // return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchUserData: builder.query({
            query: () => "/user",
        }),

        loginUser: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            }),
        }),

        registerUser: builder.mutation({
            query: (userData) => ({
                url: "/auth/register",
                method: "POST",
                body: userData,
            }),
        }),
    }),
});

export const {
    useFetchUserDataQuery,
    useLoginUserMutation,
    useRegisterUserMutation,
} = userApiSlice;
