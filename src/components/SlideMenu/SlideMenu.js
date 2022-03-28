import React from "react";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { slideMenuAbout, slideMenuHelp, slideMenuServices, slideMenuPartners } from "./slideMenuLinks";
import SlideMenuList from "./SlideMenuList";
import { useSelector, useDispatch } from "react-redux";
import { hideMenu } from "../../store/action/slideMenu";
import AccordionBlock from "../Accordion/Accordion";
import SlideListBlock from "./SlideListBlock";
import SlideMenuSocialContainer from "./SlideMenuSocialContainer";
import SlideMenuHeader from "./SlideMenuHeader";
import "./slideMenu.scss";
import "../../style/helper.scss";

const SlideMenu = () => {
    const dispatch = useDispatch();
    const {showSlide} = useSelector(state => state.slideMenu);
    return (
        <>
            <Drawer
                anchor="left"
                open={showSlide}
                onClose={() => dispatch(hideMenu())}
            >
                <SlideMenuHeader/>
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
                <SlideMenuSocialContainer/>
            </Drawer>
        </>
    )
}
export default SlideMenu;