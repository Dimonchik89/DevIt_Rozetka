import React, { useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import Spiner from "../Spiner/Spiner";
import GoodPageAll from "./GoodPageAll";
import GoodPageCharacter from "./GoodPageCharacter";
import GoodPageReview from "./GoodPageReview";
import useHttp from "../../hook/useHttp";
import { changeTitle } from "../../helper/helper";
import { goodsFetching, goodsFetched, goodsFetchingError } from "../../store/action/goods";
import GoodPageLinks from "./GoodPageLinks";
import "./goodPage.scss";
import "../../style/helper.scss";

const GoodPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const { getGoods } = useHttp();
    useEffect(() => {
        dispatch(goodsFetching())
        getGoods("http://localhost:3001/category")
            .then(goods => dispatch(goodsFetched(goods)))
            .catch(dispatch(goodsFetchingError()))
    }, [])

    const {goods} = useSelector(state =>  state.allGoods);
    const selectGood = goods?.find(item => item.id === +id)
    if(!selectGood) {
        return <Spiner/>
    }
    return (
        <div className="good-page">
            <Container>
                <Typography
                    variant="h2"
                    component="h2"
                >
                    {changeTitle(selectGood.model)}
                </Typography>
                <Rating value={selectGood.rating} readOnly sx={{marginTop: "2rem"}}/>
            </Container>
            <div className="good-page__link-list">
                <Container>
                    <GoodPageLinks selectGood={selectGood}/>
                </Container>
            </div>
            <Routes>
                <Route path="/" element={<GoodPageAll selectGood={selectGood}/>}/>
                <Route path="characteristics" element={<GoodPageCharacter selectGood={selectGood}/>}/>
                <Route path="review" element={<GoodPageReview selectGood={selectGood}/>}/>
            </Routes>
        </div>
    )
}
export default GoodPage;