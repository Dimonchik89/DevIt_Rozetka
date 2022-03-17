import { handleActions } from "redux-actions";
export const GOODS_FETCHING = "GOODS_FETCHING";
export const GOODS_FETCHED = "GOODS_FETCHED";
export const GOODS_FETCHING_ERROR = "GOODS_FETCHING_ERROR";
export const ADD_REVIEW = "ADD_REVIEW";
const initialState = {
    goods: [],
    loading: "idle"
}

const goodsReducer = handleActions({
    GOODS_FETCHING: state => ({
        ...state,
        loading: "loading"
    }),
    GOODS_FETCHED: (state, action) => ({
        ...state,
        goods: action.payload,
        loading: "idle"
    }),
    GOODS_FETCHING_ERROR: state => ({
        ...state,
        loading: "error"
    }),
    ADD_REVIEW: (state, action) => ({
        ...state,
        goods: [...state.goods.filter(item => item.id !== action.payload.id), action.payload]
    }),
}, initialState);
export {goodsReducer}