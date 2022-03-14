import React, {memo} from "react";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFind } from "../../hook/useFind";
import { addReview } from "../../store/action/review";
import "./form.scss";

const FormReview = memo(({selectGood}) => {
    const dispatch = useDispatch();
    const advantages = useFind("");
    const disadvantages = useFind("");
    const comment = useFind("");
    let review = {};
    return (
        <Box
            component="form"
            onSubmit={(e) => {
                e.preventDefault();
                review = {
                    advantages: advantages.findText,
                    disadvantages: disadvantages.findText,
                    comment: comment.findText,
                    raiting: 5
                }
                let newGood = selectGood
                newGood.review.push(review)
                dispatch(addReview(newGood))
                advantages.resetFindText("")
                disadvantages.resetFindText("")
                comment.resetFindText("")
            }}
            className="form mt-50 p-16 border"
        >
            <Typography
                variant="h4"
                component="h3"
                sx={{textAlign: "center", marginBottom: "1rem"}}
            >
                Оставить отзыв
            </Typography>
            <TextField
                label="Достоинства"
                variant="outlined"
                color="success"
                margin="none"
                className="form__input"
                value={advantages.findText}
                onChange={advantages.setChangeFindText}/>
            <TextField
                label="Недостатки"
                variant="outlined"
                color="success"
                margin="none"
                className="form__input"
                value={disadvantages.findText}
                onChange={disadvantages.setChangeFindText}/>
            <TextField
                label="Коментарий"
                variant="outlined"
                color="success"
                className="form__input"
                value={comment.findText}
                onChange={comment.setChangeFindText}/>
            <Button variant="contained" color="success" sx={{display: "block"}} type="submit">
                Success
            </Button>
        </Box>
    )
})

export default FormReview;