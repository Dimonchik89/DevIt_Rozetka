import { handleActions } from "redux-actions";
export const SHOW_MENU = "SHOW_MENU";
export const HIDE_MENU = "HIDE_MENU";
const initialState = {
    showSlide: false
}

const slideMenuReducer = handleActions({
    SHOW_MENU: state => ({
        ...state,
        showSlide: true
    }),
    HIDE_MENU: state => ({
        ...state,
        showSlide: false
    }),
}, initialState)

export {slideMenuReducer}