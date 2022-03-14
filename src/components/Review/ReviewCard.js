import React, {memo} from "react";
import { Rating, Typography, Box } from "@mui/material";

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
                <Rating value={review?.raiting} readOnly/>
                <Box className="mb-20">
                    <Typography
                        variant="h6"
                        component="span"
                    >
                        {review?.comment}
                    </Typography>
                </Box>
                <Box className="mb-20">
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{fontWeight: 600}}
                    >
                        Достоинства
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                    >
                        {review?.advantages}
                    </Typography>
                </Box>
                <Box className="mb-20">
                    <Typography
                        variant="h6"
                        component="h6"
                        sx={{fontWeight: 600}}
                    >
                        Недостатки
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                    >
                        {review?.disadvantages}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
})
export default ReviewCard;