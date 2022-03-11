const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_GOOD_TO_CART" :
            return {
                ...state,
                cart: action.payload
            }
        default: return state;
    }
}

export {cartReducer};