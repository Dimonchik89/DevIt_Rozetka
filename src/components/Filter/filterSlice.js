import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useHttp from "../../hook/useHttp";

export const fetchFilter = createAsyncThunk(
    "filterFetch",
    () => {
        const { getGoods } = useHttp();
        return getGoods("http://localhost:3001/notebook-filter")
    }
)

const initialState = {
    allFilter: [],
    // activeFilter: [],
    activeFilter: [],
    loading: "idle"
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addActiveFilter: (state, action) => {
            state.activeFilter.push(action.payload)
        },
        removeOneFilter: (state, action) => {
            state.activeFilter = state.activeFilter.filter(item => item != action.payload)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFilter.pending, (state) => {
                state.loading = "loading";
            })
            .addCase(fetchFilter.fulfilled, (state, action) => {
                state.loading = "idle";
                state.allFilter = action.payload;
            })
            .addCase(fetchFilter.rejected, state => {
                state.loading = "error";
            })
    }
})

const { actions, reducer } = filterSlice;

export const { addActiveFilter, removeOneFilter } = actions;

export {reducer};