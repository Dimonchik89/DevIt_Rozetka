import { useState } from "react";

export const handleChangeBoolean = (initial) => {
    const [value, setValue] = useState(initial)
    const change = () => {
        setValue(value => !value)
    }
    return {value, change}
}