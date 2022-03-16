import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Button, Typography, Box } from "@mui/material";
import { closedRegiser, openLogin } from "../../store/action/autorize";
import { useDispatch } from "react-redux";
import { InputForm } from "../FormsControl/FormsControl";
import { required, emailValidate, phoneValidate, minLengthCreator } from "../../validates/validates";
import "../../style/helper.scss";
import "../Authorization/login.scss";

const minLength6 = minLengthCreator(6);

let FormRegister = (props) => {
    const {handleSubmit} = props;
    const dispatch = useDispatch();
    return (
        <Box>
            <form
                onSubmit={handleSubmit}
                className="p-16"
            >
                <div className="mb-20">
                    <Typography
                        variant="body1"
                        component="p"
                        color="gray"
                    >
                        Имя
                    </Typography>
                    <Field
                        className="login__input"
                        type="text"
                        name="name"
                        placeholder="Имя"
                        validate={[required]}
                        component={InputForm}/>
                </div>
                <div className="mb-20">
                    <Typography
                        variant="body1"
                        component="p"
                        color="gray"
                    >
                        Фамилия
                    </Typography>
                <Field
                    className="login__input"
                    type="text"
                    name="surname"
                    placeholder="Фамилия"
                    validate={[required]}
                    component={InputForm}/>
                </div>
                <div className="mb-20">
                    <Typography
                        variant="body1"
                        component="p"
                        color="gray"
                    >
                        Телефон
                    </Typography>
                    <Field
                        className="login__input"
                        type="phone"
                        name="phone"
                        placeholder="Телефон"
                        validate={[required, phoneValidate]}
                        component={InputForm}/>
                </div>
                <div className="mb-20">
                    <Typography
                        variant="body1"
                        component="p"
                        color="gray"
                    >
                        Эл. почта
                    </Typography>
                    <Field
                    className="login__input"
                    type="email"
                    name="email"
                    placeholder="e-mail"
                    validate={[required, emailValidate]}
                    component={InputForm}/>
                </div>
                <div className="mb-20">
                    <Typography
                        variant="body1"
                        component="p"
                        color="gray"
                    >
                        Пароль
                    </Typography>
                    <Field
                    className="login__input"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    validate={[required, minLength6]}
                    component={InputForm}/>
                </div>
                <Button color="success" variant="contained" type="submit">
                    <Typography
                        variant="h5"
                        component="span"
                    >
                        Регистрация
                    </Typography>
                </Button>
            </form>
            <Box sx={{textAlign: "center"}}>
                <Button onClick={() => {
                    dispatch(closedRegiser())
                    dispatch(openLogin())
                }}>
                    Я уже зарегестрирован
                </Button>
            </Box>
        </Box>

    )
}

FormRegister = reduxForm({
    form: "register"
})(FormRegister)
export default FormRegister;