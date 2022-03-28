import React, {memo} from "react";
import { Box } from "@mui/material";
import TextBlock from "../TextBlock/TextBlock";
import "../GoodPage/goodChar.scss";

const CharacteristicBlockItem = memo(({title, info}) => {
    return (
        <Box className="mt-15 good-char__item">
            <TextBlock title={title} text={info} titleClass="good-char__text" textClass="good-char__info" titleVariant="h6" textVariant="h6"/>
        </Box>
    )
})
export default CharacteristicBlockItem;