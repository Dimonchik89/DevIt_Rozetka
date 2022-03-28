import React, {memo} from "react";
import { Box, Typography, Button } from "@mui/material";
import GooglePay from "../../Pay/Pay";

const CartTotal = memo(({sum}) => {
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
            <GooglePay cost={(sum/29)}/>
        </div>
    </div>
    )
})
export default CartTotal;