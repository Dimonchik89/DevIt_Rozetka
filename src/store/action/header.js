import { createAction } from "@reduxjs/toolkit";
import { CHANGE_FIND, RESET_FIND } from "../reducer/headerReducer";

export const changeFind = createAction(CHANGE_FIND);
export const resetFind = createAction(RESET_FIND);