import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import GppGoodIcon from '@mui/icons-material/GppGood';


import "../../style/vars.scss"

const GoodPageAll = ({selectGood}) => {

    return (
        <div className="good-page__content  mt-30">
            <Container>
                <Grid container>
                    <Grid item md={6}>
                        <div className="">
                            <img src={selectGood.img} alt={selectGood.model} />
                        </div>

                        <div className="mt-30">
                            <Typography
                                variant="h5"
                                component="span">
                                {selectGood.diagonal}/
                            </Typography>
                            <Typography
                                variant="h5"
                                component="span">
                                {selectGood.resolution}/
                            </Typography>
                            <Typography
                                variant="h5"
                                component="span">
                                {selectGood.processorModel}/
                            </Typography>
                            <Typography
                                variant="h5"
                                component="span">
                                {selectGood.video}/
                            </Typography>
                        </div>
                        <div className="good-page__discription mt-50">
                            <div className="goods-page__title">
                                <Typography
                                    variant="h3"
                                    component="span"
                                >
                                    Описание:
                                </Typography>
                                <Typography
                                    variant="h2"
                                    component="h2"
                                    sx={{color: "#e3e3e3"}}
                                >
                                    {selectGood.model}
                                </Typography>
                            </div>
                            <Typography
                                variant="h6"
                                component="p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur autem corporis nostrum laborum quas dolore exercitationem blanditiis. Deserunt perspiciatis numquam ipsum obcaecati voluptates inventore dolorum architecto veniam officia minus!
                                    Et quidem sint nam sit, ad nihil, vero praesentium dolorem explicabo commodi dolore aliquam tenetur soluta enim culpa harum itaque eos minima repudiandae perspiciatis eum qui! Nam in ratione optio.
                                    Reprehenderit, rerum. Vero, nostrum qui. Quas nihil velit, aspernatur ipsum esse voluptas voluptatibus, iure culpa, nemo repudiandae quidem dolorem fuga ut obcaecati? Illo, molestiae fugit ab enim ea quisquam sit.
                                    Minima suscipit modi vero odio iure sunt sint, maiores inventore beatae ratione ad culpa saepe eaque nesciunt consequuntur earum debitis. Harum minima expedita animi commodi, ut debitis deserunt doloribus a.
                                    Aliquam eveniet nobis veniam similique quibusdam totam nulla a qui voluptates rem ipsa enim, blanditiis debitis maxime minus libero minima neque quasi temporibus harum voluptatem possimus maiores rerum. Maiores, sed!
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item md={6}>
                        <div className="border  p-10">
                            <Typography
                                variant="h3"
                                component="p">
                                {selectGood.cost}
                            </Typography>
                        </div>

                        <div className="border  p-10  mt-30">
                            <div className="flex align-center">
                                <GppGoodIcon fontSize="large"/>
                                <Typography
                                    variant="h6"
                                    component="p">
                                    Гарантия. 12 месяцев
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="p"
                                    sx={{marginLeft: ".5rem"}}>
                                    Обмен/возврат товара в течение 14 дней
                                </Typography>
                            </div>
                        </div>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default GoodPageAll;