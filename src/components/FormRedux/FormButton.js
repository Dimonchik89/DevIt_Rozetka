import React from "react";
import { Button, Typography } from "@mui/material";

const FormButton = ({title}) => {
    return (
        <Button color="success" variant="contained" type="submit">
            <Typography
                variant="h5"
                component="span"
            >
                {title}
            </Typography>
        </Button>
    )
}
export default FormButton;