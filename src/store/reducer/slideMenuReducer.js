import { handleActions } from "redux-actions";
import { showMenu, hideMenu } from "../action/slideMenu";

const initialState = {
    showSlide: false
}

const showMenuHandler = (state) => {
    return {
        ...state,
        showSlide: true
    }
}

const hideMenuHandler = (state) => {
    return {
        ...state,
        showSlide: false
    }
}

const slideMenuReducer = handleActions({
    [showMenu]: showMenuHandler,
    [hideMenu]: hideMenuHandler
}, initialState)

export {slideMenuReducer}