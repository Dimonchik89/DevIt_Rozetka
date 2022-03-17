import React from "react";
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from "react-redux";
import FormLogin from "../FormRedux/FormLogin";
import LoginAs from "./LoginAs";
import { closedLogin } from "../../store/action/autorize";
import { Box } from "@mui/system";
import AuthorizationHeader from "./AuthorizationHeader";
import "../../style/helper.scss";
import "./login.scss";

const Login = () => {
    const { showLogin } = useSelector(state => state.autorizeReducer)
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <Modal
            open={showLogin}
            onClose={() => dispatch(closedLogin())}
        >
            <Box className="login-wrapper">
                <AuthorizationHeader title="Вход" handleChange={closedLogin}/>
                <Box className="flex  p-16">
                    <FormLogin onSubmit={onSubmit}/>
                    <LoginAs/>
                </Box>
            </Box>
        </Modal>
    )
}
export default Login;