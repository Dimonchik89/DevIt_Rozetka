import React, {memo} from "react";
import { useDispatch } from "react-redux";
import { addReview } from "../../store/action/review";
import { Container, Grid, Typography } from "@mui/material";
import GppGoodIcon from '@mui/icons-material/GppGood';
import Description from "../Description/Description";
import ShortCharacteristics from "../ShortŠ”haracteristics/ShortCharacteristics";
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
                                        ā“
                                    </Typography>
                                </div>
                                <div className="mr-15">
                                    <ButtonAddToCart selectGood={selectGood} styleClass=""/>
                                </div>
                                <FavoriteIconButton/>
                            </div>
                        </div>
                        <Saler/>
                        <InfoBlock icon={<GppGoodIcon fontSize="large"/>} title="ŠŠ°ŃŠ°Š½ŃŠøŃ. 12 Š¼ŠµŃŃŃŠµŠ²" text="ŠŠ±Š¼ŠµŠ½/Š²Š¾Š·Š²ŃŠ°Ń ŃŠ¾Š²Š°ŃŠ° Š² ŃŠµŃŠµŠ½ŠøŠµ 14 Š“Š½ŠµŠ¹ "/>
                        <InfoBlock icon={<GppGoodIcon fontSize="large"/>} title="Š”Š°Š¼Š¾Š²ŃŠ²Š¾Š· ŠøŠ· Š¾ŃŠ“ŠµŠ»ŠµŠ½ŠøŠ¹ ŠæŠ¾ŃŃŠ¾Š²ŃŃ Š¾ŠæŠµŃŠ°ŃŠ¾ŃŠ¾Š²" text="ŠŃŠæŃŠ°Š²ŠøŠ¼ ŃŠµŠ³Š¾Š“Š½Ń"/>
                        <InfoBlock icon={<GppGoodIcon fontSize="large"/>} title="ŠŠæŠ»Š°ŃŠ°: " text="ŠŠæŠ»Š°ŃŠ° ŠæŃŠø ŠæŠ¾Š»ŃŃŠµŠ½ŠøŠø ŃŠ¾Š²Š°ŃŠ°, ŠŠ°ŃŃŠ¾Š¹ Š¾Š½Š»Š°Š¹Š½, Google Pay, ŠŠµŠ·Š½Š°Š»ŠøŃŠ½ŃŠ¼Šø Š“Š»Ń ŃŃŠøŠ“ŠøŃŠµŃŠŗŠøŃ Š»ŠøŃ, ŠŠµŠ·Š½Š°Š»ŠøŃŠ½ŃŠ¼Šø Š“Š»Ń ŃŠøŠ·ŠøŃŠµŃŠŗŠøŃ Š»ŠøŃ, PrivatPay, Apple Pay, ŠŃŠµŠ“ŠøŃ, ŠŠæŠ»Š°ŃŠ° ŃŠ°ŃŃŃŠ¼Šø, ŠŠæŠ»Š°ŃŠ° ŠŗŠ°ŃŃŠ¾Š¹ Š² Š¾ŃŠ“ŠµŠ»ŠµŠ½ŠøŠø"/>
                        <FormReview onSubmit={onSubmit} selectGood={selectGood}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
})
export default GoodPageAll;