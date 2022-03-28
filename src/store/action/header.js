import { createAction } from "redux-actions";

export const CHANGE_FIND = "CHANGE_FIND";
export const RESET_FIND = "RESET_FIND";

export const changeFind = createAction(CHANGE_FIND);
export const resetFind = createAction(RESET_FIND);