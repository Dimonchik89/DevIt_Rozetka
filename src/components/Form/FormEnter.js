import React, {memo} from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import LoginAs from "../Authorization/LoginAs";
import AuthorizationHeader from "../Authorization/AuthorizationHeader";
import { useDispatch } from "react-redux";

const FormEnter = memo(({title, handleChange, open, closed, submit, FormProps}) => {
    const dispatch = useDispatch();
    return (
        <Modal
            open={open}
            onClose={() => dispatch(closed())}
        >
            <Box className="login-wrapper">
                <AuthorizationHeader title={title} handleChange={handleChange}/>
                <Box className="flex  p-16">
                    <FormProps onSubmit={submit}/>
                    <LoginAs/>
                </Box>
            </Box>
        </Modal>
    )
})
export default FormEnter;