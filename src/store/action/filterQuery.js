import { createAction } from "redux-actions";

export const ADD_FILTER_QUERY = "ADD_FILTER_QUERY";
export const CLEAR_FILTER_QUERY = "REMOVE_FILTER_QUERY";

export const addFilterQuery = createAction(ADD_FILTER_QUERY);
export const clearFilterQuery = createAction(CLEAR_FILTER_QUERY);