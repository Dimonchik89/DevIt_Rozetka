import React, {memo} from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

const CartItemButton = memo(({symbol, handleChange, id}) => {
    const dispatch = useDispatch();
    return (
        <Button
            onClick={() => dispatch(handleChange(id))}
        >
            {symbol}
        </Button>
    )
})
export default CartItemButton;