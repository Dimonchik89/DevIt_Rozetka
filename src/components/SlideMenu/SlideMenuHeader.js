import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { handleCloseAndOpen } from "../../hook/useChange";
import { hideMenu } from "../../store/action/slideMenu";
import { openLogin, openRegister } from "../../store/action/autorize";
import "./slideMenu.scss";

const SlideMenuHeader = () => {
    const { handleChangeModal } = handleCloseAndOpen();
    return (
        <Box className="slide-header">
            <img className="slide__logo" src="https://content2.rozetka.com.ua/widget_logotype/full/original/229862237.svg" alt="logo" />
            <Box className="mt-30  flex  align-center" sx={{marginRight: "3rem"}}>
                <Avatar sx={{backgroundColor: "#afafaf", width: 30, height: 30}}>
                    <PersonOutlineIcon className="icon"/>
                </Avatar>
                <Box sx={{marginLeft: "2rem"}}>
                    <Box className="flex  align-center">
                        <Typography
                            variant="h6"
                            component="span"
                            color="white"
                            sx={{cursor: "pointer"}}
                            onClick={() => {
                                handleChangeModal(hideMenu, openLogin, 300)
                            }}>
                            Вход
                        </Typography>
                        <div className="slide-border"></div>
                        <Typography
                            variant="h6"
                            component="span"
                            color="white"
                            sx={{cursor: "pointer"}}
                            onClick={() => {
                                handleChangeModal(hideMenu, openRegister, 300)
                            }}>
                            Регистрация
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="body1"
                            component="p"
                            color="gray">
                            Авторизуйтесь для получения расширенных возможностей
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default SlideMenuHeader;