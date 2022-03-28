import React from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { openCart } from "../../store/action/cart";
import { openLogin } from "../../store/action/autorize";
import { useDispatch } from "react-redux";
import "./header.scss";

const HeaderIconBlock = ({cart}) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="focus__btn">
                <IconButton
                    size="large"
                    aria-label="user"
                    onClick={() => dispatch(openLogin())}>
                    <PersonOutlineIcon className="icon"/>
                </IconButton>
            </div>
            <div className="focus__btn">
                <IconButton
                    size="large"
                    aria-label="cart"
                    onClick={() => dispatch(openCart())}>
                    <Badge
                        badgeContent={cart?.length}
                        color="success"
                        size="large"
                        fontSize="1rem">
                        <ShoppingCartIcon  className="icon"/>
                    </Badge>
                </IconButton>
            </div>
        </>
    )
}
export default HeaderIconBlock;