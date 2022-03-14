import React from "react";
import { Box, Typography, Button } from "@mui/material";

const CartTotal = ({sum}) => {
    return (
        <div className="cart__total">
        <div className="cart__pay">
            <Box className="mr-15">
                <Typography
                    variant="h4"
                    component="span"
                    sx={{fontWeight: 600, color: "red"}}
                >
                    {sum} ₴
                </Typography>
            </Box>
            <Button variant="contained" color="success">
                <Typography
                    variant="h5"
                    component="span"
                >
                    Оформить Заказ
                </Typography>
            </Button>
        </div>
    </div>
    )
}

export default CartTotal;