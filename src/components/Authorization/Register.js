import React from "react";
import FormRegister from "../FormRedux/FormRegister";
import { Box } from "@mui/system";
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from "react-redux";
import { closedRegiser } from "../../store/action/autorize";
import AuthorizationHeader from "./AuthorizationHeader";
import LoginAs from "../Authorization/LoginAs";
import "./login.scss";
const Register = () => {
    const dispatch = useDispatch();
    const { showRegister } = useSelector(state => state.autorizeReducer)
    return (
        <Modal
            open={showRegister}
            onClose={() => dispatch(closedRegiser())}
        >
            <Box className="login-wrapper">
                <AuthorizationHeader title="Регистрация" handleChange={closedRegiser}/>
                <Box className="flex p-16">
                    <FormRegister/>
                    <LoginAs/>
                </Box>
            </Box>
        </Modal>

    )
}
export default Register;