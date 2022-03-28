import { createAction } from "redux-actions";

export const OPEN_LOGIN = "OPEN_LOGIN";
export const CLOSED_LOGIN = "CLOSED_LOGIN";
export const OPEN_REGISTER = "OPEN_REGISTER";
export const CLOSED_REGISTER = "CLOSED_REGISTER";

export const openLogin = createAction(OPEN_LOGIN)
export const closedLogin = createAction(CLOSED_LOGIN)
export const openRegister = createAction(OPEN_REGISTER)
export const closedRegiser = createAction(CLOSED_REGISTER)