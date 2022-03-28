import { createAction } from "redux-actions";

export const SHOW_MENU = "SHOW_MENU";
export const HIDE_MENU = "HIDE_MENU";

export const showMenu = createAction(SHOW_MENU);
export const hideMenu = createAction(HIDE_MENU);