import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const AuthorizationHeader = ({title, handleChange}) => {
    const dispatch = useDispatch()
    return (
        <Box className="flex space-between border-bottom p-16">
            <Typography
                variant="h4"
                component="span"
            >
                {title}
            </Typography>
            <Button
                onClick={() => dispatch(handleChange())}
            >
                x
            </Button>
        </Box>
    )
}

export default AuthorizationHeader