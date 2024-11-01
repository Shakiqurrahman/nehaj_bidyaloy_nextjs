import { api } from "@/utils/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApiSlice = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({
        baseUrl: `${api}`,
        prepareHeaders: (headers) => {
            const token = Cookies.get("authToken");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        fetchUserData: builder.query({
            query: () => "/user",
        }),
    }),
});

export const { useFetchUserDataQuery } = userApiSlice;
