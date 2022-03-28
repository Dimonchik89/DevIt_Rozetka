import { useState } from "react";
import { useDispatch } from "react-redux";

export const handleChangeBoolean = (initial) => {
    const [value, setValue] = useState(initial)
    const change = () => {
        setValue(value => !value)
    }
    return {value, change}
}

export const handleCloseAndOpen = () => {
    const dispatch = useDispatch();
    const handleChangeModal = (closed, open, time) => {
        dispatch(closed());
        setTimeout(() => {
            dispatch(open());
        }, time)

    }
    return {handleChangeModal}
}