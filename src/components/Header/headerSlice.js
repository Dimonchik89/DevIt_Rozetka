import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    find: ""
}

const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
        changeFind: (state, action) => {
            state.find = action.payload;
        },
        resetFind: (state) => {
            state.find = "";
        }
    }
})

const { actions, reducer } = headerSlice;

export const { changeFind, resetFind } = actions;

export {reducer};