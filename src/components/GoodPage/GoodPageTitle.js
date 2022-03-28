import React, {memo} from "react";
import { changeTitle } from "../../helper/helper";
import TextBlock from "../TextBlock/TextBlock";
import "../../style/helper.scss";

const GoodPageTitle = memo(({title, model}) => {
    return (
        <>
            <TextBlock title={title} text={changeTitle(model)} titleClass="inline" textClass="ml-05" titleVariant="h3" textVariant="h3"/>
        </>
    )
})
export default GoodPageTitle;