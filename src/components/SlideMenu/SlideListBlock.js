import React from "react";
import Typography from '@mui/material/Typography';
import InfoList from "../InfoList/InfoList";
import "../../style/helper.scss";

const SlideListBlock = ({title, menu}) => {
    return (
        <>
            <Typography
                variant="h5"
                component="h5"
                color="gray"
                className="pl-16 pt-30 border-top">
                {title}
            </Typography>
            <InfoList arrLink={menu}/>
        </>
    )
}
export default SlideListBlock;