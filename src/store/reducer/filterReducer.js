import { handleActions } from "redux-actions"
export const ADD_ACTIVE_FILTER = "ADD_ACTIVE_FILTER"
export const REMOVE_ONE_FILTER = "REMOVE_ONE_FILTER"
export const RESET_FILTER = "RESET_FILTER"
export const FILTER_FETCHING = "FILTER_FETCHING"
export const FILTER_FETCHED = "FILTER_FETCHED"
export const FILTER_FETCHING_ERROR = "FILTER_FETCHING_ERROR"
const initialState = {
    allFilter: [],
    activeFilter: [],
    loading: "idle"
}

const filterReducer = handleActions({
    ADD_ACTIVE_FILTER: (state, action) => ({
        ...state,
        activeFilter: [...state.activeFilter, action.payload]
    }),
    REMOVE_ONE_FILTER: (state, action) => ({
        ...state,
        activeFilter: state.activeFilter.filter(item => item !== action.payload)
    }),
    RESET_FILTER: state => ({
        ...state,
        activeFilter: []
    }),
    FILTER_FETCHING: state => ({
        ...state,
        loading: "loading"
    }),
    FILTER_FETCHED: (state, action) => ({
        ...state,
        loading: "idle",
        allFilter: action.payload
    }),
    FILTER_FETCHING_ERROR: state => ({
        ...state,
        loading: "error"
    })

}, initialState);
export {filterReducer}