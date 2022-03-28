import { CardContent, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { addGoodToCart } from "../../store/action/cart";
import { useDispatch } from "react-redux";
import useSort from "../../hook/useSort";
import React from "react";

const GoodFooter = (props) => {
    const dispatch = useDispatch();
    const { sortGood } = useSort();
    return (
        <div>
            <div className="flex space-between">
                <CardContent sx={{paddingLeft: 0}}>
                    <Typography variant="h4" sx={{color: "red"}} align="left">
                        {`${props.cost}₴`}
                    </Typography>
                </CardContent>
                <IconButton disableRipple onClick={() => {
                    dispatch(addGoodToCart(sortGood(props)))
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
    )
}
export default GoodFooter;