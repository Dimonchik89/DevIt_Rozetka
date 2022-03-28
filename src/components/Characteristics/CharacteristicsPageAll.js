import React, {memo} from "react";
import CharacteristicItem from "./CharacteristicItem";
import TextBlock from "../TextBlock/TextBlock";
import { changeTitle } from "../../helper/helper";
import "./characteristics.scss";
import "../../style/helper.scss"

const CharacteristicsPageAll = memo(({selectGood}) => {
    return (
        <div className="mt-50">
            <TextBlock title="Характеристики:" text={changeTitle(selectGood.model)} titleClass="inline" textClass="characteristic__title ml-05" titleVariant="h3" textVariant="h2"/>
            <div className="mt-30">
                <CharacteristicItem title="Диагональ экрана" info={selectGood.diagonal}/>
                <CharacteristicItem title="Разрешение экрана" info={selectGood.resolution}/>
                <CharacteristicItem title="Модель проессора" info={selectGood.processor}/>
                <CharacteristicItem title="Оперативная память" info={selectGood.ram}/>
            </div>
        </div>
    )
})
export default CharacteristicsPageAll;