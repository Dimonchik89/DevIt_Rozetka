import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import useHttp from "../../hook/useHttp";

export const fetchGoods = createAsyncThunk(
    "fetchUser",
    () => {
        const { getGoods } = useHttp();
        return getGoods('http://localhost:3001/category')
    }
)

// const adapter = createEntityAdapter();

// const initialState = adapter.getInitialState({
//     loading: "idle"
// })

const initialState = {
    loading: 'idle',
    goods: []

}

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchGoods.pending, (state) => {
                state.loading = "loading"
            })
            .addCase(fetchGoods.fulfilled, (state, action) => {
                state.loading = "idle";
                state.goods = action.payload;
            })
            .addCase(fetchGoods.rejected, (state) => {
                state.loading = "error"
            })
    }
})

export const {reducer} = goodsSlice;

