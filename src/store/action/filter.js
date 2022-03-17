import { createAction } from "@reduxjs/toolkit";
import { ADD_ACTIVE_FILTER, REMOVE_ONE_FILTER, RESET_FILTER, FILTER_FETCHING, FILTER_FETCHED, FILTER_FETCHING_ERROR } from "../reducer/filterReducer";

export const addActiveFilter = createAction(ADD_ACTIVE_FILTER)
export const removeOneFilter = createAction(REMOVE_ONE_FILTER)
export const resetFilter = createAction(RESET_FILTER)
export const filterFetching = createAction(FILTER_FETCHING)
export const filterFetched = createAction(FILTER_FETCHED)
export const filterFetchingError = createAction(FILTER_FETCHING_ERROR)