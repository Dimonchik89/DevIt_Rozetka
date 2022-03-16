import React, {memo} from "react";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {addGoodToCart} from "../../store/action/cart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useSort from "../../hook/useSort";

const ButtonAddToCart = memo(({selectGood, styleClass}) => {
    const dispatch = useDispatch();
    const {sortGood} = useSort();
    return (
        <Button
            variant="contained"
            color="success"
            startIcon={<ShoppingCartIcon/>}
            onClick={() => dispatch(addGoodToCart(sortGood(selectGood)))}
            className={styleClass}>
                <Typography
                    variant="h6"
                    component="span"
                >
                    Купить
                </Typography>

        </Button>
    )
})

export default ButtonAddToCart;