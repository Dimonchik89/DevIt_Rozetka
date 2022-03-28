import { handleActions } from "redux-actions";
import { addGoodToCart, removeGoodFromCart, openCart, hideCart, incQty, decQty } from "../action/cart";

const initialState = {
    cart: [],
    showCart: false
}

const addGoodToCartHandler = (state, action) => {
    return {
        ...state,
        cart: action.payload
    }
}

const removeGoodFromCartHandler = (state, action) => {
    return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
    }
}

const openCartHandler = (state) => {
    return {
        ...state,
        showCart: true
    }
}

const hideCartHandler = (state) => {
    return {
        ...state,
        showCart: false
    }
}

const incQtyHandler = (state, action) => {
    return {
        ...state,
        cart: state.cart.map(item => item.id === action.payload ? {...item, qty: item.qty + 1} : item)
    }
}

const decQtyHandler = (state, action) => {
    return {
        ...state,
        cart: state.cart.map(item => item.id === action.payload ? {...item, qty: item.qty - 1} : item)
    }
}

const cartReducer = handleActions({
    [addGoodToCart]: addGoodToCartHandler,
    [removeGoodFromCart]: removeGoodFromCartHandler,
    [openCart]: openCartHandler,
    [hideCart]: hideCartHandler,
    [incQty]: incQtyHandler,
    [decQty]: decQtyHandler
}, initialState)
export {cartReducer}