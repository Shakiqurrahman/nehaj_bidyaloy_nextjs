import user from "@/Redux/features/userSlice";
import utilsSlice from "@/Redux/features/utilsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user: user,
        utils: utilsSlice,
    },
});
