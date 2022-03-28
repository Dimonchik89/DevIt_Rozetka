import { handleActions } from "redux-actions";
import { addFilterQuery, clearFilterQuery } from "../action/filterQuery";

const initialState = {
    filterQuery: []
}

const addFilterQueryHandler = (state, action) => {
    return {
        ...state,
        filterQuery: action.payload
    }
}

const clearFilterQueryHandler = (state) => {
    return {
        ...state,
        filterQuery: []
    }
}

const filterQueryReducer = handleActions({
    [addFilterQuery]: addFilterQueryHandler,
    [clearFilterQuery]: clearFilterQueryHandler
}, initialState)
export {filterQueryReducer};