const initialState = {
    showLogin: false,
    showRegister: false
}

const autorizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "OPEN_LOGIN":
            return {
                ...state,
                showLogin: true
            }
        case "CLOSED_LOGIN":
            return {
                ...state,
                showLogin: false
            }
        case "OPEN_REGISTER":
            return {
                ...state,
                showLogin: false,
                showRegister: true
            }
        case "CLOSED_REGISTER":
            return {
                ...state,
                showRegister: false
            }
        default: return state
    }
}

export default autorizeReducer;