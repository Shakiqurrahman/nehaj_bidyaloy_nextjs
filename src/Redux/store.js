import user from "@/Redux/features/userSlice";
import utilsSlice from "@/Redux/features/utilsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { userApiSlice } from "./api/userApiSlice";

export const store = configureStore({
    reducer: {
        user: user,
        utils: utilsSlice,
        [userApiSlice.reducerPath]: userApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // To allow non-serializable values
            immutableCheck: false,
        }).concat(userApiSlice.middleware),
});
