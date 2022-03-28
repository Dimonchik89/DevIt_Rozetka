import { createAction } from "redux-actions";

export const ADD_GOOD_TO_CART = "ADD_GOOD_TO_CART";
export const REMOVE_GOOD_FROM_CART = "REMOVE_GOOD_FROM_CART";
export const OPEN_CART = "OPEN_CART";
export const HIDE_CART = "HIDE_CART";
export const INC_QTY = "INC_QTY";
export const DEC_QTY = "DEC_QTY";

export const addGoodToCart = createAction(ADD_GOOD_TO_CART)
export const removeGoodFromCart = createAction(REMOVE_GOOD_FROM_CART)
export const incQty = createAction(INC_QTY)
export const decQty = createAction(DEC_QTY)
export const openCart = createAction(OPEN_CART)
export const hideCart = createAction(HIDE_CART)