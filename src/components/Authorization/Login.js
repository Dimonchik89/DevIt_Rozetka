import React from "react";
import { useSelector } from "react-redux";
import FormLogin from "../FormRedux/FormLogin";
import { closedLogin } from "../../store/action/autorize";
import FormEnter from "../Form/FormEnter";
import "../../style/helper.scss";
import "./login.scss";

const Login = () => {
    const { showLogin } = useSelector(state => state.autorizeReducer)
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <FormEnter title="Вход" handleChange={closedLogin} open={showLogin} closed={closedLogin} submit={onSubmit} FormProps={FormLogin}/>
    )
}
export default Login;