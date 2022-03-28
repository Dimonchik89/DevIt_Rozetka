import React from "react";
import { Box } from "@mui/material";
import TextBlock from "../TextBlock/TextBlock";
import "./review.scss";

const ReviewItem = ({title, text}) => {
    return (
        <Box className="mb-20">
            <TextBlock title={title} text={text} titleClass="review__title" textClass="" titleVariant="h6" textVariant="h6"/>
        </Box>
    )
}
export default ReviewItem;