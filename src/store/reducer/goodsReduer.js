import { handleActions } from "redux-actions";
import { goodsFetching, goodsFetched, goodsFetchingError } from "../action/goods";
import { addReview } from "../action/review";

const initialState = {
    goods: [],
    loading: "idle"
}

const goodsFetchingHandler = (state) => {
    return {
        ...state,
        loading: "loading"
    }
}

const goodsFetchedHandler = (state, action) => {
    return {
        ...state,
        goods: action.payload,
        loading: "idle"
    }
}

const goodsFetchingErrorHandler = (state) => {
    return {
        ...state,
        loading: "error"
    }
}

const addReviewHandler = (state, action) => {
    return {
        ...state,
        goods: [...state.goods.filter(item => item.id !== action.payload.id), action.payload]
    }
}

const goodsReducer = handleActions({
    [goodsFetching]: goodsFetchingHandler,
    [goodsFetched]: goodsFetchedHandler,
    [goodsFetchingError]: goodsFetchingErrorHandler,
    [addReview]: addReviewHandler
}, initialState);
export {goodsReducer}