import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {};

export const sessionSlice = createSlice({
    name: 'session',
    initialState: { value: initialStateValue },
    reducers: {
       newSession: (state, action) => {
        state.value = action.payload;
       },
       endSession: (state) => {
        state.value = initialStateValue;
       } 
    }
});

export const { newSession, endSession } = sessionSlice.actions;

export default sessionSlice.reducer;
