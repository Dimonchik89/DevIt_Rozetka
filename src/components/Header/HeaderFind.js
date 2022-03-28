import React from "react";
import { useDispatch } from "react-redux";
import { changeFind, resetFind } from "../../store/action/header";
import {useFind} from "../../hook/useFind";
import { Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import "./header.scss";

const HeaderFind = () => {
    const inputText = useFind("");
    const dispatch = useDispatch();
    const handleChange = () => {
        inputText.resetFindText()
        dispatch(resetFind())
    }
    return (
        <div className="header__find">
            <input
                className="header__input"
                type="text"
                value={inputText.findText}
                onChange={inputText.setChangeFindText}
                />
                {
                    inputText.findText.length === 0 ? null : <IconButton disableRipple="false" sx={{mr: "1rem"}} onClick={handleChange}>
                            <CloseIcon/>
                        </IconButton>
                }
            <Button
                className="header__button"
                color="success"
                variant="contained"
                onClick={() => {
                    dispatch(changeFind(inputText.findText))
                }}>
                Найти
            </Button>
        </div>
    )
}
export default HeaderFind;