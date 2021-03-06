import React from "react";
import Drawer from '@mui/material/Drawer';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import InfoList from "../InfoList/InfoList";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { slideMenuAbout, slideMenuHelp, slideMenuServices, slideMenuPartners } from "./slideMenuLinks";
import SlideMenuSocial from "./SlideMenuSocial";
import SlideMenuList from "./SlideMenuList";
import { useSelector, useDispatch } from "react-redux";
import { hideMenu } from "../../store/action/slideMenu";
import { openLogin, openRegister } from "../../store/action/autorize";
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
                                    ????????
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
                                    ??????????????????????
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="body1"
                                    component="p"
                                    color="gray">
                                    ?????????????????????????? ?????? ?????????????????? ?????????????????????? ????????????????????????
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="mt-30  pb-30  border-bottom">
                    <List>
                        <SlideMenuList/>
                    </List>
                </Box>
                <Box className="mt-15">
                    <Typography
                        variant="h5"
                        component="h5"
                        color="gray"
                        className="pl-16">
                        ???????????????????? ?? ????????????????
                    </Typography>
                    <InfoList arrLink={slideMenuAbout}  borderStyle="border-bottom"/>
                </Box>
                <Box className="mt-15">
                    <Typography
                        variant="h5"
                        component="h5"
                        color="gray"
                        className="pl-16">
                        ????????????
                    </Typography>
                    <InfoList arrLink={slideMenuHelp}/>
                </Box>
                <Accordion sx={{boxShadow: "none", borderTop: "1px solid #e3e3e3"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        id="services">
                        <Typography
                            variant="h5"
                            component="h5"
                            color="gray">
                            ??????????????
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="pl-0" sx={{padding: 0}}>
                        <InfoList title="????????????" arrLink={slideMenuServices}/>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{boxShadow: "none",  borderTop: "1px solid #e3e3e3"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        id="services">
                        <Typography
                            variant="h5"
                            component="h5"
                            color="gray">
                            ??????????????????
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="pl-0" sx={{padding: 0}}>
                        <InfoList title="????????????" arrLink={slideMenuPartners}/>
                    </AccordionDetails>
                </Accordion>
                <Box className="slide-menu__footer  p-16  border-top">
                    <Typography
                        variant="h6"
                        component="h6"
                        color="gray">
                        ???? ?? ???????????????????? ??????????
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