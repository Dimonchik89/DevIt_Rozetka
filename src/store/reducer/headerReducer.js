import { handleActions } from "redux-actions";
export const CHANGE_FIND = "CHANGE_FIND";
export const RESET_FIND = "RESET_FIND";
const initialState = {
    find: ""
}

const headerReducer = handleActions({
    CHANGE_FIND: (state, action) => ({
        ...state,
        find: action.payload
    }),
    RESET_FIND: state => ({
        ...state,
        find: ""
    }),
}, initialState);
export {headerReducer}