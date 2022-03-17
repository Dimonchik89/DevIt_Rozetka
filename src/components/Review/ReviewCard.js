import React, {memo} from "react";
import { Rating, Typography, Box } from "@mui/material";
import ReviewItem from "./ReviewItem";

const ReviewCard = memo(({review}) => {
    return (
        <Box className="border mt-30">
            <Box className="p-16 border-bottom">
                <Typography
                    variant="h6"
                    component="span"
                >
                    Продавец:
                </Typography>
                <Typography
                    variant="h6"
                    component="span"
                    sx={{fontWeight: 600}}
                >
                    Rozetka
                </Typography>
            </Box>
            <Box className="p-16">
                <Rating value={review?.raiting}/>
                <ReviewItem title="" text={review?.comment}/>
                <ReviewItem title="Достоинства" text={review?.advantages}/>
                <ReviewItem title="Недостатки" text={review?.disadvantages}/>
            </Box>
        </Box>
    )
})
export default ReviewCard;