import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {},
        uid: {},
    },
    reducers: {
        loginUser: (state, actions) => {
            state.value = actions.payload.userDetils;
            state.uid = actions.payload.uid;
        },
        logoutUser: (state) => {
            state.value = {};
            state.uid = {};
        },
    }
});

export const { loginUser, logoutUser } = userSlice.actions;
export const userReucer = userSlice.reducer;