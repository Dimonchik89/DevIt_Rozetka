import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import React from "react";
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
                    <Button className="p-10" sx={{background: "#f5f5f5", width: "150px"}}>
                        <Typography
                            variant="h6"
                            component="span"
                            color="blue"
                        >
                            Facebook
                        </Typography>
                    </Button>
                </Box>
                <Box className="mb-20">
                    <Button className="p-10" sx={{background: "#f5f5f5", width: "150px"}}>
                        <Typography
                            variant="h6"
                            component="span"
                            color="blue"
                        >
                            Google
                        </Typography>
                    </Button>
                </Box>
            </Box>
            <span className="login__as-text">или</span>
        </Box>
    )
}
export default LoginAs;