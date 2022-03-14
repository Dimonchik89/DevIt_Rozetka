import React, {memo} from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { nanoid } from "nanoid";
import "../../style/helper.scss";

const CartFull = memo(({cart}) => {
    const cartItem = cart.map(good => <CartItem key={nanoid()} good={good}/>)
    const sum = cart.reduce((acc, item) => {
        acc += item.cost * item?.qty
        return acc
    }, 0)
    return (
        <>
            {cartItem}
            <CartTotal sum={sum}/>
        </>
    )
})

export default CartFull;