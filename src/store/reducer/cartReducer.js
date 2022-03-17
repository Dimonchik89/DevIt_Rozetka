import { handleActions } from "redux-actions";
export const ADD_GOOD_TO_CART = "ADD_GOOD_TO_CART";
export const REMOVE_GOOD_FROM_CART = "REMOVE_GOOD_FROM_CART";
export const OPEN_CART = "OPEN_CART";
export const HIDE_CART = "HIDE_CART";
export const INC_QTY = "INC_QTY";
export const DEC_QTY = "DEC_QTY";

const initialState = {
    cart: [],
    showCart: false
}

const cartReducer = handleActions({
    ADD_GOOD_TO_CART: (state, action) => ({
        ...state,
        cart: action.payload
    }),
    REMOVE_GOOD_FROM_CART: (state, action) => ({
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
    }),
    OPEN_CART: state => ({
        ...state,
        showCart: true
    }),
    HIDE_CART: state => ({
        ...state,
        showCart: false
    }),
    INC_QTY: (state, action) => ({
        ...state,
        cart: state.cart.map(item => item.id === action.payload ? {...item, qty: item.qty + 1} : item)
    }),
    DEC_QTY: (state, action) => ({
        ...state,
        cart: state.cart.map(item => item.id === action.payload ? {...item, qty: item.qty - 1} : item)
    })
}, initialState)
export {cartReducer}