import React from "react";
import { Typography, Box } from "@mui/material";

const ReviewItem = ({title, text}) => {
    return (
        <Box className="mb-20">
            <Typography
                variant="h6"
                component="h6"
                sx={{fontWeight: 600}}
            >
                {title}
            </Typography>
            <Typography
                variant="h6"
                component="span"
            >
                {text}
            </Typography>
        </Box>
    )
}
export default ReviewItem;