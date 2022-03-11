import React, {memo} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import "./infoList.scss";
import "../../style/helper.scss";

const InfoList = memo(({arrLink, borderStyle}) => {
    console.log("info list")
    const listContent = arrLink?.map(item => {
        return (
            <Link key={nanoid()}  to={item.link} className="info-list__link">
                <ListItem sx={{paddingLeft: 0}}>
                    <ListItemText>
                        <Typography
                            variant="h6"
                            component="span"
                            color="black"
                        >
                            {item.text}
                        </Typography>
                    </ListItemText>
                </ListItem>
            </Link>
        )
    })

    return (
        <div className={`info-list ${borderStyle}`}>
            <List>
                {listContent}
            </List>
        </div>
    )
})
export default InfoList;