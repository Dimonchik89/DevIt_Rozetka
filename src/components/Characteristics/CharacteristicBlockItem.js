import React from "react";
import { Typography, Box } from "@mui/material";

const CharacteristicBlockItem = ({title, info}) => {
    return (
        <Box className="mt-15 good-char__item">
            <Typography
                variant="h6"
                component="span"
                className="good-char__text"
            >
                {title}
            </Typography>
            <Typography
                variant="h6"
                component="span"
                className="good-char__info"
            >
                {info}
            </Typography>
        </Box>
    )
}
export default CharacteristicBlockItem;