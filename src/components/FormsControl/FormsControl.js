import React, {memo} from "react"
import { Field } from 'redux-form';
import { Typography } from "@mui/material";
import "../../style/error.scss";
import "../Authorization/login.scss";

export const InputForm = memo((props) => {
    const {input, meta, className, type, placeholder} = props;
    const inputClass = meta.touched && meta.error ? `${className} error` : className;
    return (
        <div className="error-block">
            <input className={inputClass} {...input} placeholder={placeholder} type={type} />
            {meta.touched && meta.error ? <p className="error__text">{meta.error}</p> : null}
            {meta.touched && meta.error ? <span className="error__icon">!</span> : null}
        </div>
    )
})

export const InputBlock = ({title, ...tailProps}) => {
    return (
        <>
            <Typography
                variant="body1"
                component="p"
                color="gray"
            >
                {title}
            </Typography>
            <Field
                {...tailProps}
                className="login__input"
                component={InputForm}/>
        </>
    )
}