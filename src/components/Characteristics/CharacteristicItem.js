import React, {memo} from "react";
import { Typography } from "@mui/material";
import "./characteristics.scss";
import "../../style/helper.scss"

const CharacteristicItem = memo(({title, info}) => {
    return (
        <div className="characteristics-page__all  mt-15">
            <Typography
                variant="h5"
                component="span"
            >
                {title}
            </Typography>
            <Typography
                variant="h5"
                component="span"
                sx={{color: "blue"}}
            >
                {info}
            </Typography>
        </div>
    )
})

export default CharacteristicItem;