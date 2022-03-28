import React from "react";
import { Link } from "react-router-dom";
import FavoriteIconButton from "../FavoriteIcon/FavoriteIcon";

const GoodContent = ({id, img, model}) => {
    return (
        <>
            <div className="flex space-between align-center">
                <span className="good__stock">Акция</span>
                <FavoriteIconButton/>
            </div>
            <Link to={`/${id}`}>
                <div className="good-content">
                    <img className="good__img" src={img} alt={model} />
                </div>
            </Link>
        </>
    )
}
export default GoodContent;