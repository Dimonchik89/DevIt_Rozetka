import React, {memo} from "react";
import { Typography, Box } from "@mui/material";
import CharacteristicBlockItem from "./CharacteristicBlockItem";
import { nanoid } from "nanoid";
import "../../style/helper.scss";
import "../GoodPage/goodChar.scss";

const CharacteristicBlock = memo(({selectGood, children, title}) => {
    let content;
    if(Array.isArray(children)) {
        content = children.map(item => {
            return (
                    <CharacteristicBlockItem key={nanoid()} title={item.props.children.toUpperCase()} info={selectGood[item.props.children]}/>
            )
        })
    } else {
        content = <CharacteristicBlockItem title={children.props.children.toUpperCase()} info={selectGood[children.props.children]}/>
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