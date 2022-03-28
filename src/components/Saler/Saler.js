import React from "react";
import TextBlock from "../TextBlock/TextBlock";
import "../Review/review.scss";

const Saler = () => {
    return (
        <div className="border p-16 mt-30">
            <div className="flex  space-between">
                <div>
                    <TextBlock title="Продавец:" text="Rozetka" titleClass="inline" textClass="review__title ml-05"  titleVariant="h6" textVariant="h6"/>
                </div>
                <img className="good-page__logo" src="https://content1.rozetka.com.ua/sellers/logo_svg/original/187326382.svg" alt="logo" />
            </div>
        </div>
    )
}
export default Saler;