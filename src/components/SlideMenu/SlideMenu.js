import React from "react";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { slideMenuAbout, slideMenuHelp, slideMenuServices, slideMenuPartners } from "./slideMenuLinks";
import SlideMenuSocial from "./SlideMenuSocial";
import SlideMenuList from "./SlideMenuList";
import { useSelector, useDispatch } from "react-redux";
import { hideMenu } from "../../store/action/slideMenu";
import { openLogin, openRegister } from "../../store/action/autorize";
import AccordionBlock from "../Accordion/Accordion";
import SlideListBlock from "./SlideListBlock";
import "./slideMenu.scss";
import "../../style/helper.scss";

const SlideMenu = () => {
    const dispatch = useDispatch();
    const {showSlide} = useSelector(state => state.slideMenu)
    return (
        <>
            <Drawer
                anchor="left"
                open={showSlide}
                onClose={() => dispatch(hideMenu())}
            >
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
                                        dispatch(hideMenu())
                                        setTimeout(() => {
                                            dispatch(openLogin())
                                        }, 300)

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
                                        dispatch(hideMenu())
                                        setTimeout(() => {
                                            dispatch(openRegister())
                                        }, 300)

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
                <Box className="mt-30  pb-30">
                    <List>
                        <SlideMenuList/>
                    </List>
                </Box>
                <Box className="mt-15">
                    <SlideListBlock title="Информация о компании" menu={slideMenuAbout}/>
                </Box>
                <Box className="mt-15">
                    <SlideListBlock title="Помощь" menu={slideMenuHelp}/>
                </Box>
                <AccordionBlock title="Сервисы" menu={slideMenuServices}/>
                <AccordionBlock title="Партнерам" menu={slideMenuPartners}/>
                <Box className="slide-menu__footer  p-16  border-top">
                    <Typography
                        variant="h6"
                        component="h6"
                        color="gray">
                        Мы в соцеальных сетях
                    </Typography>
                    <Box className="flex  space-between  mt-15">
                        <SlideMenuSocial/>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}
export default SlideMenu;