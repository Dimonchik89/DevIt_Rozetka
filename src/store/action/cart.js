export const addGoodToCart = (good) => ({type: "ADD_GOOD_TO_CART", payload: good})

export const removeGoodFromCart = (goodId) => {
    return {
        type: "REMOVE_GOOD_FROM_CART",
        payload: goodId
    }
}

export const incQty = (goodId) => {
    return {
        type: "INC_QTY",
        payload: goodId
    }
}

export const decQty = (goodId) => {
    return {
        type: "DEC_QTY",
        payload: goodId
    }
}

export const openCart = () => {
    return {
        type: "OPEN_CART"
    }
}

export const hideCart = () => {
    return {
        type: "HIDE_CART"
    }
}