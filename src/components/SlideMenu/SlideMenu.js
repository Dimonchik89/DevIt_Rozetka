import React from "react";
import Drawer from '@mui/material/Drawer';
import useChange from "../../hook/useChange";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoList from "../InfoList/InfoList";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import { slideMenuArr, slideMenuAbout, slideMenuHelp, slideMenuServices, slideMenuPartners, slideMenuSocial } from "./slideMenuLinks";
import { nanoid } from "nanoid";

import "./slideMenu.scss";
import "../../style/helper.scss";


const SlideMenu = ({slideMenu, setSlideMenu}) => {

    const {changeBooleanState} = useChange();

    return (
        <>
            <Drawer
                anchor="left"
                open={slideMenu}
                onClose={() => changeBooleanState(setSlideMenu)}
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
                                    color="white">
                                    Вход
                                </Typography>

                                <div className="slide-border"></div>

                                <Typography
                                    variant="h6"
                                    component="span"
                                    color="white">
                                    Регистрация
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="body1"
                                    component="p"
                                    color="gray"
                                >
                                    Авторизуйтесь для получения расширенных возможностей
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="slide-menu  mt-30  pb-30  border-bottom">
                    <List>
                        {slideMenuArr?.map(item => {
                            return (
                                <Link className="decoration-none" to={item.link}>
                                    <ListItem button >
                                        <ListItemIcon>
                                            <Avatar className="slide__avatar">
                                                {item.icon}
                                            </Avatar>
                                        </ListItemIcon>

                                        <ListItemText>
                                            <Typography
                                                variant="h5"
                                                component="span"
                                                color="black"
                                            >
                                                {item.title}
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </Link>
                            )
                        })}
                    </List>
                </Box>

                <Box className="mt-15">
                    <Typography
                        variant="h5"
                        component="h5"
                        color="gray"
                        className="pl-16"
                    >
                        Информация о компании
                    </Typography>
                    <InfoList arrLink={slideMenuAbout}  borderStyle="border-bottom"/>
                </Box>
                <Box className="mt-15">
                    <Typography
                        variant="h5"
                        component="h5"
                        color="gray"
                        className="pl-16"
                    >
                        Помощь
                    </Typography>
                    <InfoList arrLink={slideMenuHelp}/>
                </Box>

                <Accordion sx={{boxShadow: "none", borderTop: "1px solid #e3e3e3"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        id="services"
                    >
                        <Typography
                            variant="h5"
                            component="h5"
                            color="gray"
                        >
                            Сервисы
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails className="pl-0" sx={{padding: 0}}>
                        <InfoList title="Помощь" arrLink={slideMenuServices}/>
                    </AccordionDetails>
                </Accordion>


                <Accordion sx={{boxShadow: "none",  borderTop: "1px solid #e3e3e3"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        id="services"
                    >
                        <Typography
                            variant="h5"
                            component="h5"
                            color="gray"
                        >
                            Партнерам
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails className="pl-0" sx={{padding: 0}}>
                        <InfoList title="Помощь" arrLink={slideMenuPartners}/>
                    </AccordionDetails>
                </Accordion>

                <Box className="slide-menu__footer  p-16  border-top">
                    <Typography
                        variant="h6"
                        component="h6"
                        color="gray"
                    >
                        Мы в соцеальных сетях
                    </Typography>
                    <Box className="flex  space-between  mt-15">
                    {
                        slideMenuSocial?.map(icon => {
                            return ( <Link to={icon.link} key={nanoid()}>
                                <Avatar sx={{bgcolor: icon.color}}>
                                    {icon.icon}
                                </Avatar>
                            </Link>)

                        })
                    }
                    </Box>
                </Box>

            </Drawer>
        </>
    )
}

export default SlideMenu;