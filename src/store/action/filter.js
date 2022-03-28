import { createAction } from "redux-actions";

export const ADD_ACTIVE_FILTER = "ADD_ACTIVE_FILTER"
export const REMOVE_ONE_FILTER = "REMOVE_ONE_FILTER"
export const RESET_FILTER = "RESET_FILTER"
export const FILTER_FETCHING = "FILTER_FETCHING"
export const FILTER_FETCHED = "FILTER_FETCHED"
export const FILTER_FETCHING_ERROR = "FILTER_FETCHING_ERROR"

export const addActiveFilter = createAction(ADD_ACTIVE_FILTER)
export const removeOneFilter = createAction(REMOVE_ONE_FILTER)
export const resetFilter = createAction(RESET_FILTER)
export const filterFetching = createAction(FILTER_FETCHING)
export const filterFetched = createAction(FILTER_FETCHED)
export const filterFetchingError = createAction(FILTER_FETCHING_ERROR)