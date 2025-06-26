import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
};


const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload || 1; // Default increment by 1 if no payload is provided
        },
        decrement: (state, action) => {
            state.count -= action.payload || 1; // Default decrement by 1 if no payload is provided
        },
        reset: (state) => {
            state.count = 0;
        }
    }
});



export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;