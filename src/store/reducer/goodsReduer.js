const initialState = {
    goods: [],
    loading: "idle"
}

const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GOODS_FETCHING" :
            return {
                ...state,
                loading: "loading"
            }
        case "GOODS_FETCHED" :
            return {
                ...state,
                goods: action.payload,
                loading: "idle"
            }
        case "GOODS_FETCHING_ERROR" :
            return {
                ...state,
                loading: "error"
            }
        default: return state
    }
}

export {goodsReducer};