import React, {memo} from "react";
import { Field, reduxForm } from 'redux-form';
import { closedLogin, openRegister } from "../../store/action/autorize";
import { Typography, Box } from "@mui/material";
import { InputBlock } from "../FormsControl/FormsControl";
import { required, emailValidate, minLengthCreator } from "../../validates/validates";
import FormButton from "./FormButton";
import ChangeFormButton from "./ChangeFormButton";
import "../../style/helper.scss";
import "../Authorization/login.scss";

const nimLength6 = minLengthCreator(6);
const loginForm = [
    {title: "Эл. почта или телефон", placeholder: "email", name: "email", type: "email",  validate: [required, emailValidate]},
    {title: "Пароль", placeholder: "Пароль", name: "password", type: "password",  validate: [required, nimLength6]},
]

let FormLogin = memo((props) => {
    const { handleSubmit } = props;

    const inputForm = loginForm.map(({title, placeholder, name, type, validate}) => (
        <div className="mb-20">
            <InputBlock title={title}
                placeholder={placeholder}
                name={name}
                type={type}
                validate={validate}/>
        </div>
    ))

    return (
        <Box>
            <form onSubmit={handleSubmit}
                className="p-16">
                    {inputForm}
                    <div className="mb-20">
                        <Field name="remeberMe" type="checkbox" component="input"/>
                        <Typography
                            variant="h6"
                            component="span"
                        >
                            Запомнить меня
                        </Typography>
                    </div>
                <FormButton title="Вход"/>
            </form>
            <ChangeFormButton title="Регистраия" closed={closedLogin} open={openRegister}/>
        </Box>
    )
})

FormLogin = reduxForm({
    form: 'login'
  })(FormLogin)
export default FormLogin;