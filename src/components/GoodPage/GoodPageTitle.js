import React, {memo} from "react";
import { Typography } from "@mui/material";
import { changeTitle } from "../../helper/helper";

const GoodPageTitle = memo(({title, model}) => {
    return (
        <>
            <Typography
                variant="h3"
                component="span"
            >
                {title}
            </Typography>
            <Typography
                variant="h3"
                component="span"
                sx={{color: "gray", marginLeft: "1.5rem"}}
            >
                {changeTitle(model)}
            </Typography>
        </>
    )
})
export default GoodPageTitle;