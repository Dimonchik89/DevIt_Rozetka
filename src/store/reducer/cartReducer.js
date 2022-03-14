const initialState = {
    cart: [],
    showCart: false
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_GOOD_TO_CART" :
            return {
                ...state,
                // cart: [...state.cart, action.payload]
                cart: action.payload
            }
        case "REMOVE_GOOD_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case "OPEN_CART":
            return {
                ...state,
                showCart: true
            }
        case "HIDE_CART":
            return {
                ...state,
                showCart: false
            }
        case "INC_QTY": {
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? {...item, qty: item.qty + 1} : item)
            }
        }
        case "DEC_QTY": {
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload ? {...item, qty: item.qty - 1} : item)
            }
        }
        default: return state;
    }
}

export {cartReducer};