import React, {memo} from "react";
import { Rating, Box } from "@mui/material";
import ReviewItem from "./ReviewItem";
import TextBlock from "../TextBlock/TextBlock";
import "../../style/helper.scss";
import "./review.scss";

const ReviewCard = memo(({review}) => {
    return (
        <Box className="border mt-30">
            <Box className="p-16 border-bottom">
                <TextBlock title="Продавец:" text="Rozetka" titleClass="inline" textClass="review__title"/>
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