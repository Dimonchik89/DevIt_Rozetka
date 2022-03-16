import React, {memo} from "react";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFind } from "../../hook/useFind";
import { addReview } from "../../store/action/review";
import { Field, reduxForm } from 'redux-form'
import FormTextField from "../FormsControl/FormTextField";
import "./form.scss";

let FormReview = memo(({selectGood, ...resProps}) => {
    const dispatch = useDispatch();
    const advantages = useFind("");
    const disadvantages = useFind("");
    const comment = useFind("");
    let review = {};
    const { handleSubmit } = resProps;
    return (
        <form
            onSubmit={handleSubmit}
            // onSubmit={() => {
            //     handleSubmit()
            //     review = {
            //         advantages: advantages.findText,
            //         disadvantages: disadvantages.findText,
            //         comment: comment.findText,
            //         raiting: 5
            //     }
            //     let newGood = selectGood
            //     newGood.review.push(review)
            //     dispatch(addReview(newGood))
            //     advantages.resetFindText("")
            //     disadvantages.resetFindText("")
            //     comment.resetFindText("")
            // }}
            className="form mt-50 p-16 border"
        >
            <Typography
                variant="h4"
                component="h3"
                sx={{textAlign: "center", marginBottom: "1rem"}}
            >
                Оставить отзыв
            </Typography>
            <Field
                name="advantages"
                label="Достоинства"
                variant="outlined"
                color="success"
                margin="none"
                className="form__input"
                component={FormTextField}
            />
            <Field
                name="disadvantages"
                label="Недостатки"
                variant="outlined"
                color="success"
                margin="none"
                className="form__input"
                component={FormTextField}
            />
            <Field
                name="comment"
                label="Коментарий"
                variant="outlined"
                color="success"
                className="form__input"
                component={FormTextField}
            />
            {/* <TextField
                label="Достоинства"
                variant="outlined"
                color="success"
                margin="none"
                className="form__input"
                value={advantages.findText}
                onChange={advantages.setChangeFindText}/> */}
            {/* <TextField
                label="Недостатки"
                variant="outlined"
                color="success"
                margin="none"
                className="form__input"
                value={disadvantages.findText}
                onChange={disadvantages.setChangeFindText}/> */}
            {/* <TextField
                label="Коментарий"
                variant="outlined"
                color="success"
                className="form__input"
                value={comment.findText}
                onChange={comment.setChangeFindText}/> */}
            <Button variant="contained" color="success" sx={{display: "block"}} type="submit">
                Отправить
            </Button>
        </form>
    )
})

FormReview = reduxForm({
    form: "review"
})(FormReview)

export default FormReview;