import React from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import { hideCart } from "../../store/action/cart";
import CartEmpty from "./CartEmpty";
import CartFull from "./CartFull";
import "./cart.scss";

const Cart = () => {
    const dispatch = useDispatch();
    const { showCart, cart } = useSelector(state => state.cart);
    const cartContent = cart.length ? <CartFull cart={cart}/> : <CartEmpty/>
    return (
        <Modal
            open={showCart}
            onClose={() => dispatch(hideCart())}
        >
            <Box className="cart-wrapper">
                {cartContent}
            </Box>
        </Modal>
    )
}

export default Cart;