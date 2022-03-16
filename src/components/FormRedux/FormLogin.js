import React from "react";
import { Field, reduxForm } from 'redux-form';
import { closedLogin, openRegister } from "../../store/action/autorize";
import { useDispatch } from "react-redux";
import { Button, Typography, Box } from "@mui/material";
import { InputForm } from "../FormsControl/FormsControl";
import { required, emailValidate, minLengthCreator } from "../../validates/validates";
import "../../style/helper.scss";
import "../Authorization/login.scss";

const nimLength6 = minLengthCreator(6);

let FormLogin = (props) => {
    const { handleSubmit } = props;
    const dispatch = useDispatch();
    return (
        <Box>
            <form onSubmit={handleSubmit}
                className="p-16">
                    <div className="mb-20">
                        <Typography
                            variant="body1"
                            component="p"
                            color="gray"
                        >
                            Эл. почта или телефон
                        </Typography>
                        <Field
                            className="login__input"
                            placeholder="email"
                            name="email"
                            type="email"
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
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            validate={[required, nimLength6]}
                            component={InputForm}/>
                    </div>
                    <div className="mb-20">
                        <Field name="remeberMe" type="checkbox" component="input"/>
                        <Typography
                            variant="h6"
                            component="span"
                        >
                            Запомнить меня
                        </Typography>
                    </div>
                <Button color="success" variant="contained" type="submit">
                    <Typography
                        variant="h5"
                        component="span"
                    >
                        Вход
                    </Typography>
                </Button>
            </form>
            <Box sx={{textAlign: "center"}}>
                <Button
                    onClick={() => {
                        dispatch(closedLogin())
                        dispatch(openRegister())
                    }}
                >
                    Регистраия
                </Button>
            </Box>
        </Box>
    )
}

FormLogin = reduxForm({
    form: 'login'
  })(FormLogin)
export default FormLogin;