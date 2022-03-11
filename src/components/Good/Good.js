import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGoodToCart } from "../../store/action/cart";
import { Link } from "react-router-dom";
import { addToCart } from "../../helper/helper";
import {handleChangeBoolean} from "../../hook/useChange";
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import "./good.scss";
import "../../style/helper.scss";

const Good = memo((props) => {
    const {id, model, img, rating, cost} = props;
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cart);
    const favorit = handleChangeBoolean(false)
    const favoritIcon = favorit.value ? <FavoriteIcon sx={{ color: "orange" }} /> : <FavoriteBorderIcon sx={{ color: "orange" }} />;
    return (
        <div className="good flex d-column">
            <div className="flex space-between align-center">
                <span className="good__stock">Акция</span>
                <IconButton
                    onClick={favorit.change}
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
                        dispatch(addGoodToCart(addToCart(cart, props)))
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
})
export default Good;