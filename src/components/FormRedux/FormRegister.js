import React, {memo} from "react";
import { reduxForm } from 'redux-form'
import { Box } from "@mui/material";
import { closedRegiser, openLogin } from "../../store/action/autorize";
import { InputBlock } from "../FormsControl/FormsControl";
import { required, emailValidate, phoneValidate, minLengthCreator } from "../../validates/validates";
import FormButton from "./FormButton";
import ChangeFormButton from "./ChangeFormButton";
import "../../style/helper.scss";
import "../Authorization/login.scss";


const minLength6 = minLengthCreator(6);

const registerForm = [
    {title: "Имя", placeholder: "Имя", name: "name", type: "text",  validate: [required]},
    {title: "Фамилия", placeholder: "Фамилия", name: "surname", type: "text",  validate: [required]},
    {title: "Телефон", placeholder: "Телефон", name: "phone", type: "tel",  validate: [required, phoneValidate]},
    {title: "Эл. почта", placeholder: "email", name: "email", type: "email",  validate: [required, emailValidate]},
    {title: "Пароль", placeholder: "Пароль", name: "password", type: "password",  validate: [required, minLength6]},
]

let FormRegister = memo((props) => {
    const {handleSubmit} = props;
    const inputForm = registerForm.map(({title, type, name, placeholder, validate}) => (
            <div className="mb-20">
                <InputBlock title={title}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    validate={validate}/>
            </div>
    ))
    return (
        <Box>
            <form
                onSubmit={handleSubmit}
                className="p-16"
            >
                {inputForm}
                <FormButton title="Зарегестрировать"/>
            </form>
            <ChangeFormButton title="Я уже зарегестрирован" closed={closedRegiser} open={openLogin}/>
        </Box>

    )
})

FormRegister = reduxForm({
    form: "register"
})(FormRegister)
export default FormRegister;