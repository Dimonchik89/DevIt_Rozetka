import React, {memo} from "react";
import TextBlock from "../TextBlock/TextBlock";
import "./characteristics.scss";
import "../../style/helper.scss"

const CharacteristicItem = memo(({title, info}) => {
    return (
        <div className="mt-15 characteristics-page__all">
            <TextBlock title={title} text={info} titleClass="" textClass="" titleVariant="h6" textVariant="h6"/>
        </div>
    )
})

export default CharacteristicItem;