import { handleActions } from "redux-actions"
export const OPEN_LOGIN = "OPEN_LOGIN";
export const CLOSED_LOGIN = "CLOSED_LOGIN";
export const OPEN_REGISTER = "OPEN_REGISTER";
export const CLOSED_REGISTER = "CLOSED_REGISTER";

const initialState = {
    showLogin: false,
    showRegister: false
}

const autorizeReducer = handleActions({
    OPEN_LOGIN: state => ({
        ...state,
        showLogin: true
    }),
    CLOSED_LOGIN: state => ({
        ...state,
        showLogin: false
    }),
    OPEN_REGISTER: state => ({
        ...state,
        showLogin: false,
        showRegister: true
    }),
    CLOSED_REGISTER: state => ({
        ...state,
        showRegister: false
    }),
}, initialState);
export default autorizeReducer;