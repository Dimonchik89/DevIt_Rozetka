import React, {memo} from "react";
import { useDispatch } from "react-redux";
import { addReview } from "../../store/action/review";
import { Container, Grid, Typography } from "@mui/material";
import GppGoodIcon from '@mui/icons-material/GppGood';
import Description from "../Description/Description";
import ShortCharacteristics from "../ShortСharacteristics/ShortCharacteristics";
import CharacteristicsPageAll from "../Characteristics/CharacteristicsPageAll";
import InfoBlock from "../InfoBlock/InfoBlock";
import FormReview from "../Form/FormReview";
import FavoriteIconButton from "../FavoriteIcon/FavoriteIcon";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";
import Saler from "../Saler/Saler";
import "./goodPage.scss"
import "../../style/helper.scss";
import "../../style/vars.scss";


const GoodPageAll = memo(({selectGood}) => {
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        const newGood = selectGood;
        newGood.review.push(formData)
        dispatch(addReview(newGood))
    }
    return (
        <div className="mt-30">
            <Container>
                <Grid container spacing={4}>
                    <Grid item md={6}>
                        <div className="">
                            <img src={selectGood.img} alt={selectGood.model} />
                        </div>
                            <ShortCharacteristics selectGood={selectGood}/>
                            <Description selectGood={selectGood}/>
                            <CharacteristicsPageAll selectGood={selectGood}/>
                    </Grid>
                    <Grid item md={6}>
                        <div className="border  p-16">
                            <div className="flex">
                                <div className="mr-15">
                                    <Typography
                                        variant="h3"
                                        component="span"
                                        sx={{color: "red"}}>
                                        {selectGood.cost}
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        component="span"
                                        sx={{color: "red"}}
                                    >
                                        ₴
                                    </Typography>
                                </div>
                                <div className="mr-15">
                                    <ButtonAddToCart selectGood={selectGood} styleClass=""/>
                                </div>
                                <FavoriteIconButton/>
                            </div>
                        </div>
                        <Saler/>
                        <InfoBlock icon={<GppGoodIcon fontSize="large"/>} title="Гарантия. 12 месяцев" text="Обмен/возврат товара в течение 14 дней "/>
                        <InfoBlock icon={<GppGoodIcon fontSize="large"/>} title="Самовывоз из отделений почтовых операторов" text="Отправим сегодня"/>
                        <InfoBlock icon={<GppGoodIcon fontSize="large"/>} title="Оплата: " text="Оплата при получении товара, Картой онлайн, Google Pay, Безналичными для юридических лиц, Безналичными для физических лиц, PrivatPay, Apple Pay, Кредит, Оплата частями, Оплата картой в отделении"/>
                        <FormReview onSubmit={onSubmit} selectGood={selectGood}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
})
export default GoodPageAll;