import React, {memo} from "react";
import Saler from "../Saler/Saler";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";
import { Typography, Box } from "@mui/material";
import FavoriteIconButton from "../FavoriteIcon/FavoriteIcon";
import "../../style/helper.scss";

const GoodPageRight = memo(({selectGood}) => {
    return (
        <>
            <Box className="border flex align-center p-16">
                <img style={{maxWidth: "130px"}} src={selectGood.img} alt={selectGood.model} />
                <Typography
                    variant="h4"
                    component="h5"
                    className="word-wrap"
                >
                    {selectGood.model}
                </Typography>
            </Box>
            <Box className="mt-30 flex d-column">
                <Box className="border p-16">
                    <Box className="flex align-center space-between mb-20">
                        <Typography
                            variant="h4"
                            component="span"
                        >
                            {selectGood.cost}₴
                        </Typography>
                        <FavoriteIconButton/>
                    </Box>
                    <ButtonAddToCart selectGood={selectGood} styleClass="width-100"/>
                </Box>
            </Box>
            <Saler/>
        </>
    )
})
export default GoodPageRight;