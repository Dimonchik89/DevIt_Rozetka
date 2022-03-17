import React from "react";
import { Button, Typography } from "@mui/material";

const LoginAsButton = ({title}) => {
    return (
        <Button className="p-10" sx={{background: "#f5f5f5", width: "150px"}}>
            <Typography
                variant="h6"
                component="span"
                color="blue"
            >
                {title}
            </Typography>
        </Button>
    )
}
export default LoginAsButton;