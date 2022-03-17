import { createAction } from "@reduxjs/toolkit";
import { SHOW_MENU, HIDE_MENU } from "../reducer/slideMenuReducer";

export const showMenu = createAction(SHOW_MENU);
export const hideMenu = createAction(HIDE_MENU);