import { handleActions } from "redux-actions"
import { openLogin, closedLogin, openRegister, closedRegiser } from "../action/autorize";

const openLoginHandler = (state) => {
    return {
        ...state,
        showLogin: true
    }
}

const closedLoginHandler = (state) => {
    return {
        ...state,
        showLogin: false
    }
}

const openRegisterHandler = (state) => {
    return {
        ...state,
        showLogin: false,
        showRegister: true
    }
}

const closedRegiserHandler = (state) => {
    return {
        ...state,
        showRegister: false
    }
}


const initialState = {
    showLogin: false,
    showRegister: false
}

const autorizeReducer = handleActions({
    [openLogin]: openLoginHandler,
    [closedLogin]: closedLoginHandler,
    [openRegister]: openRegisterHandler,
    [closedRegiser]: closedRegiserHandler
}, initialState);
export default autorizeReducer;