const initialState = {
    allFilter: [],
    activeFilter: [],
    loading: "idle"
}

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_ACTIVE_FILTER":
            return {
                ...state,
                activeFilter: [...state.activeFilter, action.payload]
            }
        case "REMOVE_ONE_FILTER":
            return {
                ...state,
                activeFilter: state.activeFilter.filter(item => item !== action.payload)
            }
        case "RESET_FILTER":
            return {
                ...state,
                activeFilter: []
            }
        case "FILTER_FETCHING":
            return {
                ...state,
                loading: "loading"
            }
        case "FILTER_FETCHED":
            return {
                ...state,
                loading: "idle",
                allFilter: action.payload
            }
        case "FILTER_FETCHING_ERROR":
            return {
                ...state,
                loading: "error"
            }
        default: return state
    }
}

export {filterReducer};