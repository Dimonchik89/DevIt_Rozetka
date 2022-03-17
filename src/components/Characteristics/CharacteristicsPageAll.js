import React, {memo} from "react";
import { Typography } from "@mui/material";
import CharacteristicItem from "./CharacteristicItem";
import "./characteristics.scss";
import "../../style/helper.scss"

const CharacteristicsPageAll = memo(({selectGood}) => {
    return (
        <div className="mt-50">
            <Typography
                variant="h3"
                component="span">
                Характеристики
            </Typography>
            <Typography
                variant="h2"
                component="h2"
                sx={{color: "#e3e3e3", wordWrap: "break-word"}}>
                {selectGood.model}
            </Typography>
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