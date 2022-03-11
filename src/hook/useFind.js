import { useState } from "react";

export const useFind = (init) => {
    const [findText, setFindText] = useState(init);
    const setChangeFindText = event => {
        setFindText(event.target.value)
    }
    const resetFindText = () => {
        setFindText("")
    }
    return {findText, setChangeFindText, resetFindText}
}