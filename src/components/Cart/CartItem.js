import React, {memo} from "react";
import { Box, Typography, Button } from "@mui/material";
import { removeGoodFromCart } from "../../store/action/cart";
import { useDispatch } from "react-redux";
import { incQty, decQty } from "../../store/action/cart";
import "../../style/helper.scss";
import "./cart.scss";
const CartItem = memo(({good}) => {
    const dispatch = useDispatch();
    if(!good.qty) {
        dispatch(removeGoodFromCart(good.id))
    }
    return (
        <Box className="mb-20">
            <Box className="flex  space-between align-center">
                <img className="cart__img" src={good.img} alt={good.model} />
                <Typography
                    variant="h5"
                    component="span"
                    sx={{fontWeight: 600, flex: "1", ml: "2rem"}}
                >
                    {good.model}
                </Typography>
                <Button
                    onClick={() => dispatch(decQty(good.id))}
                >
                    -
                </Button>
                <Typography
                    variant="h5"
                    component="span"
                    sx={{fontWeight: 600, mr: "1rem"}}
                >
                    {good.qty}
                </Typography>
                <Button
                    onClick={() => dispatch(incQty(good.id))}
                >
                    +
                </Button>
                <Typography
                    variant="h5"
                    component="span"
                    sx={{fontWeight: 600}}
                >
                    {good.cost} ₴
                </Typography>
                <Button
                    onClick={() => dispatch(removeGoodFromCart(good.id))}
                >
                    x
                </Button>
            </Box>
        </Box>
    )
})

export default CartItem;