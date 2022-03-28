import React from "react";
import FormRegister from "../FormRedux/FormRegister";
import { useSelector } from "react-redux";
import { closedRegiser } from "../../store/action/autorize";
import FormEnter from "../Form/FormEnter";
import "./login.scss";

const Register = () => {
    const { showRegister } = useSelector(state => state.autorizeReducer)
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <FormEnter title="Регистрация" handleChange={closedRegiser} open={showRegister} closed={closedRegiser} submit={onSubmit} FormProps={FormRegister}/>
    )
}
export default Register;