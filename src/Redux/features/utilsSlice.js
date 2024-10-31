import { createSlice } from "@reduxjs/toolkit";

const utilsSlice = createSlice({
    name: "utils",
    initialState: {
        activeHamburger: false,
    },
    reducers: {
        setActiveHamburger: (state, action) => {
            state.activeHamburger = action.payload;
        },
    },
});

export const { setActiveHamburger } = utilsSlice.actions;
export default utilsSlice.reducer;
