import { createAction } from "@reduxjs/toolkit";
import { OPEN_LOGIN, CLOSED_LOGIN, OPEN_REGISTER, CLOSED_REGISTER} from "../reducer/autorizeReducer";

export const openLogin = createAction(OPEN_LOGIN)
export const closedLogin = createAction(CLOSED_LOGIN)
export const openRegister = createAction(OPEN_REGISTER)
export const closedRegiser = createAction(CLOSED_REGISTER)