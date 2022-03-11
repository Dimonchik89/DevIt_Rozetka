import React from "react";
import {slideMenuSocial} from "./slideMenuLinks"
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { nanoid } from "nanoid";

const SlideMenuSocial = () => {
    const socialContent = slideMenuSocial?.map(icon => {
        return ( <Link to={icon.link} key={nanoid()}>
            <Avatar sx={{bgcolor: icon.color}}>
                {icon.icon}
            </Avatar>
        </Link>)
    })
    return (
        <>
            {socialContent}
        </>
    )
}

export default SlideMenuSocial;