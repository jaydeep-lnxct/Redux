import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },

    reducers: {
        increment: (state, actions) => {
            state.value += actions.payload;
        },
        decrement: (state, actions) => {
            state.value -= actions.payload;
        },
        clearCount: (state) => {
            state.value = 0;
        },
    }
});

export const {increment, decrement,clearCount} = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;