import React from "react";
import { Link } from "react-router-dom"
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { nanoid } from "nanoid";
import {slideMenuArr} from "./slideMenuLinks";

const SlideMenuList = () => {
    const slideMenuBlock = slideMenuArr?.map(item => {
        return (
            <Link className="decoration-none" to={item.link} key={nanoid()}>
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
                            color="black">
                            {item.title}
                        </Typography>
                    </ListItemText>
                </ListItem>
            </Link>
        )
    })
    return (
        <>
            {slideMenuBlock}
        </>
    )
}
export default SlideMenuList;