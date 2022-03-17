import React from "react";
import TextField from '@mui/material/TextField';

const FormTextField = ({input, meta, ...props}) => {
    return (
        <TextField {...input} {...props}/>
    )
}
export default FormTextField;