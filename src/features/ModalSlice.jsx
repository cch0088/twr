import { createSlice } from "@reduxjs/toolkit";

const openState = { show: true };
const closedState = { show: false };

export const modalSlice = createSlice({
    name: 'modal',
    initialState: { value: closedState },
    reducers: {
       openModal: (state) => {
        state.value = openState;
       },
       closeModal: (state) => {
        state.value = closedState;
       } 
    }
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
