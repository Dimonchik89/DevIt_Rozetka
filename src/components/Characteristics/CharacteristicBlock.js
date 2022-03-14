import React, {memo} from "react";
import { Typography, Box } from "@mui/material";
import "../../style/helper.scss";
import "../GoodPage/goodChar.scss";

const CharacteristicBlock = memo(({selectGood, children, title}) => {
    let content;
    if(Array.isArray(children)) {
        content = children.map(item => {
            return (
                <Box className="mt-15 good-char__item">
                    <Typography
                        variant="h6"
                        component="span"
                        className="good-char__text"
                    >
                        {item.props.children.toUpperCase()}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        className="good-char__info"
                    >
                        {selectGood[item.props.children]}
                    </Typography>
                </Box>
            )
        })
    } else {
        content = <Box className="mt-15 good-char__item">
            <Typography
                variant="h6"
                component="span"
                className="good-char__text"
            >
                {children.props.children.toUpperCase()}
            </Typography>
            <Typography
                variant="h6"
                component="span"
                className="good-char__info"
            >
                {selectGood[children.props.children]}
            </Typography>
        </Box>
    }

    return (
        <Box className="mt-50">
            <Box className="">
                <Typography
                    variant="h4"
                    component="h4"
                >
                    {title}
                </Typography>
                {content}
            </Box>
        </Box>
    )
})

export default CharacteristicBlock;