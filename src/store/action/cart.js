import { createAction } from "@reduxjs/toolkit";
import { ADD_GOOD_TO_CART, REMOVE_GOOD_FROM_CART, INC_QTY, DEC_QTY, OPEN_CART, HIDE_CART } from "../reducer/cartReducer";

export const addGoodToCart = createAction(ADD_GOOD_TO_CART)
export const removeGoodFromCart = createAction(REMOVE_GOOD_FROM_CART)
export const incQty = createAction(INC_QTY)
export const decQty = createAction(DEC_QTY)
export const openCart = createAction(OPEN_CART)
export const hideCart = createAction(HIDE_CART)