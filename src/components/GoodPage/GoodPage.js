import React, { useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";
import Spiner from "../Spiner/Spiner";
import { NavLink } from "react-router-dom";
import GoodPageAll from "./GoodPageAll";
import GoodPageInfo from "./GoodPageInfo";
import useHttp from "../../hook/useHttp";
import { goodsFetching, goodsFetched, goodsFetchingError } from "../../store/action/goods";
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
    const activeStyle = {
        color: "green",
        textDecoration: "underline"
    }
    const {goods} = useSelector(state =>  state.allGoods);
    const selectGood = goods?.find(item => item.id === +id)
    if(!selectGood) {
        return <Spiner/>
    }
    return (
        <div className="good-page">
            <Container>
                <h1>{selectGood.model}</h1>
            </Container>
            <div className="good-page__link-list">
                <Container>
                    <div className="flex">
                        <NavLink
                            to=""
                            className="good-page__link"
                            style={({isActive}) => {
                                isActive ? activeStyle : null
                            }}>Все</NavLink>
                        <NavLink
                            to="info"
                            className="good-page__link"
                            style={({isActive}) => {
                                isActive ? activeStyle : null
                            }}>инфо</NavLink>
                    </div>
                </Container>
            </div>
            <Routes>
                <Route path="/" element={<GoodPageAll selectGood={selectGood}/>}/>
                <Route path="info" element={<GoodPageInfo selectGood={selectGood}/>}/>
            </Routes>
        </div>
    )
}
export default GoodPage;