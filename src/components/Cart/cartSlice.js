import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addGoodToCart: (state, action) => {
            state.cart.push(action.payload)
        }
    }
});

const { actions, reducer } = cartSlice;

export const { addGoodToCart } = actions;

export {reducer};