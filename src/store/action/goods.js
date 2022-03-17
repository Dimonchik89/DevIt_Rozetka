import { createAction } from "@reduxjs/toolkit";
import { GOODS_FETCHING, GOODS_FETCHED, GOODS_FETCHING_ERROR } from "../reducer/goodsReduer";

export const goodsFetching = createAction(GOODS_FETCHING)
export const goodsFetched = createAction(GOODS_FETCHED)
export const goodsFetchingError = createAction(GOODS_FETCHING_ERROR)