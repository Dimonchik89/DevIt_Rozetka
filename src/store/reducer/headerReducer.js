import { handleActions } from "redux-actions";
import { changeFind, resetFind } from "../action/header";

const initialState = {
    find: ""
}

const changeFindHandler = (state, action) => {
    return {
        ...state,
        find: action.payload
    }
}

const resetFindHandler = (state) => {
    return {
        ...state,
        find: ""
    }
}

const headerReducer = handleActions({
    [changeFind]: changeFindHandler,
    [resetFind]: resetFindHandler
}, initialState);
export {headerReducer}