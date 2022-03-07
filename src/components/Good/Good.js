import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addGoodToCart } from "../Cart/cartSlice";
import { Link } from "react-router-dom";
import useChange from "../../hook/useChange";

import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';

import "./good.scss";
import "../../style/helper.scss"

const Good = (props) => {

    const [favorit, setFavorit] = useState(false);
    const {changeBooleanState} = useChange();
    const {id, model, img, rating, cost} = props;
    const dispatch = useDispatch();

    const favoritIcon = favorit ? <FavoriteIcon sx={{ color: "orange" }} /> : <FavoriteBorderIcon sx={{ color: "orange" }} />;

    return (
        <div className="good flex d-column">
            <div className="good-header flex space-between align-center">
                <span className="good__stock">Акция</span>
                <IconButton
                    onClick={() => changeBooleanState(setFavorit)}
                >
                    {favoritIcon}
                </IconButton>
            </div>
            <Link to={`/${id}`}>
                <div className="good-content">
                    <img className="good__img" src={img} alt={model} />
                </div>
            </Link>
            <div className="good-footer">
                <CardContent>
                    <Link to={`/${id}`} className="decoration-none">
                        <Typography variant="h5" color="text.secondary" className="good__title">
                            {model.replace(/\_/g, " ")}
                        </Typography>
                    </Link>
                </CardContent>

                <div className="">
                    <Rating
                    name="read-only"
                    value={rating}
                    readOnly/>
                </div>

                <div className="flex space-between">
                    <CardContent sx={{paddingLeft: 0}}>
                        <Typography variant="h4" sx={{color: "red"}} align="left">
                            {`${cost}₴`}
                        </Typography>
                    </CardContent>

                    <IconButton disableRipple onClick={() => {
                        dispatch(addGoodToCart(props))
                    }}>
                        <ShoppingCartIcon color="success" fontSize="large"/>
                    </IconButton>
                </div>

                <div className="flex">
                    <Typography variant="body1" sx={{color: "#2e7d32", mr: ".5rem"}}>
                        готово к отправке
                    </Typography>
                    <LocalShippingIcon color="success"/>
                </div>
            </div>
        </div>
    )
}

export default Good;