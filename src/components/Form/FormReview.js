import React, {memo} from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { Field, reduxForm } from 'redux-form'
import FormTextField from "../FormsControl/FormTextField";
import "./form.scss";

let FormReview = memo(({selectGood, ...resProps}) => {
    const { handleSubmit } = resProps;
    return (
        <form
            onSubmit={handleSubmit}
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