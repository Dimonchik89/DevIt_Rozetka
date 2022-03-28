import { createAction } from "redux-actions";

export const GOODS_FETCHING = "GOODS_FETCHING";
export const GOODS_FETCHED = "GOODS_FETCHED";
export const GOODS_FETCHING_ERROR = "GOODS_FETCHING_ERROR";

export const goodsFetching = createAction(GOODS_FETCHING)
export const goodsFetched = createAction(GOODS_FETCHED)
export const goodsFetchingError = createAction(GOODS_FETCHING_ERROR)