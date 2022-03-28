import React, {memo} from "react";
import { Typography } from "@mui/material";

const TextBlock = memo(({title, text, titleClass, textClass, titleVariant, textVariant}) => {
    return (
        <>
            <Typography
                variant={titleVariant}
                component={titleVariant}
                className={titleClass}
            >
                {title}
            </Typography>
            <Typography
                variant={textVariant}
                component="span"
                className={textClass}
            >
                {text}
            </Typography>
        </>
    )
})
export default TextBlock;