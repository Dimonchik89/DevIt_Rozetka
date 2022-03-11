const initialState = {
    showSlide: false
}

const slideMenuReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SHOW_MENU":
            return {
                ...state,
                showSlide: true
            }
        case "HIDE_MENU":
            return {
                ...state,
                showSlide: false
            }
        default: return state;
    }
}

export {slideMenuReducer};