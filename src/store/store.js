import { configureStore } from "@reduxjs/toolkit";
import {reducer as allGoods} from "../components/Goods/goodsSlice";
import {reducer as find} from "../components/Header/headerSlice";
import {reducer as cart} from "../components/Cart/cartSlice";
import {reducer as filter} from "../components/Filter/filterSlice";

const store = configureStore({
    reducer: {allGoods, find, cart, filter},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV != "production"
})

export default store;