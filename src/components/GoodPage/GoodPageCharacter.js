import React, {memo} from "react";
import { Container, Grid } from "@mui/material";
import GoodPageTitle from "./GoodPageTitle";
import CharacteristicBlock from "../Characteristics/CharacteristicBlock";
import GoodPageRight from "./GoodPageRight";
import { nanoid } from "nanoid";
import "./goodChar.scss";
import "../../style/helper.scss";

const GoodPageInfo = memo(({selectGood}) => {
    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item md={8}>
                    <GoodPageTitle title="Характеристики" model={selectGood.model}/>
                    <CharacteristicBlock key={nanoid()} selectGood={selectGood} title="Дисплей">
                        <span>diagonal</span>
                        <span>resolution</span>
                    </CharacteristicBlock>
                    <CharacteristicBlock key={nanoid()} selectGood={selectGood} title="Процессор">
                        <span>processor</span>
                        <span>processorModel</span>
                    </CharacteristicBlock>
                    <CharacteristicBlock key={nanoid()} selectGood={selectGood} title="Оперативная память">
                        <span>ram</span>
                    </CharacteristicBlock>
                    <CharacteristicBlock key={nanoid()} selectGood={selectGood} title="Видеокарта">
                        <span>video</span>
                    </CharacteristicBlock>
                </Grid>
                <Grid item md={4}>
                    <GoodPageRight selectGood={selectGood}/>
                </Grid>
            </Grid>
        </Container>
    )
})
export default GoodPageInfo;