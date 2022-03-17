import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import LoginAsButton from "./LoginAsButton";
import "../../style/helper.scss";
import "./login.scss";

const LoginAs = () => {
    return (
        <Box className="login__as p-16" sx={{borderLeft: "1px solid gray"}}>
            <Box className="mb-20">
                <Typography
                    variant="h6"
                    component="h6"
                    color="gray"
                >
                    Войти как пользователь
                </Typography>
            </Box>
            <Box>
                <Box className="mb-20">
                    <LoginAsButton title="Facebook"/>
                </Box>
                <Box className="mb-20">
                    <LoginAsButton title="Google"/>
                </Box>
            </Box>
            <span className="login__as-text">или</span>
        </Box>
    )
}
export default LoginAs;