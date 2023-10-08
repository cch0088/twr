import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
    {
        'nid': [
            {
                'value': '0'
            }
        ],
        'title': [
            {
                'value': 'Loading...'
            }
        ],
        'body': [
            {
                'value': 'Loading...'
            }
        ]
    }
];

export const contentSlice = createSlice({
    name: 'content',
    initialState: { value: initialStateValue },
    reducers: {
       pushContent: (state, action) => {
        state.value = action.payload;
       },
       purgeContent: (state) => {
        state.value = initialStateValue;
       } 
    }
});

export const { pushContent, purgeContent } = contentSlice.actions;

export default contentSlice.reducer;
