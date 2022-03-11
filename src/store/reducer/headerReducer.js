const initialState = {
    find: ""
}

const headerReducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_FIND": {
            return {
                ...state,
                find: action.payload
            }
        }
        case "RESET_FIND": {
            return {
                ...state,
                find: ""
            }
        }
        default: return state;
    }
}

export {headerReducer};