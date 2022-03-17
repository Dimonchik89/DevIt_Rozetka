import React, {memo} from "react";
import { Container, Box, Grid } from "@mui/material";
import GoodPageRight from "./GoodPageRight";
import GoodPageTitle from "./GoodPageTitle";
import ReviewCard from "../Review/ReviewCard";
import { nanoid } from "nanoid";
import "../../style/helper.scss"

const GoodPageReview = memo(({selectGood}) => {
    const contentReview = !!selectGood.review.length ? selectGood.review.map(review => <ReviewCard key={nanoid()} review={review}/>) : <h1>Нет отзывов</h1>;
    return (
        <Container>
            <Grid container spacing={6}>
                <Grid item md={8}>
                    <GoodPageTitle title="Отзыв покупателей о" model={selectGood.model}/>
                    <Box className="mt-50">
                        {contentReview}
                    </Box>
                </Grid>
                <Grid item md={4}>
                    <GoodPageRight selectGood={selectGood}/>
                </Grid>
            </Grid>
        </Container>
    )
})
export default GoodPageReview;