import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import SlideMenuSocial from "./SlideMenuSocial";
import "./slideMenu.scss";
import "../../style/helper.scss";

const SlideMenuSocialContainer = () => {
    return (
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
    )
}
export default SlideMenuSocialContainer;