import React, { memo } from "react";
import { Link } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import GoodContent from "./GoodContent";
import GoodFooter from "./GoodFooter";
import "./good.scss";
import "../../style/helper.scss";

const Good = memo((props) => {
    const {id, model, rating} = props;
    return (
        <div className="good flex d-column">
            <GoodContent {...props}/>
            <div>
                <CardContent>
                    <Link to={`/${id}`} className="decoration-none">
                        <Typography variant="h5" color="text.secondary" className="good__title">
                            {model.replace(/\_/g, " ")}
                        </Typography>
                    </Link>
                </CardContent>
                <div>
                    <Rating
                    name="read-only"
                    value={rating}
                    readOnly/>
                </div>
            </div>
            <GoodFooter {...props}/>
        </div>
    )
})
export default Good;