import { handleActions } from "redux-actions"
import { addActiveFilter, removeOneFilter, resetFilter, filterFetching, filterFetched, filterFetchingError } from "../action/filter";

const initialState = {
    allFilter: [],
    activeFilter: [],
    loading: "idle"
}

const addActiveFilterHandler = (state, action) => {
    return {
        ...state,
        activeFilter: action.payload
    }
}

const removeOneFilterHandler = (state, action) => {
    return {
        ...state,
        activeFilter: state.activeFilter.filter(item => item !== action.payload)
    }
}

const resetFilterHandler = (state) => {
    return {
        ...state,
        activeFilter: []
    }
}

const filterFetchingHandler = (state) => {
    return {
        ...state,
        loading: "loading"
    }
}

const filterFetchedHandler = (state, action) => {
    return {
        ...state,
        loading: "idle",
        allFilter: action.payload
    }
}

const filterFetchingErrorHandler = (state) => {
    return {
        ...state,
        loading: "error"
    }
}

const filterReducer = handleActions({
    [addActiveFilter]: addActiveFilterHandler,
    [removeOneFilter]: removeOneFilterHandler,
    [resetFilter]: resetFilterHandler,
    [filterFetching]: filterFetchingHandler,
    [filterFetched]: filterFetchedHandler,
    [filterFetchingError]: filterFetchingErrorHandler
}, initialState);
export {filterReducer}