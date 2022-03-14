import React from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux";
import { hideCart } from "../../store/action/cart";
import CartEmpty from "./CartEmpty";
import CartFull from "./CartFull";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid green',
    boxShadow: 24,
    p: 4,
  };

const Cart = () => {
    const dispatch = useDispatch();
    const { showCart, cart } = useSelector(state => state.cart);
    const cartContent = cart.length ? <CartFull cart={cart}/> : <CartEmpty/>
    return (
        <Modal
            open={showCart}
            onClose={() => dispatch(hideCart())}
        >
            <Box sx={style}>
                {cartContent}
            </Box>
        </Modal>
    )
}

export default Cart;